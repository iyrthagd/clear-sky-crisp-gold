import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { PersonalWatchlist } from "@/components/personal-watchlist";
import { StockTable } from "@/components/stock-table";
import { august30 } from "@/lib/assets";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <PageShell>
      <header className="mb-8 text-center">
        <h1 className="font-serif text-2xl font-semibold tracking-tight">August 30 List</h1>
        <p className="mt-1 text-sm text-muted">08/31/26 · 10 names on the desk today</p>
      </header>
      <StockTable title="August 30 List" assets={august30} />
      <div className="my-10 rounded-md border border-dashed border-line bg-ad px-4 py-6 text-center text-sm text-muted">
        Advertisement — a second placement under the list
      </div>
      <PersonalWatchlist />
    </PageShell>
  );
}
