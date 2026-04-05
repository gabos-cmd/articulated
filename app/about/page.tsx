import { SiteNav } from "@/components/SiteNav";

export default function AboutPage() {
  return (
    <main className="museum-shell min-h-screen bg-white px-5 pb-24 pt-6 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1380px]">
        <SiteNav />

        <section className="relative mt-10 overflow-hidden rounded-[2rem] border border-line bg-[linear-gradient(180deg,rgba(255,255,255,1),rgba(246,246,245,0.78))] px-6 py-12 shadow-[0_22px_60px_rgba(17,17,17,0.06)] sm:px-10 sm:py-16">
          <div className="pointer-events-none absolute -right-12 top-4 h-56 w-56 rounded-full bg-black/[0.04] blur-[110px]" />
          <div className="relative max-w-3xl">
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
              About
            </p>
            <h1 className="mt-4 font-display text-[3rem] leading-[0.94] tracking-[-0.03em] text-foreground sm:text-[4.3rem]">
              One artwork at a time,
              <br />
              designed for slow looking.
            </h1>
            <p className="mt-6 max-w-2xl text-[17px] leading-8 text-black/72">
              Articulated is a curated digital art experience built around a
              simple idea: one painting can be enough, if you give it real
              attention. Instead of flooding the screen with options, it invites
              you to pause, look longer, and connect the artwork to the artist,
              the period, and the wider world around it.
            </p>
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-5xl">
          <div className="grid gap-12 border-t border-line py-14 md:grid-cols-3 md:gap-10">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
                One artwork a day
              </p>
              <p className="mt-4 text-[16px] leading-8 text-foreground/86">
                The experience centers a single artwork instead of a crowded
                gallery, so the page feels focused rather than endless.
              </p>
            </div>
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
                Slow looking
              </p>
              <p className="mt-4 text-[16px] leading-8 text-foreground/86">
                The layout is designed to make the painting the main event, then
                support it with calm context that deepens what you notice.
              </p>
            </div>
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
                Curated learning
              </p>
              <p className="mt-4 text-[16px] leading-8 text-foreground/86">
                The goal is not to show random museum objects, but to create a
                memorable path into culturally important paintings and the
                stories around them.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
