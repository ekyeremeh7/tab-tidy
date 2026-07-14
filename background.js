// Tab Tidy – Background Service Worker
// Handles: auto-group on startup, auto-group on new tab, badge count

importScripts("categories.js");

// ── Helpers ───────────────────────────────────────────────────────────────────

function categorize(url, cats) {
  if (!url) return null;
  const lower = url.toLowerCase();
  for (const cat of cats) {
    for (const p of cat.patterns) {
      if (lower.includes(p.toLowerCase())) return cat;
    }
  }
  return null;
}

function isSkippable(url) {
  if (!url) return true;
  return (
    url.startsWith("chrome://") ||
    url.startsWith("chrome-extension://") ||
    url.startsWith("brave://") ||
    url.startsWith("about:") ||
    url.startsWith("edge://") ||
    url === "chrome://newtab/" ||
    url === ""
  );
}

async function getSettings() {
  const defaults = {
    autoGroupOnStartup: false,
    autoGroupOnNewTab: false,
    categories: DEFAULT_CATEGORIES,
  };
  const saved = await chrome.storage.sync.get(Object.keys(defaults));
  return { ...defaults, ...saved };
}

// ── Core grouping logic (window-scoped) ───────────────────────────────────────

async function groupWindowTabs(windowId, cats) {
  const tabs = await chrome.tabs.query({
    windowId,
    groupId: chrome.tabGroups.TAB_GROUP_ID_NONE,
  });

  const eligible = tabs.filter(t => !isSkippable(t.url));
  if (eligible.length === 0) return 0;

  const buckets = new Map();
  const otherIds = [];

  for (const tab of eligible) {
    const cat = categorize(tab.url, cats);
    if (cat) {
      if (!buckets.has(cat.id)) buckets.set(cat.id, { cat, tabIds: [] });
      buckets.get(cat.id).tabIds.push(tab.id);
    } else {
      otherIds.push(tab.id);
    }
  }

  let grouped = 0;

  for (const [, { cat, tabIds }] of buckets) {
    if (tabIds.length === 0) continue;
    try {
      const groupId = await chrome.tabs.group({ tabIds });
      await chrome.tabGroups.update(groupId, {
        title: cat.name,
        color: cat.color,
        collapsed: tabIds.length > 6,
      });
      grouped += tabIds.length;
    } catch (_) {}
  }

  if (otherIds.length > 0) {
    try {
      const groupId = await chrome.tabs.group({ tabIds: otherIds });
      await chrome.tabGroups.update(groupId, { title: "Other", color: "grey", collapsed: true });
      grouped += otherIds.length;
    } catch (_) {}
  }

  return grouped;
}

// ── Badge count ───────────────────────────────────────────────────────────────

async function updateBadge() {
  try {
    const tabs = await chrome.tabs.query({
      groupId: chrome.tabGroups.TAB_GROUP_ID_NONE,
    });
    const count = tabs.filter(t => !isSkippable(t.url)).length;

    if (count === 0) {
      await chrome.action.setBadgeText({ text: "" });
    } else {
      await chrome.action.setBadgeText({ text: count > 99 ? "99+" : String(count) });
      await chrome.action.setBadgeBackgroundColor({ color: "#6c63ff" });
    }
  } catch (_) {}
}

// ── Auto-group all windows ────────────────────────────────────────────────────

async function autoGroupAll() {
  const { categories } = await getSettings();
  const windows = await chrome.windows.getAll();
  for (const win of windows) {
    await groupWindowTabs(win.id, categories);
  }
  await updateBadge();
}

// ── Event: browser startup ────────────────────────────────────────────────────

chrome.runtime.onStartup.addListener(async () => {
  const { autoGroupOnStartup } = await getSettings();
  if (autoGroupOnStartup) {
    // Small delay to let tabs finish loading
    setTimeout(autoGroupAll, 2000);
  }
  await updateBadge();
});

// ── Event: extension installed / updated ──────────────────────────────────────

chrome.runtime.onInstalled.addListener(async () => {
  await updateBadge();
});

// ── Event: new tab created ────────────────────────────────────────────────────

chrome.tabs.onCreated.addListener(async (tab) => {
  await updateBadge();

  const { autoGroupOnNewTab, categories } = await getSettings();
  if (!autoGroupOnNewTab) return;
  if (isSkippable(tab.url)) return;

  // Wait for the tab to finish loading before grouping
  // We'll handle it in onUpdated instead
});

// ── Event: tab URL updated (catches navigation) ───────────────────────────────

chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  await updateBadge();

  const { autoGroupOnNewTab, categories } = await getSettings();
  if (!autoGroupOnNewTab) return;

  // Only act when tab finishes loading and is currently ungrouped
  if (changeInfo.status !== "complete") return;
  if (tab.groupId !== chrome.tabGroups.TAB_GROUP_ID_NONE) return;
  if (isSkippable(tab.url)) return;

  const cat = categorize(tab.url, categories);
  if (!cat) return;

  try {
    // Check if a group with this category already exists in the window
    const groups = await chrome.tabGroups.query({ windowId: tab.windowId });
    const existing = groups.find(g => g.title === cat.name);

    if (existing) {
      // Add to existing group
      await chrome.tabs.group({ tabIds: [tabId], groupId: existing.id });
    } else {
      // Create new group
      const groupId = await chrome.tabs.group({ tabIds: [tabId] });
      await chrome.tabGroups.update(groupId, {
        title: cat.name,
        color: cat.color,
        collapsed: false,
      });
    }
  } catch (_) {}
});

// ── Event: tab removed ────────────────────────────────────────────────────────

chrome.tabs.onRemoved.addListener(async () => {
  await updateBadge();
});

// ── Event: tab moved to/from group ───────────────────────────────────────────

chrome.tabs.onAttached.addListener(async () => await updateBadge());
chrome.tabs.onDetached.addListener(async () => await updateBadge());

// ── Message from popup (manual trigger) ──────────────────────────────────────

chrome.runtime.onMessage.addListener((msg, _sender, sendResponse) => {
  if (msg.type === "GROUP_ALL") {
    autoGroupAll().then(() => sendResponse({ ok: true }));
    return true;
  }
  if (msg.type === "UPDATE_BADGE") {
    updateBadge().then(() => sendResponse({ ok: true }));
    return true;
  }
});
