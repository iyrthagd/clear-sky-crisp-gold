import { FormEvent, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Globe2 } from "lucide-react";
import { useWatchlist } from "@/hooks/use-watchlist";

export function PersonalWatchlist() {
  const { items, add, remove } = useWatchlist();
  const [asset, setAsset] = useState("");
  const [range52w, setRange52w] = useState("");
  const [expectedMove, setExpectedMove] = useState("");
  const [timeHorizon, setTimeHorizon] = useState("");
  const [notes, setNotes] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    add({ asset, range52w, expectedMove, timeHorizon, notes });
    setAsset("");
    setRange52w("");
    setExpectedMove("");
    setTimeHorizon("");
    setNotes("");
  }

  return (
    <section className="mx-auto w-full max-w-4xl border border-line bg-white p-5">
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-center text-base font-semibold sm:text-left">My Watchlist</h2>
        <Link
          to="/community"
          className="inline-flex items-center justify-center gap-2 self-end border border-black bg-black px-3.5 py-2 text-sm font-medium text-white hover:bg-ink-2"
        >
          <Globe2 className="size-4" strokeWidth={1.75} aria-hidden />
          Make a Community Watchlist
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="mb-4 w-full border-collapse text-sm">
          <thead>
            <tr>
              <th className="border border-line border-b-[3px] border-b-line-strong border-r-[3px] border-r-line-strong bg-white px-3 py-2.5 text-left font-semibold">
                Asset
              </th>
              <th className="border border-line border-b-[3px] border-b-line-strong bg-white px-3 py-2.5 text-left font-semibold">
                52W Range
              </th>
              <th className="border border-line border-b-[3px] border-b-line-strong bg-white px-3 py-2.5 text-left font-semibold">
                Expected Move
              </th>
              <th className="border border-line border-b-[3px] border-b-line-strong bg-white px-3 py-2.5 text-left font-semibold">
                Time Horizon
              </th>
              <th className="border border-line border-b-[3px] border-b-line-strong bg-white px-3 py-2.5 text-left font-semibold">
                Notes
              </th>
              <th className="border border-line border-b-[3px] border-b-line-strong bg-white px-3 py-2.5 font-semibold">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {items.length === 0 ? (
              <tr>
                <td colSpan={6} className="border border-line px-3 py-6 text-center text-muted">
                  Nothing saved yet. Add a ticker below.
                </td>
              </tr>
            ) : (
              items.map((item) => (
                <tr key={item.asset}>
                  <td className="border border-line border-r-[3px] border-r-line-strong px-3 py-2 font-semibold">
                    <Link
                      to="/asset/$ticker"
                      params={{ ticker: item.asset }}
                      className="hover:underline"
                    >
                      ${item.asset}
                    </Link>
                  </td>
                  <td className="border border-line px-3 py-2 text-muted">
                    {item.range52w || "—"}
                  </td>
                  <td className="border border-line px-3 py-2 text-muted">
                    {item.expectedMove || "—"}
                  </td>
                  <td className="border border-line px-3 py-2 text-muted">
                    {item.timeHorizon || "—"}
                  </td>
                  <td className="border border-line px-3 py-2 text-muted">
                    {item.notes || "—"}
                  </td>
                  <td className="border border-line px-3 py-2 text-center">
                    <button
                      type="button"
                      onClick={() => remove(item.asset)}
                      className="border border-line px-2 py-1 text-xs font-medium text-bear hover:bg-neutral-50"
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

      <form onSubmit={onSubmit} className="grid gap-2 sm:grid-cols-2">
        <input
          value={asset}
          onChange={(e) => setAsset(e.target.value)}
          placeholder="Asset (e.g. AAPL)"
          className="h-10 border border-line px-3 text-sm outline-none focus:border-ink"
          required
        />
        <input
          value={range52w}
          onChange={(e) => setRange52w(e.target.value)}
          placeholder="52W Range (e.g. 150 – 220)"
          className="h-10 border border-line px-3 text-sm outline-none focus:border-ink"
        />
        <input
          value={expectedMove}
          onChange={(e) => setExpectedMove(e.target.value)}
          placeholder="Expected Move (Bullish / Bearish)"
          className="h-10 border border-line px-3 text-sm outline-none focus:border-ink"
        />
        <input
          value={timeHorizon}
          onChange={(e) => setTimeHorizon(e.target.value)}
          placeholder="Time Horizon (e.g. 6–12 months)"
          className="h-10 border border-line px-3 text-sm outline-none focus:border-ink"
        />
        <input
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Notes"
          className="h-10 border border-line px-3 text-sm outline-none focus:border-ink sm:col-span-2"
        />
        <button
          type="submit"
          className="h-10 border border-black bg-black text-sm font-medium text-white hover:bg-ink-2 sm:col-span-2"
        >
          Add to Watchlist
        </button>
      </form>
    </section>
  );
}
