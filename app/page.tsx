import type { Metadata } from "next";

import { ArtworkView } from "@/components/ArtworkView";
import { formatEditionDate } from "@/components/pieces";
import { edition, todayDay } from "@/lib/collection";

// re-render at least hourly so the edition turns over shortly after midnight UTC
export const revalidate = 3600;

export function generateMetadata(): Metadata {
  const { artwork } = edition(todayDay());
  return {
    title: { absolute: `Articulated · Today: ${artwork.title}` },
    description: artwork.lede,
    openGraph: { images: [{ url: artwork.media.src["960"] }], title: `${artwork.title}, ${artwork.artist}`, description: artwork.lede }
  };
}

export default function TodayPage() {
  const today = todayDay();
  const ed = edition(today);
  const yesterday = today > 0 ? edition(today - 1) : null;
  return (
    <ArtworkView
      artwork={ed.artwork}
      path="/"
      meta={{
        kind: "today",
        number: ed.number,
        dateKey: ed.key,
        dateLabel: formatEditionDate(ed.date),
        prev: yesterday ? { href: `/day/${yesterday.key}`, label: "Yesterday" } : null,
        next: { href: "/archive", label: "Archive" }
      }}
    />
  );
}
