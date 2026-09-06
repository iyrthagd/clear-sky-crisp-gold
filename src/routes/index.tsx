import { createFileRoute, Link } from "@tanstack/react-router";
import {
  MessageSquare,
  Newspaper,
  LayoutGrid,
  LogIn,
  UserPlus,
  Search,
  ListOrdered,
  Users,
} from "lucide-react";
import { LiveEstDate } from "@/components/live-est-date";
import { LogoOnLight } from "@/components/logo";
import { PageShell } from "@/components/page-shell";
import { PersonalWatchlist } from "@/components/personal-watchlist";
import { StockTable } from "@/components/stock-table";
import { august30 } from "@/lib/assets";

export const Route = createFileRoute("/")({ component: Home });

const newsItems = [
  {
    title: "Desk notes: defensive names lead the open",
    blurb: "Discount retail and staples held up while high-beta tech cooled off midday.",
  },
  {
    title: "What we’re watching into the close",
    blurb: "Volume spikes in a handful of rank movers — full notes inside today’s table.",
  },
  {
    title: "Community lists picking up steam",
    blurb: "Shared watchlists are the fastest way to compare notes with other readers.",
  },
];

const quickLinks = [
  { to: "/lists" as const, label: "Previous Lists", icon: ListOrdered },
  { to: "/search" as const, label: "Asset Search", icon: Search },
  { to: "/rankings" as const, label: "Rankings", icon: LayoutGrid },
  { to: "/community" as const, label: "Community", icon: Users },
  { to: "/create-watchlist" as const, label: "Create Watchlist", icon: LayoutGrid },
  { to: "/about" as const, label: "About", icon: Newspaper },
];

function Home() {
  return (
    <PageShell>
      {/* Centered logo + live EST date (no "Today's List" label) */}
      <header className="mb-8 border-b border-line pb-6 text-center">
        <div className="flex justify-center">
          <LogoOnLight centered />
        </div>
        <LiveEstDate className="mt-2 block text-sm font-medium tabular-nums text-muted" />
      </header>

      <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
        <div className="min-w-0 space-y-8">
          <StockTable title="Today's List" assets={august30} />

          <div className="rounded-md border border-dashed border-line bg-ad px-4 py-6 text-center text-sm text-muted">
            Advertisement
          </div>

          <PersonalWatchlist />
        </div>

        <aside className="space-y-5">
          <section className="rounded-lg border border-line bg-paper-2 p-4">
            <h2 className="mb-3 flex items-center gap-2 text-sm font-semibold">
              <LogIn className="size-4 text-brand-blue" strokeWidth={1.75} />
              Account
            </h2>
            <p className="mb-3 text-xs leading-relaxed text-muted">
              Sign in to save lists across devices and join community watchlists.
            </p>
            <div className="flex flex-col gap-2">
              <Link
                to="/login"
                className="inline-flex h-9 items-center justify-center gap-2 rounded-md bg-ink text-sm font-medium text-white hover:bg-ink-2"
              >
                <LogIn className="size-3.5" />
                Login
              </Link>
              <Link
                to="/register"
                className="inline-flex h-9 items-center justify-center gap-2 rounded-md border border-line bg-paper text-sm font-medium hover:bg-white"
              >
                <UserPlus className="size-3.5" />
                Create an account
              </Link>
            </div>
          </section>

          <section className="rounded-lg border border-line bg-paper-2 p-4">
            <h2 className="mb-3 flex items-center gap-2 text-sm font-semibold">
              <Newspaper className="size-4 text-brand-blue" strokeWidth={1.75} />
              Desk news
            </h2>
            <ul className="space-y-3">
              {newsItems.map((n) => (
                <li key={n.title} className="border-b border-line pb-3 last:border-0 last:pb-0">
                  <p className="text-sm font-medium leading-snug">{n.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted">{n.blurb}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-lg border border-line bg-paper-2 p-4">
            <h2 className="mb-3 text-sm font-semibold">Explore</h2>
            <div className="grid grid-cols-1 gap-1.5">
              {quickLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="flex items-center gap-2 rounded-md px-2 py-2 text-sm hover:bg-paper"
                >
                  <l.icon className="size-3.5 text-muted" strokeWidth={1.75} />
                  {l.label}
                </Link>
              ))}
            </div>
          </section>

          <section className="rounded-lg border border-line bg-paper-2 p-4">
            <h2 className="mb-2 flex items-center gap-2 text-sm font-semibold">
              <MessageSquare className="size-4 text-brand-blue" strokeWidth={1.75} />
              Community chat
            </h2>
            <p className="mb-3 text-xs leading-relaxed text-muted">
              Talk setups, share ranks, and follow other desks in real time.
            </p>
            <Link
              to="/community"
              className="inline-flex h-9 w-full items-center justify-center rounded-md bg-brand-blue text-sm font-medium text-white hover:bg-brand-blue-bright"
            >
              Join the community
            </Link>
          </section>
        </aside>
      </div>
    </PageShell>
  );
}
