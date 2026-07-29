const atlasState = {
  viewMode: "topic",
  activeIslandId: "all",
  activeNodeId: null,
  isPanelOpen: false,
  isRolling: false,
  isGameDismissed: false,
  zoomIndex: 1,
  seenNodeIds: new Set(),
};

const data = window.careerAtlasData ?? careerAtlasData;
const stage = document.querySelector("[data-atlas-stage]");
const linesLayer = document.querySelector("[data-atlas-lines]");
const islandLayer = document.querySelector("[data-islands]");
const nodeLayer = document.querySelector("[data-nodes]");
const islandList = document.querySelector("[data-island-list]");
const detailCard = document.querySelector("[data-detail-card]");
const atlasBody = document.querySelector("[data-atlas-body]");
const panelToggle = document.querySelector("[data-panel-toggle]");
const panelLabel = document.querySelector("[data-panel-label]");
const themePanelContent = document.querySelector("[data-panel-content]");
const viewModeButtons = document.querySelectorAll("[data-view-mode]");
const resetButton = document.querySelector("[data-reset-atlas]");
const drawButton = document.querySelector("[data-draw-node]");
const freeExploreButton = document.querySelector("[data-free-explore]");
const drawLabel = document.querySelector("[data-draw-label]");
const diceFace = document.querySelector("[data-dice-face]");
const seenCount = document.querySelector("[data-seen-count]");
const gameStep = document.querySelector("[data-game-step]");
const gameStatus = document.querySelector("[data-game-status]");
const zoomOutButton = document.querySelector("[data-zoom-out]");
const zoomInButton = document.querySelector("[data-zoom-in]");
const zoomLabel = document.querySelector("[data-zoom-label]");

const zoomLevels = [0.86, 1, 1.18, 1.34];

const seenStorageKey = "attention-atlas-seen-nodes";
const storedSeenNodeIds = JSON.parse(sessionStorage.getItem(seenStorageKey) || "[]");
atlasState.seenNodeIds = new Set(storedSeenNodeIds);

const storedTheme = localStorage.getItem("portfolio-theme");
document.body.dataset.theme = storedTheme === "dark" ? "dark" : "light";

