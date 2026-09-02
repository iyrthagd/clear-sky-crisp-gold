import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { PageShell } from "@/components/page-shell";
import { formatPrice, getAsset } from "@/lib/assets";
import { useWatchlist } from "@/hooks/use-watchlist";

type AssetSearch = { section?: string };

export const Route = createFileRoute("/asset/$ticker")({
  validateSearch: (s: Record<string, unknown>): AssetSearch => ({
    section: typeof s.section === "string" ? s.section : undefined,
  }),
  component: AssetPage,
});

function AssetPage() {
  const { ticker } = Route.useParams();
  const { section } = Route.useSearch();
  const asset = getAsset(ticker);
  const { add } = useWatchlist();

  if (!asset) {
    return (
      <PageShell>
        <p className="text-center text-muted">No page for ${ticker.toUpperCase()} yet.</p>
        <p className="mt-3 text-center">
          <Link to="/" className="text-link underline">
            Back to today's list
          </Link>
        </p>
      </PageShell>
    );
  }

  const chart = asset.sparkline.map((price, i) => ({ i, price }));
  const highlightEstimate = section === "estimate";
  const highlightRank = section === "rank";

  return (
    <PageShell>
      <p className="mb-4 text-sm text-muted">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <span className="px-2">/</span>
        <span>${asset.ticker}</span>
      </p>

      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-serif text-3xl font-semibold tracking-tight">
            ${asset.ticker}
            <span className="ml-3 text-lg font-normal text-muted">{asset.name}</span>
          </h1>
          <p className="mt-1 font-mono text-2xl tabular-nums">{formatPrice(asset.price)}</p>
        </div>
        <button
          type="button"
          onClick={() => add(asset.ticker, "From quote page")}
          className="h-10 rounded-md bg-ink px-4 text-sm font-medium text-white hover:bg-ink-2"
        >
          Add to my watchlist
        </button>
      </div>

      <div className="mb-6 h-64 rounded-lg border border-line bg-paper-2 p-3">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chart}>
            <CartesianGrid stroke="#eee" vertical={false} />
            <XAxis dataKey="i" hide />
            <YAxis domain={["auto", "auto"]} width={48} tick={{ fontSize: 11 }} />
            <Tooltip
              formatter={(v: number) => formatPrice(v)}
              labelFormatter={() => asset.ticker}
            />
            <Line type="monotone" dataKey="price" stroke="#0c0d10" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="mb-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {[
          ["Market cap", asset.marketCap],
          ["P/E", asset.pe],
          ["Volume", asset.volume],
          ["Avg volume", asset.avgVolume],
          ["EPS", asset.eps],
          ["Dividend", asset.dividend],
          ["Beta", asset.beta],
          ["Sector", asset.sector],
        ].map(([k, v]) => (
          <div key={k} className="rounded-md border border-line bg-paper-2 px-4 py-3">
            <p className="text-[11px] uppercase tracking-wide text-muted">{k}</p>
            <p className="mt-1 font-medium tabular-nums">{v}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <section
          id="estimate"
          className={`rounded-lg border bg-paper-2 p-5 ${highlightEstimate ? "border-ink" : "border-line"}`}
        >
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
            aw.com 52W price estimate
          </h2>
          <p className="mt-2 font-serif text-3xl">{asset.estimate}</p>
          <p className={`mt-2 text-sm ${asset.expectedMove === "Bullish" ? "text-bull" : "text-bear"}`}>
            {asset.expectedMove} · {asset.timeHorizon}
          </p>
        </section>
        <section
          id="rank"
          className={`rounded-lg border bg-paper-2 p-5 ${highlightRank ? "border-ink" : "border-line"}`}
        >
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">aw.com Rank</h2>
          <p className="mt-2 font-serif text-3xl">{asset.rank}/100</p>
          <p className="mt-2 text-sm text-muted">Relative setup quality versus the rest of the desk.</p>
        </section>
      </div>

      <p className="mt-8 max-w-3xl text-sm leading-relaxed text-muted">{asset.about}</p>
    </PageShell>
  );
}
