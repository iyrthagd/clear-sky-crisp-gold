import { useCallback, useEffect, useState } from "react";
import type { WatchItem } from "@/hooks/use-watchlist";

export type NamedWatchlist = {
  id: string;
  name: string;
  items: WatchItem[];
};

const KEY = "aw.named-watchlists";

function uid() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
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
        const items = Array.isArray(r.items) ? (r.items as WatchItem[]) : [];
        return { id, name, items } satisfies NamedWatchlist;
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
    (name = "My Watchlist") => {
      const list: NamedWatchlist = { id: uid(), name: name.trim() || "My Watchlist", items: [] };
      persist([...read(), list]);
      return list.id;
    },
    [persist],
  );

  const renameList = useCallback(
    (id: string, name: string) => {
      const next = read().map((l) =>
        l.id === id ? { ...l, name: name.trim() || l.name } : l,
      );
      persist(next);
    },
    [persist],
  );

  const removeList = useCallback(
    (id: string) => {
      persist(read().filter((l) => l.id !== id));
    },
    [persist],
  );

  return { lists, createList, renameList, removeList };
}
