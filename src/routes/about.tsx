import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/about")({ component: About });

function About() {
  return (
    <PageShell>
      <article className="mx-auto max-w-2xl">
        <h1 className="mb-4 font-serif text-2xl font-semibold">About</h1>
        <p className="leading-relaxed text-muted">
          AssetWatchlist.com publishes a short daily list of names, a directional view, a time
          horizon, and an internal rank. Click any ticker for a quote-style page with a price
          path and a handful of metrics.
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          Nothing here is a recommendation to buy or sell. It is a desk notebook, published.
        </p>
      </article>
    </PageShell>
  );
}
