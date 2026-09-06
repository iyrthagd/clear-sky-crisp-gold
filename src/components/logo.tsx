import { Link } from "@tanstack/react-router";

/**
 * Capital A drawn as two red outer strokes + a blue crossbar
 * (the blue bar replaces the usual red middle bar of the letter).
 */
function BrandA({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`inline-block h-[1.05em] w-[0.78em] shrink-0 align-[-0.12em] ${className}`}
      viewBox="0 0 24 28"
      aria-hidden="true"
      focusable="false"
    >
      {/* Left leg */}
      <path
        d="M12 3.2 L4.2 25.5"
        fill="none"
        stroke="currentColor"
        className="text-brand-red"
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Right leg */}
      <path
        d="M12 3.2 L19.8 25.5"
        fill="none"
        stroke="currentColor"
        className="text-brand-red"
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Blue crossbar — sits between the outer legs, not past them */}
      <line
        x1="7.2"
        y1="16.2"
        x2="16.8"
        y2="16.2"
        stroke="currentColor"
        className="text-brand-blue-bright"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Logo({
  compact = false,
  centered = false,
}: {
  compact?: boolean;
  centered?: boolean;
}) {
  const size = centered ? "text-2xl md:text-3xl" : "text-base";
  return (
    <Link
      to="/"
      className={`inline-flex items-baseline gap-0 font-semibold tracking-tight no-underline ${size} ${
        centered ? "justify-center" : ""
      }`}
      aria-label="AssetWatchlist.com home"
    >
      <BrandA />
      <span className="text-white">sset</span>
      <span className="text-brand-green">W</span>
      <span className="text-white">{compact ? ".com" : "atchlist.com"}</span>
    </Link>
  );
}

/** Light-background version (dark text on paper). */
export function LogoOnLight({
  compact = false,
  centered = false,
}: {
  compact?: boolean;
  centered?: boolean;
}) {
  const size = centered ? "text-2xl md:text-3xl" : "text-base";
  return (
    <Link
      to="/"
      className={`inline-flex items-baseline gap-0 font-semibold tracking-tight no-underline ${size} ${
        centered ? "justify-center" : ""
      }`}
      aria-label="AssetWatchlist.com home"
    >
      <BrandA />
      <span className="text-fg">sset</span>
      <span className="text-brand-green">W</span>
      <span className="text-fg">{compact ? ".com" : "atchlist.com"}</span>
    </Link>
  );
}
