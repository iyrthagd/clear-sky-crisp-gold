import { useEffect, useState } from "react";

function formatEst(now = new Date()): string {
  // en-US in America/New_York yields M/D/YYYY; pad to MM/DD/YYYY
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(now);

  const month = parts.find((p) => p.type === "month")?.value ?? "01";
  const day = parts.find((p) => p.type === "day")?.value ?? "01";
  const year = parts.find((p) => p.type === "year")?.value ?? "2026";
  return `${month}/${day}/${year}`;
}

/** Live calendar date in US Eastern Time, format MM/DD/YYYY. Updates every minute. */
export function LiveEstDate({ className = "" }: { className?: string }) {
  const [date, setDate] = useState(() => formatEst());

  useEffect(() => {
    setDate(formatEst());
    const id = window.setInterval(() => setDate(formatEst()), 30_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <time className={className} dateTime={date}>
      {date}
    </time>
  );
}
