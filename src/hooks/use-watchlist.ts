import { useCallback, useEffect, useState } from "react";

export type WatchItem = { asset: string; notes: string };

const KEY = "aw.personal-watchlist";

function read(): WatchItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as WatchItem[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function useWatchlist() {
  const [items, setItems] = useState<WatchItem[]>([]);

  useEffect(() => {
    setItems(read());
  }, []);

  const persist = useCallback((next: WatchItem[]) => {
    setItems(next);
    localStorage.setItem(KEY, JSON.stringify(next));
  }, []);

  const add = useCallback(
    (asset: string, notes: string) => {
      const ticker = asset.trim().replace(/^\$/, "").toUpperCase();
      if (!ticker) return;
      persist([...read().filter((i) => i.asset !== ticker), { asset: ticker, notes }]);
    },
    [persist],
  );

  const remove = useCallback(
    (asset: string) => {
      persist(read().filter((i) => i.asset !== asset));
    },
    [persist],
  );

  return { items, add, remove };
}
