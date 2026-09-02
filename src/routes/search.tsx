import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { allAssets, formatPrice } from "@/lib/assets";

export const Route = createFileRoute("/search")({ component: SearchPage });

function SearchPage() {
  const [q, setQ] = useState("");
  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return allAssets;
    return allAssets.filter((a) =>
      `${a.ticker} ${a.name} ${a.sector}`.toLowerCase().includes(term),
    );
  }, [q]);

  return (
    <PageShell>
      <h1 className="mb-4 font-serif text-2xl font-semibold">Asset Search</h1>
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Ticker, name, or sector"
        className="mb-6 h-11 w-full max-w-lg rounded-md border border-line bg-paper-2 px-3 outline-none focus:ring-2 focus:ring-ink/20"
        autoFocus
      />
      <ul className="divide-y divide-line overflow-hidden rounded-lg border border-line bg-paper-2">
        {results.map((a) => (
          <li key={a.ticker}>
            <Link
              to="/asset/$ticker"
              params={{ ticker: a.ticker }}
              className="flex items-center justify-between px-4 py-3 hover:bg-paper"
            >
              <span>
                <span className="font-semibold">${a.ticker}</span>
                <span className="ml-2 text-sm text-muted">{a.name}</span>
              </span>
              <span className="font-mono text-sm tabular-nums">{formatPrice(a.price)}</span>
            </Link>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
