type InfoSectionProps = {
  title: string;
  description: string;
  tone?: "default" | "prompt";
};

export function InfoSection({
  title,
  description,
  tone = "default"
}: InfoSectionProps) {
  const isPrompt = tone === "prompt";

  return (
    <section className="grid gap-5 border-t border-line py-12 sm:py-16 md:grid-cols-[220px_minmax(0,1fr)] md:gap-10">
      <div>
        <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
          {title}
        </p>
      </div>
      <div>
        <p
          className={
            isPrompt
              ? "max-w-3xl font-display text-[1.75rem] leading-[1.38] tracking-[-0.02em] text-foreground sm:text-[2.1rem]"
              : "max-w-3xl text-[16px] leading-8 text-foreground/88 sm:text-[17px]"
          }
        >
          {description}
        </p>
      </div>
    </section>
  );
}
