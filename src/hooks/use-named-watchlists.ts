import { useCallback, useEffect, useState } from "react";
import type { WatchItem } from "@/hooks/use-watchlist";

export type ListVisibility = "public" | "private";

export type NamedWatchlist = {
  id: string;
  name: string;
  visibility: ListVisibility;
  items: WatchItem[];
};

const KEY = "aw.named-watchlists";

function uid() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

function normalizeItem(row: unknown): WatchItem | null {
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
  };
}

function read(): NamedWatchlist[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed
      .map((row) => {
        if (!row || typeof row !== "object") return null;
        const r = row as Record<string, unknown>;
        const id = String(r.id ?? uid());
        const name = String(r.name ?? "Untitled list").trim() || "Untitled list";
        const visibility: ListVisibility =
          r.visibility === "public" ? "public" : "private";
        const items = Array.isArray(r.items)
          ? r.items.map(normalizeItem).filter((x): x is WatchItem => x != null)
          : [];
        return { id, name, visibility, items } satisfies NamedWatchlist;
      })
      .filter((x): x is NamedWatchlist => x != null);
  } catch {
    return [];
  }
}

export function useNamedWatchlists() {
  const [lists, setLists] = useState<NamedWatchlist[]>([]);

  useEffect(() => {
    setLists(read());
  }, []);

  const persist = useCallback((next: NamedWatchlist[]) => {
    setLists(next);
    localStorage.setItem(KEY, JSON.stringify(next));
  }, []);

  const createList = useCallback(
    (name: string, visibility: ListVisibility = "private") => {
      const list: NamedWatchlist = {
        id: uid(),
        name: name.trim() || "My AssetWatchlist",
        visibility,
        items: [],
      };
      persist([...read(), list]);
      return list.id;
    },
    [persist],
  );

  const renameList = useCallback(
    (id: string, name: string) => {
      persist(
        read().map((l) => (l.id === id ? { ...l, name: name.trim() || l.name } : l)),
      );
    },
    [persist],
  );

  const setVisibility = useCallback(
    (id: string, visibility: ListVisibility) => {
      persist(read().map((l) => (l.id === id ? { ...l, visibility } : l)));
    },
    [persist],
  );

  const removeList = useCallback(
    (id: string) => {
      persist(read().filter((l) => l.id !== id));
    },
    [persist],
  );

  const addItem = useCallback(
    (listId: string, item: Omit<WatchItem, "asset"> & { asset: string }) => {
      const ticker = item.asset.trim().replace(/^\$/, "").toUpperCase();
      if (!ticker) return;
      const nextItem: WatchItem = {
        asset: ticker,
        price: item.price.trim(),
        range52w: item.range52w.trim(),
        expectedMove: item.expectedMove.trim(),
        timeHorizon: item.timeHorizon.trim(),
        notes: item.notes.trim(),
      };
      persist(
        read().map((l) => {
          if (l.id !== listId) return l;
          return {
            ...l,
            items: [...l.items.filter((i) => i.asset !== ticker), nextItem],
          };
        }),
      );
    },
    [persist],
  );

  const removeItem = useCallback(
    (listId: string, asset: string) => {
      persist(
        read().map((l) =>
          l.id === listId ? { ...l, items: l.items.filter((i) => i.asset !== asset) } : l,
        ),
      );
    },
    [persist],
  );

  return {
    lists,
    createList,
    renameList,
    setVisibility,
    removeList,
    addItem,
    removeItem,
  };
}
