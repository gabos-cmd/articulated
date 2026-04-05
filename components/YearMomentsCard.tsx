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
    <section className="grid gap-5 border-t border-line py-12 sm:py-16 md:grid-cols-[220px_minmax(0,1fr)] md:gap-10">
      <div>
        <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
          What else was happening that year?
        </p>
      </div>
      <div>
        <p className="max-w-3xl text-[15px] leading-7 text-muted sm:text-base">
          A historical snapshot around{" "}
          <span className="text-foreground">{dateLabel}</span>.
        </p>

        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          {moments.map((moment, index) => (
            <article
              key={`${moment.label}-${index}`}
              className="border-t border-line pt-5"
            >
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
                {moment.label}
              </p>
              <p className="mt-3 text-sm leading-7 text-foreground/86">
                {moment.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
