import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { PersonalWatchlist } from "@/components/personal-watchlist";

export const Route = createFileRoute("/create-watchlist")({ component: CreateWatchlist });

function CreateWatchlist() {
  return (
    <PageShell>
      <h1 className="mb-2 text-center font-serif text-2xl font-semibold">Create a Watchlist</h1>
      <p className="mx-auto mb-8 max-w-lg text-center text-sm text-muted">
        Names you add stay in this browser.{" "}
        <Link to="/register" className="text-link hover:underline">
          Create an account
        </Link>{" "}
        to keep them across devices later.
      </p>
      <PersonalWatchlist />
    </PageShell>
  );
}
