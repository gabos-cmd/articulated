import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  intro,
  art,
  tint = "var(--color-sky)"
}: {
  eyebrow: string;
  title: ReactNode;
  intro: ReactNode;
  art?: ReactNode;
  tint?: string;
}) {
  return (
    <section className="px-2 pt-[calc(env(safe-area-inset-top)+4.75rem)] sm:px-5">
      <div
        className="relative isolate mx-auto flex max-w-[1320px] flex-col justify-between gap-8 overflow-hidden rounded-[1.75rem] px-6 pb-10 pt-14 sm:flex-row sm:items-end sm:rounded-[2.75rem] sm:px-14 sm:pb-14 sm:pt-24"
        style={{ background: `color-mix(in oklab, ${tint} 38%, var(--color-card))` }}
      >
        <div aria-hidden className="absolute -right-24 -top-24 -z-10 h-80 w-80 rounded-full opacity-60 blur-3xl" style={{ background: tint }} />
        <div className="rise max-w-2xl">
          <p className="eyebrow text-ink-2">{eyebrow}</p>
          <h1 className="display mt-4 text-[3.2rem] sm:text-[5rem]">{title}</h1>
          <div className="mt-5 max-w-xl text-[1.0625rem] leading-relaxed text-ink-2">{intro}</div>
        </div>
        {art && <div className="rise shrink-0 self-end" style={{ "--d": "150ms" } as React.CSSProperties}>{art}</div>}
      </div>
    </section>
  );
}
