import { site } from "../data/site.js";

export default function Logo() {
  return (
    <a href="#home" className="brand" aria-label={`${site.name} — Ballina`}>
      <img
        src={site.logo}
        alt={site.name}
        width="648"
        height="124"
        fetchPriority="high"
      />
    </a>
  );
}
