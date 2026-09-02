import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { PersonalWatchlist } from "@/components/personal-watchlist";
import { StockTable } from "@/components/stock-table";
import { august29 } from "@/lib/assets";

export const Route = createFileRoute("/lists")({ component: Lists });

function Lists() {
  return (
    <PageShell>
      <header className="mb-8 text-center">
        <h1 className="font-serif text-2xl font-semibold tracking-tight">Previous Lists</h1>
        <p className="mt-1 text-sm text-muted">August 29 archive</p>
      </header>
      <StockTable title="August 29 List" assets={august29} />
      <div className="my-10 rounded-md border border-dashed border-line bg-ad px-4 py-6 text-center text-sm text-muted">
        Advertisement
      </div>
      <PersonalWatchlist />
    </PageShell>
  );
}
