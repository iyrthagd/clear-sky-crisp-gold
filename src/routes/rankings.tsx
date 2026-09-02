import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { allAssets } from "@/lib/assets";

export const Route = createFileRoute("/rankings")({ component: Rankings });

function Rankings() {
  const ranked = [...allAssets].sort((a, b) => b.rank - a.rank);
  return (
    <PageShell>
      <h1 className="mb-6 font-serif text-2xl font-semibold">aw.com Rankings</h1>
      <ol className="overflow-hidden rounded-lg border border-line bg-paper-2">
        {ranked.map((a, i) => (
          <li key={a.ticker} className="flex items-center justify-between border-b border-line px-4 py-3 last:border-b-0">
            <span className="flex items-center gap-3">
              <span className="w-6 text-sm text-muted">{i + 1}</span>
              <Link to="/asset/$ticker" params={{ ticker: a.ticker }} className="font-semibold hover:underline">
                ${a.ticker}
              </Link>
              <span className="text-sm text-muted">{a.name}</span>
            </span>
            <span className="font-mono text-sm">{a.rank}/100</span>
          </li>
        ))}
      </ol>
    </PageShell>
  );
}
