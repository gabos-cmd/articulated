import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";

import { ArtworkView } from "@/components/ArtworkView";
import { formatEditionDate } from "@/components/pieces";
import { dayFromKey, edition, todayDay } from "@/lib/collection";

export const revalidate = 3600;

type Props = { params: Promise<{ key: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const day = dayFromKey((await params).key);
  if (day === null || day > todayDay()) return {};
  const { artwork, number } = edition(day);
  return { title: `No. ${number}: ${artwork.title}`, description: artwork.lede, openGraph: { images: [{ url: artwork.media.src["960"] }] } };
}

export default async function DayPage({ params }: Props) {
  const day = dayFromKey((await params).key);
  const today = todayDay();
  if (day === null || day > today) notFound();
  if (day === today) redirect("/");
  const ed = edition(day);
  const prev = day > 0 ? edition(day - 1) : null;
  const next = edition(day + 1);
  return (
    <ArtworkView
      artwork={ed.artwork}
      path={`/day/${ed.key}`}
      meta={{
        kind: "past",
        number: ed.number,
        dateKey: ed.key,
        dateLabel: formatEditionDate(ed.date),
        prev: prev ? { href: `/day/${prev.key}`, label: "Earlier" } : null,
        next: { href: day + 1 === today ? "/" : `/day/${next.key}`, label: day + 1 === today ? "Today" : "Later" }
      }}
    />
  );
}