function escapeAttribute(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function truncateText(value, maxLength) {
  const text = String(value).trim();
  return text.length > maxLength ? `${text.slice(0, maxLength - 1)}…` : text;
}

document.querySelector("[data-atlas-eyebrow]").textContent = data.meta.eyebrow;
document.querySelector("[data-atlas-title]").innerHTML =
  `<span class="title-full"><span class="title-word">Rolling</span> <span class="title-word">Atlas</span></span><span class="title-compact"><span class="title-word">Rolling</span> <span class="title-word">Atlas</span></span>`;
document.querySelector("[data-atlas-intro]").textContent = data.meta.intro;
document.querySelector("[data-source-note]").textContent = data.meta.sourceNote;
document.querySelector("[data-node-count]").textContent = data.nodes.length;

const islandsById = new Map(data.islands.map((island) => [island.id, island]));

function getPosition(item) {
  return atlasState.viewMode === "phase" ? item.phasePosition : item.topicPosition;
}

function getCurrentNodes() {
  return atlasState.activeIslandId === "all"
    ? data.nodes
    : data.nodes.filter((node) => node.islandId === atlasState.activeIslandId);
}

function rememberSeenNode(nodeId) {
  atlasState.seenNodeIds.add(nodeId);
  sessionStorage.setItem(
    seenStorageKey,
    JSON.stringify([...atlasState.seenNodeIds]),
  );
}

function openNode(nodeId) {
  const node = data.nodes.find((item) => item.id === nodeId);
  if (!node) return;

  atlasState.activeNodeId = node.id;
  atlasState.activeIslandId = node.islandId;
  atlasState.isPanelOpen = false;
  rememberSeenNode(node.id);
  render();
}

function freeExplore() {
  atlasState.activeNodeId = null;
  atlasState.activeIslandId = "all";
  atlasState.isGameDismissed = true;
  closeDetailCard();
  syncControls();
}

function drawRandomNode() {
  const candidates = getCurrentNodes();
  const unseenCandidates = candidates.filter((node) => !atlasState.seenNodeIds.has(node.id));
  const pool = unseenCandidates.length ? unseenCandidates : candidates;
  const node = pool[Math.floor(Math.random() * pool.length)];

  if (node) openNode(node.id);
}

function rollDiceAndDraw() {
  if (atlasState.isRolling) return;

  atlasState.isRolling = true;
  atlasState.activeNodeId = null;
  drawButton.disabled = true;
  drawButton.classList.add("rolling");
  renderDetailCard();
  syncControls();
  gameStep.textContent = "Step 1.5 · Rolling";
  gameStatus.textContent =
    "The dice is moving across the map. It will land on one saved reference link for you.";
  drawLabel.textContent = "Rolling...";

  let tick = 0;
  const diceTimer = setInterval(() => {
    tick += 1;
    const nextFace = String((tick % 6) + 1);
    diceFace.textContent = nextFace;
  }, 140);

  window.setTimeout(() => {
    clearInterval(diceTimer);
    atlasState.isRolling = false;
    drawButton.disabled = false;
    drawButton.classList.remove("rolling");
    const finalFace = String(Math.floor(Math.random() * 6) + 1);
    diceFace.textContent = finalFace;
    drawRandomNode();
  }, 1500);
}

function openNextInTheme() {
  const currentNode = data.nodes.find((node) => node.id === atlasState.activeNodeId);
  if (!currentNode) {
    drawRandomNode();
    return;
  }

  const themeNodes = data.nodes.filter((node) => node.islandId === currentNode.islandId);
  const currentIndex = themeNodes.findIndex((node) => node.id === currentNode.id);
  const nextNode = themeNodes[(currentIndex + 1) % themeNodes.length];
  openNode(nextNode.id);
}

function renderIslandList() {
  const islandButtons = [
    `<button class="island-filter active" type="button" data-island-filter="all" style="--island-color: var(--ink)">
      <span class="island-filter-dot"></span>
      <strong>All themes</strong>
      <span>${data.nodes.length}</span>
    </button>`,
    ...data.islands.map((island) => {
      const count = data.nodes.filter((node) => node.islandId === island.id).length;
      return `<button class="island-filter" type="button" data-island-filter="${island.id}" style="--island-color: ${island.color}">
        <span class="island-filter-dot"></span>
        <strong>${island.label}</strong>
        <span>${count}</span>
      </button>`;
    }),
  ];

  islandList.innerHTML = islandButtons.join("");
  islandList.querySelectorAll("[data-island-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      atlasState.activeIslandId = button.dataset.islandFilter;
      atlasState.activeNodeId = null;
      atlasState.isPanelOpen = false;
      render();
    });
  });
}

function renderIslands() {
  islandLayer.innerHTML = data.islands
    .map((island) => {
      const position = getPosition(island);
      const visible =
        atlasState.activeIslandId === "all" || atlasState.activeIslandId === island.id;

      return `<button
        class="island-label ${visible ? "visible" : ""}"
        type="button"
        data-island-id="${island.id}"
        style="--x: ${position.x}; --y: ${position.y}; --island-color: ${island.color}"
        aria-label="${island.label}: ${island.summary}"
      >
        <strong>${island.label}</strong>
        <span>${island.phase}</span>
      </button>`;
    })
    .join("");

  islandLayer.querySelectorAll("[data-island-id]").forEach((button) => {
    button.addEventListener("click", () => {
      atlasState.activeIslandId = button.dataset.islandId;
      atlasState.activeNodeId = null;
      render();
    });
  });
}

