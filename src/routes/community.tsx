import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";

const lists = [
  { title: "Defensive retail desk", author: "desk-notes", names: "DG, COST, WMT" },
  { title: "AI infrastructure", author: "chip-watch", names: "NVDA, MSFT, GOOGL" },
  { title: "Consumer platforms", author: "flow", names: "META, AMZN, NFLX" },
];

export const Route = createFileRoute("/community")({ component: Community });

function Community() {
  return (
    <PageShell>
      <h1 className="mb-2 font-serif text-2xl font-semibold">Community Watchlists</h1>
      <p className="mb-6 text-sm text-muted">Public lists from other desks. Click a name to open the quote.</p>
      <div className="grid gap-4 md:grid-cols-3">
        {lists.map((l) => (
          <article key={l.title} className="rounded-lg border border-line bg-paper-2 p-5">
            <h2 className="font-semibold">{l.title}</h2>
            <p className="mt-1 text-xs text-muted">by {l.author}</p>
            <p className="mt-4 flex flex-wrap gap-2">
              {l.names.split(", ").map((t) => (
                <Link
                  key={t}
                  to="/asset/$ticker"
                  params={{ ticker: t }}
                  className="rounded-sm bg-paper px-2 py-1 text-sm hover:underline"
                >
                  ${t}
                </Link>
              ))}
            </p>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
