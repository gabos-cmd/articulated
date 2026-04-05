import {
  curatedPaintings,
  type CuratedPaintingSeed
} from "@/data/curatedPaintings";
import type { Artwork } from "@/lib/artwork";

const WIKIPEDIA_API_URL = "https://en.wikipedia.org/w/api.php";
const WIKIPEDIA_REVALIDATE_SECONDS = 60 * 60 * 24;
const WIKIPEDIA_THUMBNAIL_WIDTH = 1400;

type WikipediaPage = {
  title?: string;
  extract?: string;
  thumbnail?: {
    source?: string;
  };
  original?: {
    source?: string;
  };
  missing?: boolean;
};

type WikipediaResponse = {
  query?: {
    pages?: WikipediaPage[];
  };
};

export async function getFeaturedArtwork(excludeId?: string): Promise<Artwork> {
  const pool =
    excludeId && curatedPaintings.length > 1
      ? curatedPaintings.filter((painting) => painting.id !== excludeId)
      : curatedPaintings;

  const selectedPainting =
    pool[Math.floor(Math.random() * pool.length)] ?? curatedPaintings[0];

  return hydratePainting(selectedPainting);
}

async function hydratePainting(
  painting: CuratedPaintingSeed
): Promise<Artwork> {
  const [paintingPage, artistPage] = await Promise.all([
    fetchWikipediaPage(painting.wikipediaTitle, 4),
    fetchWikipediaPage(painting.artistWikipediaTitle, 3)
  ]);

  return {
    id: painting.id,
    title: paintingPage?.title?.trim() || painting.title,
    artist: painting.artist,
    artistQuote: painting.artistQuote ?? null,
    date: painting.date,
    year: painting.year,
    medium: painting.medium,
    imageUrl:
      paintingPage?.thumbnail?.source || paintingPage?.original?.source || null,
    imageAlt: painting.imageAlt,
    location: painting.location,
    movement: painting.movement,
    whyItMatters: painting.whyItMatters,
    aboutArtist: buildAboutArtist(painting, artistPage?.extract),
    historicalContext: painting.historicalContext,
    lookingPrompt: painting.lookingPrompt,
    yearMoments: painting.yearMoments,
    source: "curated",
    sourceLabel: "Curated painting selection"
  };
}

async function fetchWikipediaPage(
  title: string,
  sentenceCount: number
): Promise<WikipediaPage | null> {
  const params = new URLSearchParams({
    action: "query",
    redirects: "1",
    format: "json",
    formatversion: "2",
    prop: "extracts|pageimages",
    explaintext: "1",
    exintro: "1",
    exsentences: String(sentenceCount),
    piprop: "thumbnail|original",
    pithumbsize: String(WIKIPEDIA_THUMBNAIL_WIDTH),
    titles: title
  });

  const response = await fetch(`${WIKIPEDIA_API_URL}?${params.toString()}`, {
    headers: {
      "User-Agent": "Articulated/1.0 (educational painting app)"
    },
    next: {
      revalidate: WIKIPEDIA_REVALIDATE_SECONDS
    }
  }).catch(() => null);

  if (!response?.ok) {
    return null;
  }

  const payload = (await response.json()) as WikipediaResponse;
  const page = payload.query?.pages?.[0];

  if (!page || page.missing) {
    return null;
  }

  return page;
}

function buildAboutArtist(
  painting: CuratedPaintingSeed,
  extract?: string
) {
  const cleanedExtract = cleanWikipediaText(extract);

  if (!cleanedExtract) {
    return painting.aboutArtistFallback;
  }

  return takeSentences(cleanedExtract, 2) || painting.aboutArtistFallback;
}

function cleanWikipediaText(value?: string) {
  if (!value) {
    return null;
  }

  return value
    .replace(/\([^)]*(?:[A-Z][a-z]+:|UK:|US:|\d{4}|born|died)[^)]*\)/g, "")
    .replace(/\s+,/g, ",")
    .replace(/\s{2,}/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function takeSentences(text: string, count: number) {
  const sentences = text.match(/[^.!?]+[.!?]+/g) ?? [text];

  return sentences
    .slice(0, count)
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
}
