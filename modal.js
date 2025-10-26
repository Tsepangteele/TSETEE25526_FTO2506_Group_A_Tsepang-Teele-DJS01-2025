import { podcasts, seasons } from "./data.js";
import { timeAgo, genreNames } from "./utils.js";

const $modal = document.querySelector("#modal-root");
const $close = document.querySelector("#modal-close");
const $backdrop = document.querySelector("#modal-backdrop");

export function openModal(podcastId) {
  const p = podcasts.find(x => x.id === podcastId);
  if (!p) return;

  document.querySelector("#modal-title").textContent = p.title;
  document.querySelector("#modal-image").src = p.image;
  document.querySelector("#modal-description").textContent = p.description;
  document.querySelector("#modal-updated").textContent = timeAgo(p.updated);

  const chips = genreNames(p.genres)
    .map(name => `<span class="rounded-full border border-neutral-200 bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700">${name}</span>`)
    .join("");
  document.querySelector("#modal-genres").innerHTML = chips;

  const seasonBlock = seasons.find(s => s.id === p.id);
  document.querySelector("#modal-seasons").innerHTML = (seasonBlock?.seasonDetails ?? [])
    .map(s => `
      <div class="flex items-center justify-between rounded-xl border border-neutral-200 bg-white px-4 py-3">
        <div class="font-medium">${s.title}</div>
        <div class="text-sm text-neutral-600">${s.episodes} episodes</div>
      </div>`).join("");

  $modal.classList.remove("hidden");
}

export function closeModal() {
  $modal.classList.add("hidden");
}

$close.addEventListener("click", closeModal);
$backdrop.addEventListener("click", closeModal);
document.addEventListener("keydown", e => e.key === "Escape" && closeModal());
