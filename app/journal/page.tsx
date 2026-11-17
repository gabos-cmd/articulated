import type { Metadata } from "next";

import { JournalView } from "@/components/JournalView";
import { ArtTile } from "@/components/pieces";
import { artworks, dateKey, todayDay } from "@/lib/collection";

export const metadata: Metadata = {
  title: "Your journal",
  description: "The works you've saved, the days you've visited, and how your quizzes went. Stored only in your browser."
};

export const revalidate = 3600;

export default function JournalPage() {
  return (
    <JournalView
      todayKey={dateKey(todayDay())}
      total={artworks.length}
      titles={Object.fromEntries(artworks.map((a) => [a.slug, { title: a.title, artist: a.artist, year: a.year }]))}
      tiles={Object.fromEntries(artworks.map((a, i) => [a.slug, <ArtTile key={a.slug} artwork={a} index={i} kicker={a.movementInfo.name} />]))}
    />
  );
}
