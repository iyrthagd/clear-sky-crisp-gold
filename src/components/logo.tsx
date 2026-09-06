import { Link } from "@tanstack/react-router";

/** Capital A with red outline/body and a bright blue horizontal crossbar. */
function BrandA({ className = "" }: { className?: string }) {
  return (
    <span
      className={`relative inline-block font-semibold leading-none text-brand-red ${className}`}
      aria-hidden="true"
    >
      A
      <span
        className="pointer-events-none absolute left-[16%] right-[16%] top-[54%] h-[2.5px] -translate-y-1/2 rounded-[1px] bg-brand-blue-bright shadow-[0_0_0_0.5px_rgba(37,99,235,0.35)]"
        style={{ minHeight: "2.5px" }}
      />
    </span>
  );
}

export function Logo({
  compact = false,
  centered = false,
}: {
  compact?: boolean;
  /** Larger, centered lockup for page titles */
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
      <BrandA className={centered ? "text-[1.15em]" : ""} />
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
      className={`inline-flex items-baseline font-semibold tracking-tight no-underline ${size} ${
        centered ? "justify-center" : ""
      }`}
      aria-label="AssetWatchlist.com home"
    >
      <BrandA className={centered ? "text-[1.15em]" : ""} />
      <span className="text-fg">sset</span>
      <span className="text-brand-green">W</span>
      <span className="text-fg">{compact ? ".com" : "atchlist.com"}</span>
    </Link>
  );
}