function renderNodes() {
  nodeLayer.innerHTML = data.nodes
    .map((node) => {
      const island = islandsById.get(node.islandId);
      const position = getPosition(node);
      const visible =
        atlasState.activeIslandId === "all" || atlasState.activeIslandId === node.islandId;
      const active = atlasState.activeNodeId === node.id;
      const seen = atlasState.seenNodeIds.has(node.id);
      const size = active ? 48 : 34;
      const tooltipLabel = `${truncateText(node.title, 34)} · ${truncateText(node.topics[0] || "", 18)}`;

      return `<button
        class="atlas-node ${visible ? "visible" : ""} ${active ? "active" : ""} ${seen ? "seen" : ""}"
        type="button"
        data-node-id="${node.id}"
        data-node-label="${escapeAttribute(tooltipLabel)}"
        style="--x: ${position.x}; --y: ${position.y}; --node-color: ${island.color}; --node-size: ${size}px"
        aria-label="${node.title}"
      ></button>`;
    })
    .join("");

  nodeLayer.querySelectorAll("[data-node-id]").forEach((button) => {
    button.addEventListener("click", () => {
      openNode(button.dataset.nodeId);
    });
  });
}

function renderLines() {
  const activeNodes = data.nodes.filter(
    (node) =>
      atlasState.activeIslandId === "all" || atlasState.activeIslandId === node.islandId,
  );

  linesLayer.innerHTML = activeNodes
    .map((node) => {
      const island = islandsById.get(node.islandId);
      const nodePosition = getPosition(node);
      const islandPosition = getPosition(island);

      return `<line
        x1="${islandPosition.x}"
        y1="${islandPosition.y}"
        x2="${nodePosition.x}"
        y2="${nodePosition.y}"
      />`;
    })
    .join("");
}

function renderDetailCard() {
  const node = data.nodes.find((item) => item.id === atlasState.activeNodeId);

  if (!node) {
    detailCard.style.removeProperty("--active-color");
    stage.style.removeProperty("--active-color");
    detailCard.classList.add("is-empty");
    detailCard.innerHTML = "";
    return;
  }

  const island = islandsById.get(node.islandId);
  const primaryLink = node.links[0];
  const sourceDomain = primaryLink?.url
    ? primaryLink.url.replace(/^https?:\/\//, "").replace(/^www\./, "").split("/")[0]
    : "reference";
  const hasPreviewImage = Boolean(node.previewImage);

  detailCard.style.setProperty("--active-color", island.color);
  stage.style.setProperty("--active-color", island.color);
  detailCard.classList.remove("is-empty");
  detailCard.innerHTML = `<article class="detail-card">
    <div class="detail-preview ${hasPreviewImage ? "has-image" : ""}" aria-label="Reference preview">
      ${
        hasPreviewImage
          ? `<img src="${node.previewImage}" alt="" loading="lazy">`
          : `<span class="detail-preview-dot"></span>
            <span class="detail-preview-line"></span>
            <span class="detail-preview-line detail-preview-line-short"></span>`
      }
      <div>
        <span>Source</span>
        <strong>${sourceDomain}</strong>
      </div>
    </div>

    <div class="detail-content">
      <button class="detail-close detail-close-top" type="button" data-close-detail aria-label="Close detail card">Close</button>

      <div>
        <p class="eyebrow">${island.label}</p>
        <h3>${node.title}</h3>
      </div>

      <ul class="topic-list" aria-label="Topic words">
        ${node.topics.map((topic) => `<li>${topic}</li>`).join("")}
      </ul>

      <div class="detail-block detail-link-block">
        <strong>Reference link</strong>
        <div class="detail-links">
          ${node.links
            .map(
              (link) => `<a class="detail-link" href="${link.url}" target="${link.url.startsWith("http") ? "_blank" : "_self"}" rel="noreferrer">
                ${link.label}
                <span>Read</span>
              </a>`,
            )
          .join("")}
        </div>
      </div>

      <div class="detail-block detail-note">
        <strong>My reading prompt</strong>
        <p>${node.note}</p>
      </div>

      <div class="detail-actions">
        <button class="detail-action" type="button" data-draw-node-inline>Roll again</button>
        <button class="detail-action" type="button" data-next-theme>Next in theme</button>
      </div>
    </div>
  </article>`;

  detailCard.querySelector("[data-close-detail]").addEventListener("click", closeDetailCard);
  detailCard.querySelector("[data-draw-node-inline]").addEventListener("click", rollDiceAndDraw);
  detailCard.querySelector("[data-next-theme]").addEventListener("click", openNextInTheme);
}

function syncControls() {
  viewModeButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.viewMode === atlasState.viewMode);
  });

  islandList.querySelectorAll("[data-island-filter]").forEach((button) => {
    button.classList.toggle(
      "active",
      button.dataset.islandFilter === atlasState.activeIslandId,
    );
  });

  stage.classList.toggle("is-filtered", atlasState.activeIslandId !== "all");
  stage.classList.toggle("has-active", Boolean(atlasState.activeNodeId));
  stage.classList.toggle("game-dismissed", atlasState.isGameDismissed);
  stage.style.setProperty("--map-zoom", zoomLevels[atlasState.zoomIndex]);
  atlasBody.classList.toggle("panel-collapsed", !atlasState.isPanelOpen);
  panelToggle.setAttribute("aria-expanded", String(atlasState.isPanelOpen));
  panelToggle.setAttribute(
    "aria-label",
    atlasState.isPanelOpen ? "Collapse theme panel" : "Expand theme panel",
  );
  panelLabel.textContent = "Themes";

  if (atlasState.isPanelOpen) {
    themePanelContent.removeAttribute("aria-hidden");
    themePanelContent.removeAttribute("inert");
  } else {
    themePanelContent.setAttribute("aria-hidden", "true");
    themePanelContent.setAttribute("inert", "");
  }

  seenCount.textContent = `${atlasState.seenNodeIds.size} / ${data.nodes.length} opened`;
  zoomLabel.textContent = `${Math.round(zoomLevels[atlasState.zoomIndex] * 100)}%`;
  zoomOutButton.disabled = atlasState.zoomIndex === 0;
  zoomInButton.disabled = atlasState.zoomIndex === zoomLevels.length - 1;

  const activeNode = data.nodes.find((node) => node.id === atlasState.activeNodeId);

  if (activeNode) {
    const island = islandsById.get(activeNode.islandId);
    gameStep.textContent = "Step 2 · Read";
    gameStatus.textContent = `The map picked one ${island.label} node for you. Use the card in the center as a quick reading prompt, then keep wandering.`;
    drawLabel.textContent = "Roll again";
  } else {
    gameStep.textContent = "Step 1 · Draw";
    gameStatus.textContent =
      "This mini game is built from my public-safe bookmark archive. Roll the dice for a random reference, or click any node to explore freely.";
    drawLabel.textContent = "Roll the dice";
  }
}

