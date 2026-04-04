type InfoSectionProps = {
  title: string;
  description: string;
};

export function InfoSection({
  title,
  description
}: InfoSectionProps) {
  return (
    <article className="rounded-[1.75rem] border border-line bg-surface-strong p-6 card-shadow backdrop-blur-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted">
        {title}
      </p>
      <div className="editorial-rule mt-4 h-px w-full" />
      <p className="mt-5 text-[15px] leading-8 text-foreground/88 sm:text-base">
        {description}
      </p>
    </article>
  );
}
