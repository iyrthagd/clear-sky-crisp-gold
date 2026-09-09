import { Link } from "@tanstack/react-router";

/**
 * Wordmark: red A, green W, rest inherits (white on dark nav / black on light).
 * Ready later to swap in an image logo via <img> if needed.
 */
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
      className={`inline-flex items-baseline font-semibold tracking-tight no-underline ${size} ${
        centered ? "justify-center" : ""
      }`}
      aria-label="AssetWatchlist.com home"
    >
      <span className="text-brand-red">A</span>
      <span className="text-white">sset</span>
      <span className="text-brand-green">W</span>
      <span className="text-white">{compact ? ".com" : "atchlist.com"}</span>
    </Link>
  );
}

/** Light-background wordmark (black body text). */
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
      className={`inline-flex items-baseline font-semibold tracking-tight no-underline ${size} ${
        centered ? "justify-center" : ""
      }`}
      aria-label="AssetWatchlist.com home"
    >
      <span className="text-brand-red">A</span>
      <span className="text-fg">sset</span>
      <span className="text-brand-green">W</span>
      <span className="text-fg">{compact ? ".com" : "atchlist.com"}</span>
    </Link>
  );
}

/**
 * Compact AW mark (browser tab / favicon style later).
 * A + W overlap like a mini chart; center blend leans blue-green.
 */
export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      width="32"
      height="32"
      aria-hidden="true"
      focusable="false"
    >
      <rect width="32" height="32" rx="6" fill="#000" />
      {/* Chart-like bars */}
      <path d="M6 22 L11 14 L16 18 L22 8 L26 12" fill="none" stroke="#fff" strokeWidth="1.5" />
      <text x="7" y="24" fontSize="11" fontWeight="700" fill="#dc2626" fontFamily="system-ui,sans-serif">
        A
      </text>
      <text x="16" y="24" fontSize="11" fontWeight="700" fill="#16a34a" fontFamily="system-ui,sans-serif">
        W
      </text>
      <circle cx="16" cy="16" r="2.2" fill="#2563eb" opacity="0.9" />
    </svg>
  );
}
