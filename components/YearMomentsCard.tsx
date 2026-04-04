import type { YearMoment } from "@/lib/artwork";

type YearMomentsCardProps = {
  dateLabel: string;
  moments: YearMoment[];
};

export function YearMomentsCard({
  dateLabel,
  moments
}: YearMomentsCardProps) {
  return (
    <article className="rounded-[1.75rem] border border-line bg-surface-strong p-6 card-shadow backdrop-blur-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted">
        What else was happening that year?
      </p>
      <div className="editorial-rule mt-4 h-px w-full" />
      <p className="mt-5 text-sm leading-7 text-muted">
        A quick timeline view for <span className="text-foreground">{dateLabel}</span>.
      </p>

      <div className="mt-6 space-y-5">
        {moments.map((moment, index) => (
          <div key={`${moment.label}-${index}`} className="flex gap-4">
            <div className="flex flex-col items-center pt-1">
              <span className="size-3 rounded-full bg-accent" />
              {index < moments.length - 1 ? (
                <span className="mt-2 h-full w-px bg-line" />
              ) : null}
            </div>
            <div className="rounded-[1.2rem] border border-line bg-white/70 px-4 py-4">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
                {moment.label}
              </p>
              <p className="mt-2 text-sm leading-7 text-foreground/88">
                {moment.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
