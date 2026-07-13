const COLORS = ["purple", "cyan", "blue", "red", "green", "yellow", "orange", "grey"];

let cats = [];

async function boot() {
  const saved = await chrome.storage.sync.get("categories");
  cats = JSON.parse(JSON.stringify(saved.categories || DEFAULT_CATEGORIES));
  renderAll();

  document.getElementById("addBtn").addEventListener("click", addCategory);
  document.getElementById("saveBtn").addEventListener("click", save);
  document.getElementById("resetBtn").addEventListener("click", reset);
}

function renderAll() {
  const list = document.getElementById("catList");
  list.innerHTML = "";
  cats.forEach((cat, i) => list.appendChild(buildCard(cat, i)));
}

function buildCard(cat, idx) {
  const card = document.createElement("div");
  card.className = "cat-card";
  card.dataset.idx = idx;

  const header = document.createElement("div");
  header.className = "cat-header";

  // Name input
  const nameInput = document.createElement("input");
  nameInput.className = "cat-name";
  nameInput.value = cat.name;
  nameInput.placeholder = "Category name";
  nameInput.addEventListener("input", e => { cats[idx].name = e.target.value; });

  // Color swatches
  const colors = document.createElement("div");
  colors.className = "colors";
  COLORS.forEach(c => {
    const sw = document.createElement("span");
    sw.className = `color-swatch swatch-${c}${cat.color === c ? " selected" : ""}`;
    sw.title = c;
    sw.addEventListener("click", () => {
      cats[idx].color = c;
      card.querySelectorAll(".color-swatch").forEach(s => s.classList.remove("selected"));
      sw.classList.add("selected");
    });
    colors.appendChild(sw);
  });

  // Remove button
  const removeBtn = document.createElement("button");
  removeBtn.className = "remove-btn";
  removeBtn.textContent = "✕ Remove";
  removeBtn.addEventListener("click", () => {
    cats.splice(idx, 1);
    renderAll();
  });

  header.append(nameInput, colors, removeBtn);

  // Patterns textarea
  const pLabel = document.createElement("div");
  pLabel.className = "patterns-label";
  pLabel.textContent = "URL patterns (one per line)";

  const textarea = document.createElement("textarea");
  textarea.className = "patterns-input";
  textarea.value = cat.patterns.join("\n");
  textarea.addEventListener("input", e => {
    cats[idx].patterns = e.target.value.split("\n").map(s => s.trim()).filter(Boolean);
  });

  const hint = document.createElement("div");
  hint.className = "patterns-hint";
  hint.textContent = "Match any tab URL containing these strings. e.g. github.com, localhost, atlassian.net";

  card.append(header, pLabel, textarea, hint);
  return card;
}

function addCategory() {
  cats.push({ id: `custom_${Date.now()}`, name: "New Category", color: "grey", patterns: [] });
  renderAll();
  document.getElementById("catList").lastElementChild.querySelector(".cat-name").focus();
}

async function save() {
  await chrome.storage.sync.set({ categories: cats });
  const msg = document.getElementById("saveMsg");
  msg.style.display = "inline";
  setTimeout(() => msg.style.display = "none", 2000);
}

async function reset() {
  if (!confirm("Reset all categories to defaults?")) return;
  cats = JSON.parse(JSON.stringify(DEFAULT_CATEGORIES));
  await chrome.storage.sync.set({ categories: cats });
  renderAll();
}

boot();
