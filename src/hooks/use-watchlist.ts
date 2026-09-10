import { useCallback, useEffect, useState } from "react";

export type WatchItem = {
  asset: string;
  price: string;
  range52w: string;
  expectedMove: string;
  timeHorizon: string;
  notes: string;
};

const KEY = "aw.personal-watchlist";

function normalize(raw: unknown): WatchItem[] {
  if (!Array.isArray(raw)) return [];
  return raw
    .map((row) => {
      if (!row || typeof row !== "object") return null;
      const r = row as Record<string, unknown>;
      const asset = String(r.asset ?? "")
        .trim()
        .replace(/^\$/, "")
        .toUpperCase();
      if (!asset) return null;
      return {
        asset,
        price: String(r.price ?? ""),
        range52w: String(r.range52w ?? ""),
        expectedMove: String(r.expectedMove ?? ""),
        timeHorizon: String(r.timeHorizon ?? ""),
        notes: String(r.notes ?? ""),
      } satisfies WatchItem;
    })
    .filter((x): x is WatchItem => x != null);
}

function read(): WatchItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    return normalize(JSON.parse(raw));
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
    (item: Omit<WatchItem, "asset"> & { asset: string }) => {
      const ticker = item.asset.trim().replace(/^\$/, "").toUpperCase();
      if (!ticker) return;
      const next: WatchItem = {
        asset: ticker,
        price: item.price.trim(),
        range52w: item.range52w.trim(),
        expectedMove: item.expectedMove.trim(),
        timeHorizon: item.timeHorizon.trim(),
        notes: item.notes.trim(),
      };
      persist([...read().filter((i) => i.asset !== ticker), next]);
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
