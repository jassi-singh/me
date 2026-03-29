export default function SectionLabel({ children }: { children: string }) {
  return (
    <div className="mb-7 flex items-center gap-3 text-[12px] uppercase tracking-[0.12em] text-terminal-accent">
      <span>{children}</span>
      <span className="h-px flex-1 bg-terminal-border" aria-hidden />
    </div>
  );
}
