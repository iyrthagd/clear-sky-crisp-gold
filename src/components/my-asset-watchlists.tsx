import { FormEvent, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ChevronDown,
  ChevronRight,
  Globe2,
  Pencil,
  Plus,
  Trash2,
} from "lucide-react";
import {
  useNamedWatchlists,
  type ListVisibility,
  type NamedWatchlist,
} from "@/hooks/use-named-watchlists";

function emptyAssetForm() {
  return {
    asset: "",
    price: "",
    expectedMove: "",
    timeHorizon: "",
    range52w: "",
    notes: "",
  };
}

function ListBlock({
  list,
  expanded,
  onToggle,
  onRename,
  onRemoveList,
  onAddItem,
  onRemoveItem,
}: {
  list: NamedWatchlist;
  expanded: boolean;
  onToggle: () => void;
  onRename: (name: string) => void;
  onRemoveList: () => void;
  onAddItem: (item: ReturnType<typeof emptyAssetForm>) => void;
  onRemoveItem: (asset: string) => void;
}) {
  const [editing, setEditing] = useState(false);
  const [draftName, setDraftName] = useState(list.name);
  const [form, setForm] = useState(emptyAssetForm);

  function commitRename() {
    onRename(draftName);
    setEditing(false);
  }

  function onAdd(e: FormEvent) {
    e.preventDefault();
    if (!form.asset.trim()) return;
    onAddItem(form);
    setForm(emptyAssetForm());
  }

  return (
    <div className="border border-line bg-white">
      <div className="flex items-center gap-2 px-3 py-2.5">
        <button
          type="button"
          aria-label={expanded ? "Collapse list" : "Expand list"}
          onClick={onToggle}
          className="grid size-7 place-items-center text-muted hover:text-fg"
        >
          {expanded ? (
            <ChevronDown className="size-4" strokeWidth={1.75} />
          ) : (
            <ChevronRight className="size-4" strokeWidth={1.75} />
          )}
        </button>

        {editing ? (
          <form
            className="flex min-w-0 flex-1 items-center gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              commitRename();
            }}
          >
            <input
              autoFocus
              value={draftName}
              onChange={(e) => setDraftName(e.target.value)}
              onBlur={commitRename}
              className="h-8 min-w-0 flex-1 border border-line px-2 text-sm outline-none focus:border-ink"
            />
          </form>
        ) : (
          <button
            type="button"
            onClick={onToggle}
            className="min-w-0 flex-1 truncate text-left text-sm font-semibold"
          >
            {list.name}
            <span className="ml-2 font-normal text-muted">
              ({list.visibility}) · {list.items.length}
            </span>
          </button>
        )}

        <button
          type="button"
          aria-label="Rename list"
          onClick={() => {
            setDraftName(list.name);
            setEditing(true);
          }}
          className="grid size-7 place-items-center text-muted hover:text-fg"
        >
          <Pencil className="size-3.5" strokeWidth={1.75} />
        </button>
        <button
          type="button"
          aria-label="Delete list"
          onClick={onRemoveList}
          className="grid size-7 place-items-center text-muted hover:text-bear"
        >
          <Trash2 className="size-3.5" strokeWidth={1.75} />
        </button>
      </div>

      {expanded ? (
        <div className="border-t border-line px-3 pb-3 pt-2">
          <div className="overflow-x-auto">
            <table className="mb-3 w-full min-w-[640px] border-collapse text-sm">
              <thead>
                <tr>
                  <th className="border border-line border-b-2 border-b-line-strong border-r-2 border-r-line-strong bg-white px-2 py-2 text-left font-semibold">
                    Asset
                  </th>
                  <th className="border border-line border-b-2 border-b-line-strong bg-white px-2 py-2 text-left font-semibold">
                    Price
                  </th>
                  <th className="border border-line border-b-2 border-b-line-strong bg-white px-2 py-2 text-left font-semibold">
                    Expected Move
                  </th>
                  <th className="border border-line border-b-2 border-b-line-strong bg-white px-2 py-2 text-left font-semibold">
                    Time Horizon
                  </th>
                  <th className="border border-line border-b-2 border-b-line-strong bg-white px-2 py-2 text-left font-semibold">
                    52W Range
                  </th>
                  <th className="border border-line border-b-2 border-b-line-strong bg-white px-2 py-2 text-left font-semibold">
                    Notes
                  </th>
                  {list.items.length > 0 ? (
                    <th className="w-10 border border-line border-b-2 border-b-line-strong bg-white px-1 py-2" />
                  ) : null}
                </tr>
              </thead>
              <tbody>
                {list.items.length === 0 ? (
                  <tr>
                    <td
                      colSpan={6}
                      className="border border-line px-3 py-5 text-center text-muted"
                    >
                      No assets yet. Add one below.
                    </td>
                  </tr>
                ) : (
                  list.items.map((item) => (
                    <tr key={item.asset}>
                      <td className="border border-line border-r-2 border-r-line-strong px-2 py-2 font-semibold">
                        <Link
                          to="/asset/$ticker"
                          params={{ ticker: item.asset }}
                          className="hover:underline"
                        >
                          ${item.asset}
                        </Link>
                      </td>
                      <td className="border border-line px-2 py-2">{item.price || "—"}</td>
                      <td className="border border-line px-2 py-2">{item.expectedMove || "—"}</td>
                      <td className="border border-line px-2 py-2">{item.timeHorizon || "—"}</td>
                      <td className="border border-line px-2 py-2">{item.range52w || "—"}</td>
                      <td className="border border-line px-2 py-2">{item.notes || "—"}</td>
                      <td className="border border-line px-1 py-2 text-center">
                        <button
                          type="button"
                          aria-label={`Remove ${item.asset}`}
                          onClick={() => onRemoveItem(item.asset)}
                          className="inline-grid size-7 place-items-center text-muted hover:text-bear"
                        >
                          <Trash2 className="size-3.5" strokeWidth={1.75} />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          <form onSubmit={onAdd} className="grid gap-2 sm:grid-cols-3">
            <input
              value={form.asset}
              onChange={(e) => setForm((f) => ({ ...f, asset: e.target.value }))}
              placeholder="Asset"
              className="h-9 border border-line px-2 text-sm outline-none focus:border-ink"
              required
            />
            <input
              value={form.price}
              onChange={(e) => setForm((f) => ({ ...f, price: e.target.value }))}
              placeholder="Price"
              className="h-9 border border-line px-2 text-sm outline-none focus:border-ink"
            />
            <input
              value={form.expectedMove}
              onChange={(e) => setForm((f) => ({ ...f, expectedMove: e.target.value }))}
              placeholder="Expected Move"
              className="h-9 border border-line px-2 text-sm outline-none focus:border-ink"
            />
            <input
              value={form.timeHorizon}
              onChange={(e) => setForm((f) => ({ ...f, timeHorizon: e.target.value }))}
              placeholder="Time Horizon"
              className="h-9 border border-line px-2 text-sm outline-none focus:border-ink"
            />
            <input
              value={form.range52w}
              onChange={(e) => setForm((f) => ({ ...f, range52w: e.target.value }))}
              placeholder="52W Range"
              className="h-9 border border-line px-2 text-sm outline-none focus:border-ink"
            />
            <input
              value={form.notes}
              onChange={(e) => setForm((f) => ({ ...f, notes: e.target.value }))}
              placeholder="Notes"
              className="h-9 border border-line px-2 text-sm outline-none focus:border-ink"
            />
            <button
              type="submit"
              className="h-9 border border-black bg-black text-sm font-medium text-white hover:bg-ink-2 sm:col-span-3"
            >
              Add asset
            </button>
          </form>
        </div>
      ) : null}
    </div>
  );
}

/** Unified personal lists UI for every page. */
export function MyAssetWatchlists() {
  const { lists, createList, renameList, removeList, addItem, removeItem } =
    useNamedWatchlists();
  const [showCreate, setShowCreate] = useState(false);
  const [newName, setNewName] = useState("");
  const [newVisibility, setNewVisibility] = useState<ListVisibility>("private");
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({});

  function onCreate(e: FormEvent) {
    e.preventDefault();
    const id = createList(newName || "My AssetWatchlist", newVisibility);
    setOpenIds((o) => ({ ...o, [id]: true }));
    setNewName("");
    setNewVisibility("private");
    setShowCreate(false);
  }

  function toggle(id: string) {
    setOpenIds((o) => ({ ...o, [id]: !o[id] }));
  }

  return (
    <section className="mx-auto w-full max-w-4xl border border-line bg-white p-4 sm:p-5">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-base font-semibold tracking-tight">My AssetWatchlists</h2>
        <div className="flex flex-wrap items-center gap-2">
          <Link
            to="/community"
            className="inline-flex items-center justify-center gap-2 bg-brand-blue px-3 py-2 text-sm font-medium text-white hover:bg-brand-blue-bright"
          >
            <Globe2 className="size-4" strokeWidth={1.75} aria-hidden />
            Make a Community Watchlist
          </Link>
          <button
            type="button"
            aria-label="Create a watchlist"
            title="Create a watchlist"
            onClick={() => setShowCreate((v) => !v)}
            className="grid size-9 place-items-center border border-black bg-black text-white hover:bg-ink-2"
          >
            <Plus className="size-4" strokeWidth={2} />
          </button>
        </div>
      </div>

      {showCreate ? (
        <form
          onSubmit={onCreate}
          className="mb-4 grid gap-2 border border-line bg-neutral-50 p-3 sm:grid-cols-[1fr_160px_auto]"
        >
          <input
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Name"
            className="h-10 border border-line bg-white px-3 text-sm outline-none focus:border-ink"
            required
          />
          <select
            value={newVisibility}
            onChange={(e) => setNewVisibility(e.target.value as ListVisibility)}
            className="h-10 border border-line bg-white px-2 text-sm outline-none focus:border-ink"
          >
            <option value="private">Private</option>
            <option value="public">Public</option>
          </select>
          <button
            type="submit"
            className="h-10 border border-black bg-black px-4 text-sm font-medium text-white hover:bg-ink-2"
          >
            Create list
          </button>
        </form>
      ) : null}

      {lists.length === 0 && !showCreate ? (
        <p className="text-sm text-muted">
          No lists yet. Press <span className="font-semibold text-fg">+</span> to create one, then
          add assets.
        </p>
      ) : (
        <div className="space-y-2">
          {lists.map((list) => (
            <ListBlock
              key={list.id}
              list={list}
              expanded={!!openIds[list.id]}
              onToggle={() => toggle(list.id)}
              onRename={(name) => renameList(list.id, name)}
              onRemoveList={() => removeList(list.id)}
              onAddItem={(item) => addItem(list.id, item)}
              onRemoveItem={(asset) => removeItem(list.id, asset)}
            />
          ))}
        </div>
      )}
    </section>
  );
}
