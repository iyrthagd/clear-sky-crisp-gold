import type { ReactNode } from "react";
import { AdBanner } from "@/components/ad-banner";
import { SiteHeader } from "@/components/site-header";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-paper text-fg">
      <SiteHeader />
      <AdBanner />
      <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
      <footer className="border-t border-line py-8 text-center text-xs text-muted">
        AssetWatchlist.com — independent research notes. Not investment advice.
      </footer>
    </div>
  );
}
