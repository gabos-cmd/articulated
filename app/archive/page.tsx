import type { Metadata } from "next";

import { SpotColumn } from "@/components/illustrations";
import { PageHeader } from "@/components/PageHeader";
import { ArtTile, formatEditionDate } from "@/components/pieces";
import { edition, todayDay } from "@/lib/collection";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Archive",
  description: "Every past edition of Articulated, one artwork per day."
};

export default function ArchivePage() {
  const today = todayDay();
  const editions = Array.from({ length: today + 1 }, (_, i) => edition(today - i));
  const months = new Map<string, typeof editions>();
  for (const e of editions) {
    const m = e.date.toLocaleDateString("en-GB", { month: "long", year: "numeric", timeZone: "UTC" });
    months.set(m, [...(months.get(m) ?? []), e]);
  }

  return (
    <main>
      <PageHeader
        eyebrow={`${editions.length} editions so far`}
        title={
          <>
            The <em className="italic">archive</em>
          </>
        }
        intro="Every day since the first of November 2026, a new work. Missed one? It's all here, newest first."
        art={<SpotColumn className="h-36 w-28 sm:h-48 sm:w-36" />}
        tint="var(--color-rose)"
      />
      <div className="mx-auto max-w-[1180px] px-5 sm:px-10">
        {[...months.entries()].map(([month, list]) => (
          <section key={month} className="pt-20">
            <h2 className="display flex items-center gap-4 text-[1.7rem] sm:text-[2.1rem]">
              {month}
              <span className="h-px flex-1 bg-ink/15" />
            </h2>
            <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-3 lg:grid-cols-4">
              {list.map((e, i) => (
                <ArtTile
                  key={e.key}
                  artwork={e.artwork}
                  index={e.day}
                  href={e.day === today ? "/" : `/day/${e.key}`}
                  kicker={
                    <>
                      No. {e.number} · {e.day === today ? "today" : formatEditionDate(e.date, "short")}
                    </>
                  }
                  className={i === 0 && e.day === today ? "" : ""}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
