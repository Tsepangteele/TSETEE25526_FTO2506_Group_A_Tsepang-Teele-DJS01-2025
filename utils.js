
import { genres } from "./data.js";

export function timeAgo(iso) {
  const d = new Date(iso), now = new Date();
  const days = Math.floor((now - d) / (1000 * 60 * 60 * 24));
  if (days <= 0) return "Last updated: today";
  if (days === 1) return "Last updated: 1 day ago";
  if (days < 7)  return `Last updated: ${days} days ago`;
  const w = Math.floor(days / 7);
  return `Last updated: ${w} week${w > 1 ? "s" : ""} ago`;
}

export function genreNames(ids = []) {
  return ids.map(id => genres.find(g => g.id === id)?.title).filter(Boolean);
}
