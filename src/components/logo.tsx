import { Link } from "@tanstack/react-router";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      to="/"
      className="inline-flex items-baseline font-semibold tracking-tight no-underline"
      aria-label="AssetWatchlist.com home"
    >
      <span className="text-brand-red">A</span>
      <span className="text-white">sset</span>
      <span className="text-brand-green">W</span>
      <span className="text-white">{compact ? ".com" : "atchlist.com"}</span>
    </Link>
  );
}
