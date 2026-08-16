/* =========================================================
   INTERACTIONS.JS
   Skill and technology click-to-zoom interaction
   ========================================================= */

const clickableTags = document.querySelectorAll(".skill-tag, .stack-tag");

const overlay = document.getElementById("zoomOverlay");
const zoomTitle = document.getElementById("zoomTitle");
const zoomInfo = document.getElementById("zoomInfo");
const zoomClose = document.getElementById("zoomClose");

function openZoom(tag) {
  clickableTags.forEach((item) => {
    item.classList.remove("active");
  });

  tag.classList.add("active");

  zoomTitle.textContent = tag.dataset.title || tag.textContent;
  zoomInfo.textContent =
    tag.dataset.info ||
    "Click a technology or skill to view more information.";

  overlay.classList.add("show");
}

function closeZoom() {
  overlay.classList.remove("show");

  clickableTags.forEach((item) => {
    item.classList.remove("active");
  });
}

clickableTags.forEach((tag) => {
  tag.addEventListener("click", () => {
    openZoom(tag);
  });
});

zoomClose.addEventListener("click", closeZoom);

overlay.addEventListener("click", (event) => {
  if (event.target === overlay) {
    closeZoom();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeZoom();
  }
});
