let scope = "window";
let lastGroupIds = []; // for undo

const COLOR_DOT = {
  purple: "dot-purple", cyan: "dot-cyan", blue: "dot-blue",
  red: "dot-red", green: "dot-green", yellow: "dot-yellow",
  orange: "dot-orange", grey: "dot-grey", pink: "dot-pink"
};

// ── Boot ──────────────────────────────────────────────────────────────────────

async function boot() {
  const saved = await chrome.storage.sync.get([
    "categories", "autoGroupOnStartup", "autoGroupOnNewTab", "userRules"
  ]);
  const cats = saved.categories || DEFAULT_CATEGORIES;
  const userRules = saved.userRules || {};
  renderChips(cats);

  // Restore toggle states
  document.getElementById("autoStartup").checked = !!saved.autoGroupOnStartup;
  document.getElementById("autoNewTab").checked   = !!saved.autoGroupOnNewTab;

  // Scope buttons
  document.querySelectorAll(".scope-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".scope-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      scope = btn.dataset.scope;
    });
  });

  // Auto-group toggles
  document.getElementById("autoStartup").addEventListener("change", async e => {
    await chrome.storage.sync.set({ autoGroupOnStartup: e.target.checked });
  });

  document.getElementById("autoNewTab").addEventListener("change", async e => {
    await chrome.storage.sync.set({ autoGroupOnNewTab: e.target.checked });
  });

  document.getElementById("groupBtn").addEventListener("click", () => run(cats, userRules));
  document.getElementById("undoBtn").addEventListener("click", undo);
  document.getElementById("optionsLink").addEventListener("click", () => chrome.runtime.openOptionsPage());
}

// ── Render category chips ─────────────────────────────────────────────────────

function renderChips(cats) {
  const grid = document.getElementById("catGrid");
  grid.innerHTML = "";
  [...cats, { name: "Other", color: "grey" }].forEach(cat => {
    const chip = document.createElement("div");
    chip.className = "cat-chip";
    chip.innerHTML = `<span class="dot ${COLOR_DOT[cat.color] || 'dot-grey'}"></span>${cat.name}`;
    grid.appendChild(chip);
  });
}

// ── Main run ──────────────────────────────────────────────────────────────────

async function run(cats, userRules) {
  const btn = document.getElementById("groupBtn");
  const statusEl = document.getElementById("status");
  btn.disabled = true;
  setStatus("loading", "<span class='spinner'></span>Scanning tabs…");

  try {
    // Get target tabs
    const queryOpts = scope === "window"
      ? { currentWindow: true, groupId: chrome.tabGroups.TAB_GROUP_ID_NONE }
      : { groupId: chrome.tabGroups.TAB_GROUP_ID_NONE };

    const tabs = await chrome.tabs.query(queryOpts);
    const eligible = tabs.filter(t => t.url && !t.url.startsWith("chrome://") && !t.url.startsWith("chrome-extension://") && !t.url.startsWith("brave://") && !t.url.startsWith("about:"));

    if (eligible.length === 0) {
      setStatus("loading", "No ungrouped tabs found — everything is already tidy! 🎉");
      btn.disabled = false;
      return;
    }

    // Bucket by category
    const buckets = new Map();
    const otherIds = [];

    for (const tab of eligible) {
      const cat = categorize(tab.url, tab.title, cats, userRules);
      if (cat) {
        if (!buckets.has(cat.id)) buckets.set(cat.id, { cat, tabIds: [] });
        buckets.get(cat.id).tabIds.push(tab.id);
      } else {
        otherIds.push(tab.id);
      }
    }

    lastGroupIds = [];
    const results = [];
    let totalGrouped = 0;

    for (const [, { cat, tabIds }] of buckets) {
      if (tabIds.length === 0) continue;
      const groupId = await chrome.tabs.group({ tabIds });
      await chrome.tabGroups.update(groupId, {
        title: cat.name,
        color: cat.color,
        collapsed: tabIds.length > 6
      });
      lastGroupIds.push(groupId);
      results.push(`<strong>${cat.name}</strong>: ${tabIds.length}`);
      totalGrouped += tabIds.length;
    }

    if (otherIds.length > 0) {
      const groupId = await chrome.tabs.group({ tabIds: otherIds });
      await chrome.tabGroups.update(groupId, { title: "Other", color: "grey", collapsed: true });
      lastGroupIds.push(groupId);
      results.push(`<strong>Other</strong>: ${otherIds.length}`);
      totalGrouped += otherIds.length;
    }

    const summary = results.join(" · ");
    setStatus("success", `Grouped ${totalGrouped} tabs into ${lastGroupIds.length} groups<br><span style="opacity:0.7;font-size:10px">${summary}</span>`);
    document.getElementById("undoBtn").style.display = "block";

  } catch (err) {
    setStatus("error", `Error: ${err.message}`);
  }

  btn.disabled = false;
}

// ── Undo ──────────────────────────────────────────────────────────────────────

async function undo() {
  if (lastGroupIds.length === 0) return;
  try {
    for (const gid of lastGroupIds) {
      const group = await chrome.tabGroups.get(gid).catch(() => null);
      if (!group) continue;
      const tabs = await chrome.tabs.query({ groupId: gid });
      if (tabs.length > 0) await chrome.tabs.ungroup(tabs.map(t => t.id));
    }
    lastGroupIds = [];
    document.getElementById("undoBtn").style.display = "none";
    setStatus("loading", "Ungrouped. Tabs restored to original state.");
  } catch (err) {
    setStatus("error", `Undo failed: ${err.message}`);
  }
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function setStatus(type, html) {
  const el = document.getElementById("status");
  el.className = `status ${type}`;
  el.innerHTML = html;
}

boot();
