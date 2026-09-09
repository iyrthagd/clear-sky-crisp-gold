import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { ChevronDown, Microscope, User } from "lucide-react";
import { Logo } from "@/components/logo";
import { UserButton } from "@/lib/auth/gates";
import { useCurrentUserState } from "@/lib/auth/use-current-user";

const moreLinks = [
  { to: "/create-watchlist", label: "Create a Watchlist" },
  { to: "/community", label: "Community Watchlists" },
  { to: "/search", label: "Asset Search" },
  { to: "/rankings", label: "Rankings" },
  { to: "/about", label: "About" },
] as const;

export function SiteHeader() {
  const [moreOpen, setMoreOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const { user, isPending } = useCurrentUserState();
  const navigate = useNavigate();

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!wrapRef.current?.contains(e.target as Node)) {
        setMoreOpen(false);
        setUserOpen(false);
        setSearchOpen(false);
      }
    }
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);

  const navLink =
    "hidden rounded-sm px-3 py-2 text-sm text-white/90 hover:bg-white/10 hover:text-white md:inline";

  return (
    <header className="sticky top-0 z-40 border-b border-black bg-black text-white">
      <div
        ref={wrapRef}
        className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4"
      >
        <div className="flex min-w-0 items-center gap-5">
          <Logo />
          <nav className="flex items-center gap-0.5">
            <Link to="/" className={navLink}>
              Home
            </Link>
            <Link to="/today" className={navLink}>
              Today's List
            </Link>
            <Link to="/lists" className={navLink}>
              Previous Lists
            </Link>
            <div className="relative">
              <button
                type="button"
                className="flex items-center gap-1 rounded-sm px-3 py-2 text-sm text-white/90 hover:bg-white/10 hover:text-white"
                onClick={(e) => {
                  e.stopPropagation();
                  setMoreOpen((v) => !v);
                  setUserOpen(false);
                  setSearchOpen(false);
                }}
              >
                More <ChevronDown className="size-3.5 opacity-70" />
              </button>
              {moreOpen ? (
                <div className="absolute left-0 top-[calc(100%+4px)] min-w-52 overflow-hidden border border-line bg-white py-1 text-fg shadow-md">
                  {moreLinks.map((l) => (
                    <Link
                      key={l.to}
                      to={l.to}
                      className="block px-4 py-2.5 text-sm hover:bg-neutral-100"
                      onClick={() => setMoreOpen(false)}
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          </nav>
        </div>

        <div className="flex items-center gap-1">
          <div className="relative">
            <button
              type="button"
              className="grid size-9 place-items-center rounded-full text-white/85 hover:bg-white/10 hover:text-white"
              aria-label="Search"
              onClick={(e) => {
                e.stopPropagation();
                setSearchOpen((v) => !v);
                setMoreOpen(false);
                setUserOpen(false);
              }}
            >
              <Microscope className="size-5" strokeWidth={1.75} />
            </button>
            {searchOpen ? (
              <div className="absolute right-0 top-[calc(100%+4px)] min-w-48 overflow-hidden border border-line bg-white py-1 text-fg shadow-md">
                <Link
                  to="/search"
                  className="block px-4 py-2.5 text-sm hover:bg-neutral-100"
                  onClick={() => setSearchOpen(false)}
                >
                  Asset Search
                </Link>
                <button
                  type="button"
                  className="block w-full px-4 py-2.5 text-left text-sm hover:bg-neutral-100"
                  onClick={() => {
                    setSearchOpen(false);
                    navigate({ to: "/today" });
                    queueMicrotask(() => document.getElementById("list-search")?.focus());
                  }}
                >
                  Search this list
                </button>
              </div>
            ) : null}
          </div>

          {isPending ? (
            <div className="size-9 animate-pulse rounded-full bg-white/10" />
          ) : user ? (
            <div className="max-w-[180px] truncate pl-1 [&_button]:text-white/80 [&_span]:text-white">
              <UserButton />
            </div>
          ) : (
            <div className="relative">
              <button
                type="button"
                className="grid size-9 place-items-center rounded-full text-white/85 hover:bg-white/10 hover:text-white"
                aria-label="Account"
                onClick={(e) => {
                  e.stopPropagation();
                  setUserOpen((v) => !v);
                  setMoreOpen(false);
                  setSearchOpen(false);
                }}
              >
                <User className="size-5" strokeWidth={1.75} />
              </button>
              {userOpen ? (
                <div className="absolute right-0 top-[calc(100%+4px)] min-w-44 overflow-hidden border border-line bg-white py-1 text-fg shadow-md">
                  <Link
                    to="/login"
                    className="block px-4 py-2.5 text-sm hover:bg-neutral-100"
                    onClick={() => setUserOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="block px-4 py-2.5 text-sm hover:bg-neutral-100"
                    onClick={() => setUserOpen(false)}
                  >
                    Create account
                  </Link>
                </div>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
