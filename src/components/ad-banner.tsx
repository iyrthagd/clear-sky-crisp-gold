export function AdBanner({ label = "Advertisement" }: { label?: string }) {
  return (
    <aside className="border-b border-line bg-ad">
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-3 px-4 py-3">
        <span className="rounded-sm border border-line bg-paper-2 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted">
          {label}
        </span>
        <p className="text-center text-sm text-muted">
          Premium placement — sponsor this list
        </p>
      </div>
    </aside>
  );
}
