import { createFileRoute, Link } from "@tanstack/react-router";
import { MyAssetWatchlists } from "@/components/my-asset-watchlists";
import { PageShell } from "@/components/page-shell";
import { august30, formatPrice } from "@/lib/assets";

export const Route = createFileRoute("/bearish")({ component: BearishPage });

function BearishPage() {
  const rows = august30.filter((a) => a.expectedMove === "Bearish");

  return (
    <PageShell>
      <header className="mb-6 border-b border-black pb-4">
        <h1 className="font-serif text-2xl font-semibold text-bear">Bearish calls</h1>
        <p className="mt-1 text-sm text-muted">Names currently marked bearish on today's desk list.</p>
      </header>

      <div className="overflow-x-auto border border-line">
        <table className="w-full min-w-[520px] border-collapse text-sm">
          <thead>
            <tr className="text-left text-[11px] uppercase tracking-wide">
              <th className="border-b-2 border-line-strong px-3 py-3 font-semibold">Asset</th>
              <th className="border-b-2 border-line-strong px-3 py-3 font-semibold">Price</th>
              <th className="border-b-2 border-line-strong px-3 py-3 font-semibold">Time Horizon</th>
              <th className="border-b-2 border-line-strong px-3 py-3 font-semibold">Rank</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((a) => (
              <tr key={a.ticker} className="hover:bg-neutral-50">
                <td className="border-b border-line px-3 py-3 font-semibold">
                  <Link to="/asset/$ticker" params={{ ticker: a.ticker }} className="hover:underline">
                    ${a.ticker}
                  </Link>
                </td>
                <td className="border-b border-line px-3 py-3 font-mono tabular-nums">
                  {formatPrice(a.price)}
                </td>
                <td className="border-b border-line px-3 py-3">{a.timeHorizon}</td>
                <td className="border-b border-line px-3 py-3 text-brand-blue">{a.rank}/100</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-10">
        <MyAssetWatchlists />
      </div>
    </PageShell>
  );
}
