// main.js
import { podcasts, genres } from "./data.js";
import { openModal } from "./modal.js";

const $list = document.querySelector("#podcast-list");

// helper: id -> genre titles
const genreName = (id) => genres.find((g) => g.id === id)?.title;
const genreNames = (ids = []) => ids.map(genreName).filter(Boolean);

// helper: friendly time (cap long-ago values)
function timeAgo(iso) {
  const d = new Date(iso), now = new Date();
  const days = Math.floor((now - d) / (1000 * 60 * 60 * 24));
  if (days <= 0) return "Updated today";
  if (days === 1) return "Updated 1 day ago";
  if (days < 7) return `Updated ${days} days ago`;
  const weeks = Math.floor(days / 7);
  if (weeks <= 8) return `Updated ${weeks} week${weeks > 1 ? "s" : ""} ago`;
  return "Updated a while ago"; // prevents “53 / 155 weeks ago”
}

// render a small, clean set of cards (no heavy images)
$list.innerHTML = "";
podcasts.slice(0, 8).forEach((p) => {
  const tags = genreNames(p.genres)
    .map(
      (name) =>
        `<span class="rounded-md border border-neutral-200 bg-neutral-100 px-2 py-1 text-xs font-medium text-neutral-700">${name}</span>`
    )
    .join("");

  const card = document.createElement("article");
  card.className =
    "cursor-pointer rounded-xl border border-neutral-200 bg-white shadow-sm transition hover:shadow-md";
  card.dataset.id = p.id;

 card.innerHTML = `
  <div class="aspect-[16/12] w-full overflow-hidden rounded-t-xl bg-neutral-200">
    <img
      class="h-full w-full object-cover"
      src="${p.image}"
      alt="${p.title}"
      loading="lazy"
      referrerpolicy="no-referrer"
    />
  </div>
  <div class="space-y-3 p-4">
      <h3 class="text-base font-semibold tracking-tight sm:text-lg">${p.title}</h3>
      <div class="flex items-center gap-2 text-sm text-neutral-600">
        <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M8 2v4"/><path d="M16 2v4"/><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M3 10h18"/>
        </svg>
        <span>${p.seasons} season${p.seasons > 1 ? "s" : ""}</span>
      </div>
      <div class="flex flex-wrap gap-2">${tags}</div>
      <p class="pt-1 text-xs text-neutral-500">${timeAgo(p.updated)}</p>
    </div>
  `;
  $list.appendChild(card);
});

// open modal on any card
$list.addEventListener("click", (e) => {
  const card = e.target.closest("article[data-id]");
  if (card) openModal(card.dataset.id);
});
