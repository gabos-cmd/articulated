import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ArtworkView } from "@/components/ArtworkView";
import { artworks, chronological, getArtwork } from "@/lib/collection";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return artworks.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const artwork = getArtwork((await params).slug);
  if (!artwork) return {};
  return {
    title: `${artwork.title}, ${artwork.artist}`,
    description: artwork.lede,
    openGraph: { images: [{ url: artwork.media.src["960"] }] }
  };
}

export default async function ArtworkPage({ params }: Props) {
  const artwork = getArtwork((await params).slug);
  if (!artwork) notFound();
  const i = chronological.findIndex((a) => a.slug === artwork.slug);
  const prev = chronological[i - 1];
  const next = chronological[i + 1];
  return (
    <ArtworkView
      artwork={artwork}
      path={`/artwork/${artwork.slug}`}
      meta={{
        kind: "collection",
        prev: prev ? { href: `/artwork/${prev.slug}`, label: String(prev.year) } : null,
        next: next ? { href: `/artwork/${next.slug}`, label: String(next.year) } : null
      }}
    />
  );
}
