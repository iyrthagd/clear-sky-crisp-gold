import { createFileRoute, Link } from "@tanstack/react-router";
import { MyAssetWatchlists } from "@/components/my-asset-watchlists";
import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/create-watchlist")({ component: CreateWatchlist });

function CreateWatchlist() {
  return (
    <PageShell>
      <h1 className="mb-2 text-center font-serif text-2xl font-semibold">My AssetWatchlists</h1>
      <p className="mx-auto mb-8 max-w-lg text-center text-sm text-muted">
        Create a list (name + public/private), then add assets.{" "}
        <Link to="/register" className="underline hover:text-fg">
          Create an account
        </Link>{" "}
        to keep them across devices later.
      </p>
      <MyAssetWatchlists />
    </PageShell>
  );
}
