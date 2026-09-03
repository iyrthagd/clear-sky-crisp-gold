import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageShell } from "@/components/page-shell";
import { PersonalWatchlist } from "@/components/personal-watchlist";
import { StockTable } from "@/components/stock-table";
import { august29 } from "@/lib/assets";

export const Route = createFileRoute("/lists")({ component: Lists });

const MONTH_NAMES = [
  "",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function isAllowedDate(year: number, month: number, day: number) {
  if (year === 2026) {
    if (month < 9 || month > 12) return false;
  } else if (year !== 2027) {
    return false;
  }
  const days = new Date(year, month, 0).getDate();
  return day >= 1 && day <= days;
}

function daysInMonth(year: number, month: number) {
  return new Date(year, month, 0).getDate();
}

function getAssetsForDate(year: number, month: number, day: number) {
  // Hook real archives up here later.
  // Example: August 29, 2026 uses the existing sample list.
  if (year === 2026 && month === 8 && day === 29) return august29;
  return null;
}

type View =
  | { level: "years" }
  | { level: "months"; year: number }
  | { level: "days"; year: number; month: number }
  | { level: "day"; year: number; month: number; day: number };

function Lists() {
  const [view, setView] = useState<View>({ level: "years" });
  const [calYear, setCalYear] = useState(2026);
  const [calMonth, setCalMonth] = useState(9);
  const [selected, setSelected] = useState<{ y: number; m: number; d: number } | null>(null);

  const openDay = (year: number, month: number, day: number) => {
    if (!isAllowedDate(year, month, day)) return;
    setSelected({ y: year, m: month, d: day });
    setCalYear(year);
    setCalMonth(month);
    setView({ level: "day", year, month, day });
  };

  const calendarDays = useMemo(() => {
    const firstDow = new Date(calYear, calMonth - 1, 1).getDay();
    const total = daysInMonth(calYear, calMonth);
    const cells: Array<{ day: number | null; allowed: boolean }> = [];
    for (let i = 0; i < firstDow; i++) cells.push({ day: null, allowed: false });
    for (let d = 1; d <= total; d++) {
      cells.push({ day: d, allowed: isAllowedDate(calYear, calMonth, d) });
    }
    return cells;
  }, [calYear, calMonth]);

  const shiftCalendar = (delta: number) => {
    let m = calMonth + delta;
    let y = calYear;
    if (m < 1) {
      m = 12;
      y -= 1;
    }
    if (m > 12) {
      m = 1;
      y += 1;
    }
    if (y < 2026 || (y === 2026 && m < 9)) {
      y = 2026;
      m = 9;
    }
    if (y > 2027 || (y === 2027 && m > 12)) {
      y = 2027;
      m = 12;
    }
    setCalYear(y);
    setCalMonth(m);
  };

  const dayAssets =
    view.level === "day" ? getAssetsForDate(view.year, view.month, view.day) : null;

  return (
    <PageShell>
      <header className="mb-6 text-center">
        <h1 className="font-serif text-2xl font-semibold tracking-tight">Previous Lists</h1>
        <p className="mt-1 text-sm text-muted">
          Browse by year, month, and day — or pick a date on the calendar
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-[1fr_280px]">
        {/* Folder browser */}
        <section className="rounded-lg border border-line bg-surface p-4 shadow-sm">
          {/* Breadcrumb */}
          <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-muted">
            <button
              type="button"
              className="text-primary hover:underline"
              onClick={() => setView({ level: "years" })}
            >
              All years
            </button>
            {view.level !== "years" && (
              <>
                <span>/</span>
                <button
                  type="button"
                  className="text-primary hover:underline"
                  onClick={() =>
                    setView({
                      level: "months",
                      year: "year" in view ? view.year : 2026,
                    })
                  }
                >
                  {"year" in view ? view.year : ""}
                </button>
              </>
            )}
            {(view.level === "days" || view.level === "day") && (
              <>
                <span>/</span>
                <button
                  type="button"
                  className="text-primary hover:underline"
                  onClick={() =>
                    setView({
                      level: "days",
                      year: view.year,
                      month: view.month,
                    })
                  }
                >
                  {MONTH_NAMES[view.month]}
                </button>
              </>
            )}
            {view.level === "day" && (
              <>
                <span>/</span>
                <span className="text-fg">Day {view.day}</span>
              </>
            )}
          </div>

          {/* Years */}
          {view.level === "years" && (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {[2026, 2027].map((year) => (
                <button
                  key={year}
                  type="button"
                  onClick={() => setView({ level: "months", year })}
                  className="rounded-lg border border-line bg-bg px-3 py-5 text-center transition hover:border-primary hover:bg-white/5"
                >
                  <div className="text-2xl">📁</div>
                  <div className="mt-1 text-sm font-semibold">{year}</div>
                </button>
              ))}
            </div>
          )}

          {/* Months */}
          {view.level === "months" && (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {Array.from(
                { length: view.year === 2026 ? 4 : 12 },
                (_, i) => (view.year === 2026 ? 9 + i : 1 + i),
              ).map((month) => (
                <button
                  key={month}
                  type="button"
                  onClick={() => {
                    setView({ level: "days", year: view.year, month });
                    setCalYear(view.year);
                    setCalMonth(month);
                  }}
                  className="rounded-lg border border-line bg-bg px-3 py-5 text-center transition hover:border-primary hover:bg-white/5"
                >
                  <div className="text-2xl">📁</div>
                  <div className="mt-1 text-sm font-semibold">{MONTH_NAMES[month]}</div>
                </button>
              ))}
            </div>
          )}

          {/* Days */}
          {view.level === "days" && (
            <div className="grid grid-cols-4 gap-2 sm:grid-cols-7">
              {Array.from({ length: daysInMonth(view.year, view.month) }, (_, i) => i + 1).map(
                (day) => (
                  <button
                    key={day}
                    type="button"
                    onClick={() => openDay(view.year, view.month, day)}
                    className="rounded-lg border border-line bg-bg px-2 py-3 text-center transition hover:border-primary hover:bg-white/5"
                  >
                    <div className="text-base font-bold">{day}</div>
                    <div className="text-[11px] text-muted">
                      {MONTH_NAMES[view.month].slice(0, 3)}
                    </div>
                  </button>
                ),
              )}
            </div>
          )}

          {/* Single day list */}
          {view.level === "day" && (
            <div>
              <h2 className="mb-3 text-lg font-semibold">
                {MONTH_NAMES[view.month]} {view.day}, {view.year} List
              </h2>
              {dayAssets ? (
                <StockTable
                  title={`${MONTH_NAMES[view.month]} ${view.day}, ${view.year} List`}
                  assets={dayAssets}
                />
              ) : (
                <p className="rounded-md border border-dashed border-line px-4 py-8 text-center text-sm text-muted">
                  No list saved for this date yet. You can add archive data later.
                </p>
              )}
            </div>
          )}
        </section>

        {/* Calendar */}
        <aside className="rounded-lg border border-line bg-surface p-4 shadow-sm">
          <h3 className="mb-3 text-sm font-semibold">Pick a date</h3>
          <div className="mb-3 flex items-center justify-between">
            <button
              type="button"
              onClick={() => shiftCalendar(-1)}
              className="flex h-8 w-8 items-center justify-center rounded-md border border-line hover:bg-white/5"
              aria-label="Previous month"
            >
              ‹
            </button>
            <div className="text-sm font-semibold">
              {MONTH_NAMES[calMonth]} {calYear}
            </div>
            <button
              type="button"
              onClick={() => shiftCalendar(1)}
              className="flex h-8 w-8 items-center justify-center rounded-md border border-line hover:bg-white/5"
              aria-label="Next month"
            >
              ›
            </button>
          </div>

          <div className="grid grid-cols-7 gap-1 text-center">
            {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
              <div key={d} className="py-1 text-[11px] font-semibold text-muted">
                {d}
              </div>
            ))}
            {calendarDays.map((cell, idx) => {
              if (cell.day == null) {
                return <div key={`e-${idx}`} />;
              }
              const isSelected =
                selected?.y === calYear &&
                selected?.m === calMonth &&
                selected?.d === cell.day;
              return (
                <button
                  key={cell.day}
                  type="button"
                  disabled={!cell.allowed}
                  onClick={() => openDay(calYear, calMonth, cell.day!)}
                  className={[
                    "h-8 rounded-md text-sm",
                    !cell.allowed ? "cursor-default text-muted/40" : "hover:bg-white/10",
                    isSelected ? "bg-fg text-bg font-semibold" : "",
                  ].join(" ")}
                >
                  {cell.day}
                </button>
              );
            })}
          </div>

          <p className="mt-3 text-xs leading-relaxed text-muted">
            Available: Sep–Dec 2026 and all of 2027. Click a date to open that day’s list.
          </p>
        </aside>
      </div>

      <div className="my-10 rounded-md border border-dashed border-line bg-ad px-4 py-6 text-center text-sm text-muted">
        Advertisement
      </div>

      <PersonalWatchlist />
    </PageShell>
  );
}
