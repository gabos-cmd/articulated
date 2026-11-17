import type { Metadata } from "next";

import { CollectionBrowser } from "@/components/CollectionBrowser";
import { SpotFrame } from "@/components/illustrations";
import { PageHeader } from "@/components/PageHeader";
import { ArtTile, Timeline } from "@/components/pieces";
import { movements } from "@/data/movements";
import { artworks, chronological } from "@/lib/collection";

export const metadata: Metadata = {
  title: "The collection",
  description: "Every work in Articulated, from Jan van Eyck to Kandinsky, arranged through time."
};

export default function CollectionPage() {
  const used = new Set(artworks.map((a) => a.movement));
  const movementList = Object.values(movements).filter((m) => used.has(m.id));
  return (
    <main>
      <PageHeader
        eyebrow={`${artworks.length} works · ${movementList.length} movements · 1434 to 1913`}
        title={
          <>
            The <em className="italic">collection</em>
          </>
        }
        intro="Five centuries of painting and printmaking, all in the public domain. Browse it through time, or follow a single movement."
        art={<SpotFrame className="h-32 w-36 sm:h-40 sm:w-48" />}
        tint="var(--color-ochre)"
      />
      <div className="mx-auto max-w-[1180px] px-5 sm:px-10">
        <section className="pt-16">
          <p className="eyebrow text-ink-3">The whole collection on one line</p>
          <div className="scrollbar-none -mx-2 overflow-x-auto px-2">
            <div className="min-w-[720px]">
              <Timeline />
            </div>
          </div>
        </section>
        <CollectionBrowser
          movements={movementList.map(({ id, name, span, color }) => ({ id, name, span, color }))}
          works={chronological.map((a) => ({ slug: a.slug, movement: a.movement, year: a.year }))}
          tiles={Object.fromEntries(chronological.map((a, i) => [a.slug, <ArtTile key={a.slug} artwork={a} index={i} kicker={a.date} />]))}
        />
      </div>
    </main>
  );
}
