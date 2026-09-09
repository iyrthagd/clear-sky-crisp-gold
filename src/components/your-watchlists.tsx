import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Pencil, Plus, Trash2 } from "lucide-react";
import { useNamedWatchlists } from "@/hooks/use-named-watchlists";

/**
 * Compact block for pages other than Home:
 * "Your Watchlists" + plus to create; expands with saved lists; pencil to rename.
 */
export function YourWatchlists() {
  const { lists, createList, renameList, removeList } = useNamedWatchlists();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [draft, setDraft] = useState("");

  function startEdit(id: string, name: string) {
    setEditingId(id);
    setDraft(name);
  }

  function commitEdit() {
    if (editingId) {
      renameList(editingId, draft);
      setEditingId(null);
      setDraft("");
    }
  }

  return (
    <section className="mx-auto w-full max-w-xl border border-line bg-white p-4">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-sm font-semibold tracking-tight">Your Watchlists</h2>
        <button
          type="button"
          aria-label="Create a watchlist"
          title="Create a watchlist"
          onClick={() => createList(`Watchlist ${lists.length + 1}`)}
          className="grid size-8 place-items-center border border-black bg-black text-white hover:bg-ink-2"
        >
          <Plus className="size-4" strokeWidth={2} />
        </button>
      </div>

      {lists.length === 0 ? (
        <p className="mt-3 text-xs text-muted">
          No lists yet. Press <span className="font-semibold text-fg">+</span> to create one.
        </p>
      ) : (
        <ul className="mt-3 divide-y divide-line border-t border-line">
          {lists.map((list) => (
            <li key={list.id} className="flex items-center gap-2 py-2.5">
              {editingId === list.id ? (
                <form
                  className="flex min-w-0 flex-1 items-center gap-2"
                  onSubmit={(e) => {
                    e.preventDefault();
                    commitEdit();
                  }}
                >
                  <input
                    autoFocus
                    value={draft}
                    onChange={(e) => setDraft(e.target.value)}
                    onBlur={commitEdit}
                    className="h-8 min-w-0 flex-1 border border-line px-2 text-sm outline-none focus:border-ink"
                  />
                  <button type="submit" className="text-xs font-medium underline">
                    Save
                  </button>
                </form>
              ) : (
                <>
                  <Link
                    to="/create-watchlist"
                    className="min-w-0 flex-1 truncate text-sm font-medium hover:underline"
                  >
                    {list.name}
                  </Link>
                  <span className="shrink-0 text-xs text-muted">{list.items.length} items</span>
                  <button
                    type="button"
                    aria-label={`Rename ${list.name}`}
                    onClick={() => startEdit(list.id, list.name)}
                    className="grid size-7 place-items-center text-muted hover:text-fg"
                  >
                    <Pencil className="size-3.5" strokeWidth={1.75} />
                  </button>
                  <button
                    type="button"
                    aria-label={`Delete ${list.name}`}
                    onClick={() => removeList(list.id)}
                    className="grid size-7 place-items-center text-muted hover:text-bear"
                  >
                    <Trash2 className="size-3.5" strokeWidth={1.75} />
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
