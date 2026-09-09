import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { StockTable } from "@/components/stock-table";
import { YourWatchlists } from "@/components/your-watchlists";
import { august30 } from "@/lib/assets";

export const Route = createFileRoute("/today")({ component: TodayList });

function TodayList() {
  return (
    <PageShell>
      <div className="space-y-10">
        <StockTable title="Today's List" assets={august30} />
        <YourWatchlists />
      </div>
    </PageShell>
  );
}
