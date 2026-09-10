import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import type { Asset } from "@/lib/assets";
import { formatPrice } from "@/lib/assets";

type Props = {
  title: string;
  assets: Asset[];
  showSearch?: boolean;
};

function rankNumberClass(rank: number): string {
  if (rank <= 44) return "text-bear";
  if (rank <= 69) return "text-amber-500";
  if (rank <= 89) return "text-bull";
  return "text-brand-blue";
}

export function StockTable({ title, assets, showSearch = true }: Props) {
  const [q, setQ] = useState("");

  const rows = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return assets;
    return assets.filter((a) =>
      `${a.ticker} ${a.name} ${a.expectedMove} ${a.timeHorizon}`.toLowerCase().includes(term),
    );
  }, [assets, q]);

  return (
    <div>
      {showSearch ? (
        <div className="mb-3 flex justify-start">
          <input
            id="list-search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search this list…"
            className="h-10 w-full max-w-xs border border-line bg-white px-3 text-sm outline-none placeholder:text-muted focus:border-ink"
          />
        </div>
      ) : null}

      <div className="overflow-x-auto bg-white">
        <table className="w-full min-w-[760px] border-collapse text-center text-sm">
          <thead>
            {/*
              Cell 1,1: no top, no left; thick bottom + right.
              Rest of outer frame: thick black.
            */}
            <tr>
              <th
                className="w-24 border-0 border-b-2 border-r-2 border-line-strong bg-white px-3 py-4"
                aria-hidden
              />
              <th
                colSpan={6}
                className="border-0 border-t-2 border-r-2 border-line-strong bg-white px-3 py-4 text-base font-semibold tracking-tight text-fg"
              >
                {title}
              </th>
            </tr>
            <tr className="text-[11px] uppercase tracking-wide">
              <th className="border-0 border-b-2 border-l-2 border-r-2 border-line-strong bg-white px-3 py-3 text-base font-semibold normal-case tracking-tight text-fg">
                Asset
              </th>
              <th className="border-0 border-b-2 border-r-2 border-t-2 border-line-strong bg-white px-3 py-3 font-semibold text-fg">
                Price
              </th>
              <th className="border-0 border-b-2 border-r-2 border-t-2 border-line-strong bg-white px-3 py-3 font-semibold text-fg">
                Expected Move
              </th>
              <th className="border-0 border-b-2 border-r-2 border-t-2 border-line-strong bg-white px-3 py-3 font-semibold text-fg">
                Time Horizon
              </th>
              <th className="border-0 border-b-2 border-r-2 border-t-2 border-line-strong bg-white px-3 py-3 font-semibold text-fg">
                52W Range
              </th>
              <th className="border-0 border-b-2 border-r-2 border-t-2 border-line-strong bg-white px-3 py-3 font-semibold text-fg">
                aw.com Estimate
              </th>
              <th className="border-0 border-b-2 border-r-2 border-t-2 border-line-strong bg-white px-3 py-3 font-semibold text-fg">
                aw.com Rank
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((a, i) => {
              const last = i === rows.length - 1;
              const bottom = last
                ? "border-b-2 border-line-strong"
                : "border-b border-line";
              // Rank column: no bottom borders, always white
              const rankBottom = last ? "border-b-2 border-line-strong" : "border-b-0";
              const moveClass = a.expectedMove === "Bullish" ? "text-bull" : "text-bear";
              const movePath = a.expectedMove === "Bullish" ? "/bullish" : "/bearish";
              return (
                <tr key={a.ticker} className="hover:bg-neutral-50">
                  <th
                    className={`${bottom} border-l-2 border-r-2 border-line-strong bg-white px-3 py-3 font-semibold text-fg`}
                  >
                    <Link
                      to="/asset/$ticker"
                      params={{ ticker: a.ticker }}
                      className="block text-fg hover:underline"
                    >
                      ${a.ticker}
                    </Link>
                  </th>
                  <td
                    className={`${bottom} border-r border-line px-3 py-3 font-mono tabular-nums text-fg`}
                  >
                    {formatPrice(a.price)}
                  </td>
                  <td className={`${bottom} border-r border-line px-3 py-3 font-medium`}>
                    <Link to={movePath} className={`hover:underline ${moveClass}`}>
                      {a.expectedMove}
                    </Link>
                  </td>
                  <td className={`${bottom} border-r border-line px-3 py-3 text-fg`}>{a.timeHorizon}</td>
                  <td
                    className={`${bottom} border-r border-line px-3 py-3 font-mono tabular-nums text-fg`}
                  >
                    {a.range52w}
                  </td>
                  <td className={`${bottom} border-r border-line px-3 py-3 text-fg`}>
                    {a.estimate}
                  </td>
                  <td
                    className={`${rankBottom} border-r-2 border-line-strong bg-white px-3 py-3`}
                  >
                    <Link
                      to="/asset/$ticker"
                      params={{ ticker: a.ticker }}
                      search={{ section: "rank" }}
                      className="block font-medium hover:underline"
                    >
                      <span className={rankNumberClass(a.rank)}>{a.rank}</span>
                      <span className="text-brand-blue">/100</span>
                    </Link>
                  </td>
                </tr>
              );
            })}
            {rows.length === 0 ? (
              <tr>
                <td
                  colSpan={7}
                  className="border-b-2 border-l-2 border-r-2 border-line-strong px-3 py-10 text-muted"
                >
                  No assets match that search.
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
    </div>
  );
}
