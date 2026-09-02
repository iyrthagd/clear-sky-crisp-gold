import { FormEvent, useState } from "react";
import { Link } from "@tanstack/react-router";
import { useWatchlist } from "@/hooks/use-watchlist";

export function PersonalWatchlist() {
  const { items, add, remove } = useWatchlist();
  const [asset, setAsset] = useState("");
  const [notes, setNotes] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    add(asset, notes);
    setAsset("");
    setNotes("");
  }

  return (
    <section className="mx-auto w-full max-w-xl rounded-lg border border-line bg-paper-2 p-5">
      <h2 className="mb-4 text-center text-base font-semibold">My Watchlist</h2>
      <div className="overflow-x-auto">
        <table className="mb-4 w-full border-collapse text-sm">
          <thead>
            <tr className="bg-paper">
              <th className="border border-line px-3 py-2 text-left font-semibold">Asset</th>
              <th className="border border-line px-3 py-2 text-left font-semibold">Notes</th>
              <th className="border border-line px-3 py-2 font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {items.length === 0 ? (
              <tr>
                <td colSpan={3} className="border border-line px-3 py-6 text-center text-muted">
                  Nothing saved yet. Add a ticker below.
                </td>
              </tr>
            ) : (
              items.map((item) => (
                <tr key={item.asset}>
                  <td className="border border-line px-3 py-2 font-semibold">
                    <Link
                      to="/asset/$ticker"
                      params={{ ticker: item.asset }}
                      className="hover:underline"
                    >
                      ${item.asset}
                    </Link>
                  </td>
                  <td className="border border-line px-3 py-2 text-muted">{item.notes || "—"}</td>
                  <td className="border border-line px-3 py-2 text-center">
                    <button
                      type="button"
                      onClick={() => remove(item.asset)}
                      className="rounded-sm bg-red-50 px-2 py-1 text-xs font-medium text-bear hover:bg-red-100"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <form onSubmit={onSubmit} className="flex flex-col gap-2">
        <input
          value={asset}
          onChange={(e) => setAsset(e.target.value)}
          placeholder="Asset (e.g. AAPL)"
          className="h-10 rounded-md border border-line px-3 text-sm outline-none focus:ring-2 focus:ring-ink/20"
        />
        <input
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Notes"
          className="h-10 rounded-md border border-line px-3 text-sm outline-none focus:ring-2 focus:ring-ink/20"
        />
        <button
          type="submit"
          className="h-10 rounded-md bg-ink text-sm font-medium text-white hover:bg-ink-2"
        >
          Add to Watchlist
        </button>
      </form>
    </section>
  );
}
