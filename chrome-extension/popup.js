// PCI SAQ Pocket Reference — popup logic

function selectTab(name) {
  document.querySelectorAll(".tab").forEach((t) => t.classList.remove("active"));
  document.querySelectorAll(".panel").forEach((p) => p.classList.remove("active"));
  const tab = document.querySelector(`.tab[data-tab="${name}"]`);
  const panel = document.getElementById(name);
  if (tab && panel) {
    tab.classList.add("active");
    panel.classList.add("active");
  }
}

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => selectTab(tab.dataset.tab));
});

const initial = location.hash.replace(/^#/, "");
if (initial) selectTab(initial);

const decisionList = document.getElementById("decision-list");
decisionSteps.forEach((step) => {
  const li = document.createElement("li");
  li.className = "step";
  li.innerHTML = `
    <div class="step-num">Step ${step.n}</div>
    <p class="step-q"></p>
    <dl class="step-answers">
      <div class="step-answer yes"><dt>Yes</dt><dd></dd></div>
      <div class="step-answer no"><dt>No</dt><dd></dd></div>
    </dl>
  `;
  li.querySelector(".step-q").textContent = step.q;
  li.querySelector(".step-answer.yes dd").textContent = step.yes;
  li.querySelector(".step-answer.no dd").textContent = step.no;
  decisionList.appendChild(li);
});

const glossaryList = document.getElementById("glossary-list");
const search = document.getElementById("glossary-search");

function renderGlossary(filter) {
  const f = (filter || "").trim().toLowerCase();
  glossaryList.innerHTML = "";
  const filtered = !f
    ? glossary
    : glossary.filter(
        (t) =>
          t.term.toLowerCase().includes(f) ||
          (t.aka && t.aka.toLowerCase().includes(f)) ||
          t.def.toLowerCase().includes(f),
      );
  if (filtered.length === 0) {
    const empty = document.createElement("p");
    empty.style.color = "#94a3b8";
    empty.style.fontSize = "12px";
    empty.textContent = "No matches.";
    glossaryList.appendChild(empty);
    return;
  }
  filtered.forEach((t) => {
    const div = document.createElement("div");
    div.className = "term";
    div.innerHTML = `
      <dt></dt>
      <dd></dd>
    `;
    const dt = div.querySelector("dt");
    dt.textContent = t.term;
    if (t.aka) {
      const aka = document.createElement("span");
      aka.className = "aka";
      aka.textContent = `(${t.aka})`;
      dt.appendChild(aka);
    }
    div.querySelector("dd").textContent = t.def;
    glossaryList.appendChild(div);
  });
}

search.addEventListener("input", (e) => renderGlossary(e.target.value));
renderGlossary("");

const checklistList = document.getElementById("checklist-links");
Object.entries(checklistUrls).forEach(([name, url]) => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = url;
  a.target = "_blank";
  a.rel = "noopener";
  a.textContent = `${name} →`;
  li.appendChild(a);
  checklistList.appendChild(li);
});