function render() {
  renderIslands();
  renderNodes();
  renderLines();
  renderDetailCard();
  syncControls();
}

function closeDetailCard() {
  atlasState.activeNodeId = null;
  render();
}

viewModeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    atlasState.viewMode = button.dataset.viewMode;
    render();
  });
});

panelToggle.addEventListener("click", () => {
  atlasState.isPanelOpen = !atlasState.isPanelOpen;
  syncControls();
});

resetButton.addEventListener("click", () => {
  atlasState.viewMode = "topic";
  atlasState.activeIslandId = "all";
  atlasState.activeNodeId = null;
  atlasState.isPanelOpen = false;
  atlasState.isGameDismissed = false;
  atlasState.zoomIndex = 1;
  render();
});

drawButton.addEventListener("click", rollDiceAndDraw);
freeExploreButton.addEventListener("click", freeExplore);

zoomOutButton.addEventListener("click", () => {
  atlasState.zoomIndex = Math.max(0, atlasState.zoomIndex - 1);
  syncControls();
});

zoomInButton.addEventListener("click", () => {
  atlasState.zoomIndex = Math.min(zoomLevels.length - 1, atlasState.zoomIndex + 1);
  syncControls();
});

stage.addEventListener("click", (event) => {
  if (!atlasState.activeNodeId) return;
  if (event.target.closest(".atlas-node, .island-label, .atlas-game, .atlas-zoom")) return;
  closeDetailCard();
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (!atlasState.activeNodeId && !atlasState.isPanelOpen) return;

  atlasState.activeNodeId = null;
  atlasState.isPanelOpen = false;
  render();
});

renderIslandList();
render();
