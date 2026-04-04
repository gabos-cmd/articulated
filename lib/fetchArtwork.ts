import { mockArtworks } from "@/data/mockArtwork";
import type { Artwork } from "@/lib/artwork";

const AIC_API_URL = "https://api.artic.edu/api/v1/artworks";
const AIC_IMAGE_URL = "https://www.artic.edu/iiif/2";
const PAGE_SIZE = 12;
const MAX_RANDOM_PAGE = 5000;
const MAX_ATTEMPTS = 4;
const ARTWORK_FIELDS = [
  "id",
  "title",
  "artist_title",
  "date_display",
  "medium_display",
  "image_id",
  "thumbnail",
  "style_title",
  "place_of_origin",
  "short_description",
  "artist_display"
].join(",");

export async function getFeaturedArtwork(excludeId?: string): Promise<Artwork> {
  const liveArtwork = await getLiveArtwork(excludeId);

  if (liveArtwork) {
    return liveArtwork;
  }

  const pool =
    excludeId && mockArtworks.length > 1
      ? mockArtworks.filter((artwork) => artwork.id !== excludeId)
      : mockArtworks;

  const artwork =
    pool[Math.floor(Math.random() * pool.length)] ?? mockArtworks[0];

  return artwork;
}

type AicArtworkRecord = {
  id: number;
  title: string | null;
  artist_title: string | null;
  date_display: string | null;
  medium_display: string | null;
  image_id: string | null;
  thumbnail?: {
    alt_text?: string | null;
  } | null;
  style_title?: string | null;
  place_of_origin?: string | null;
  short_description?: string | null;
  artist_display?: string | null;
};

type AicArtworkResponse = {
  data: AicArtworkRecord[];
};

async function getLiveArtwork(
  excludeId?: string
): Promise<Artwork | null> {
  for (let attempt = 0; attempt < MAX_ATTEMPTS; attempt += 1) {
    const page = Math.floor(Math.random() * MAX_RANDOM_PAGE) + 1;
    const response = await fetch(
      `${AIC_API_URL}?fields=${ARTWORK_FIELDS}&limit=${PAGE_SIZE}&page=${page}`,
      {
        cache: "no-store"
      }
    ).catch(() => null);

    if (!response?.ok) {
      continue;
    }

    const payload = (await response.json()) as AicArtworkResponse;
    const artworks = payload.data
      .filter((record) => String(record.id) !== excludeId)
      .filter((record) => record.image_id || record.title || record.artist_title)
      .map(normalizeArtwork);

    if (artworks.length > 0) {
      return artworks[Math.floor(Math.random() * artworks.length)] ?? null;
    }
  }

  return null;
}

function normalizeArtwork(record: AicArtworkRecord): Artwork {
  const title = record.title?.trim() || "Untitled artwork";
  const artist = record.artist_title?.trim() || "Artist unknown";
  const date = record.date_display?.trim() || "Date unavailable";
  const year = extractYear(date);
  const medium = record.medium_display?.trim() || "Medium not listed";
  const location = record.place_of_origin?.trim() || null;
  const movement = toDisplayLabel(record.style_title);
  const shortDescription = cleanText(record.short_description);
  const artistLine = cleanText(record.artist_display);

  return {
    id: String(record.id),
    title,
    artist,
    date,
    year,
    medium,
    imageUrl: record.image_id
      ? `${AIC_IMAGE_URL}/${record.image_id}/full/1200,/0/default.jpg`
      : null,
    imageAlt:
      cleanText(record.thumbnail?.alt_text) || `${title} by ${artist}`,
    location,
    movement,
    whyItMatters:
      shortDescription ||
      `${title} matters because it gives a vivid entry point into ${movement?.toLowerCase() ?? "its period"} art through material, mood, and close observation.`,
    aboutArtist: buildArtistStory(artist, artistLine),
    historicalContext: buildHistoricalContext({
      year,
      date,
      location,
      movement
    }),
    yearMoments: buildYearMoments(year),
    source: "api",
    sourceLabel: "Live from the Art Institute of Chicago"
  };
}

function buildArtistStory(
  artist: string,
  artistLine: string | null
): string {
  if (artistLine) {
    return `${artistLine}. This artwork offers a concise way into ${artist}'s practice because it shows how an artist's materials and visual choices can carry personality and historical meaning at the same time.`;
  }

  return `${artist} is introduced here through a work that rewards slow looking. Even when the museum record is brief, the piece still offers a clear starting point for talking about style, craft, and artistic intention.`;
}

function buildHistoricalContext({
  year,
  date,
  location,
  movement
}: {
  year: number | null;
  date: string;
  location: string | null;
  movement: string | null;
}) {
  const placeText = location ? ` in or around ${location}` : "";
  const movementText = movement
    ? ` It also connects to ${movement.toLowerCase()} art and the visual ideas shaping that moment.`
    : "";

  if (year === null) {
    return `The museum record lists ${date}${placeText}, which gives a useful starting point even without a precise year. This card is ready for richer context later, but the work can already be read through its materials, subject, and place in art history.${movementText}`;
  }

  return `Created around ${date}${placeText}, this artwork belongs to a wider historical moment shaped by ${getEraFrame(year)}.${movementText}`;
}

function buildYearMoments(year: number | null) {
  if (year === null) {
    return [
      {
        label: "World",
        text: "Add a major political or social event from the artwork's year to deepen the historical frame."
      },
      {
        label: "Ideas",
        text: "Add a scientific discovery, new technology, or influential text from the same period."
      },
      {
        label: "Culture",
        text: "Add a music, literature, film, or design milestone to show what else shaped the cultural mood."
      }
    ];
  }

  if (year < 1500) {
    return [
      {
        label: "World",
        text: `Around ${year}, political power, religion, and trade networks strongly shaped how images and objects moved between regions.`
      },
      {
        label: "Ideas",
        text: `Knowledge in this period was often preserved and shared through oral traditions, manuscripts, architecture, and craft.`
      },
      {
        label: "Culture",
        text: `Artworks from eras this early are especially valuable because they connect everyday life to long historical memory.`
      }
    ];
  }

  if (year < 1800) {
    return [
      {
        label: "World",
        text: `Around ${year}, empires, trade, and political revolutions were reshaping how people understood power and place.`
      },
      {
        label: "Ideas",
        text: `Debates about reason, science, and modern government were spreading quickly across the Atlantic world.`
      },
      {
        label: "Culture",
        text: `Print culture and travel helped images circulate farther, letting artworks influence audiences well beyond their original setting.`
      }
    ];
  }

  if (year < 1900) {
    return [
      {
        label: "World",
        text: `Around ${year}, industrial growth and urban expansion were changing landscapes, labor, and daily routines.`
      },
      {
        label: "Ideas",
        text: `New technologies, faster travel, and modern science were changing how people observed and recorded the world.`
      },
      {
        label: "Culture",
        text: `Artists in the 19th century often responded to modern life by rethinking realism, emotion, and the role of memory in art.`
      }
    ];
  }

  if (year < 1914) {
    return [
      {
        label: "World",
        text: `Around ${year}, industrial cities, imperial networks, and faster travel were reshaping everyday life across Europe and beyond.`
      },
      {
        label: "Ideas",
        text: `Photography, print culture, and early cinema were changing how people saw movement, leisure, and modern identity.`
      },
      {
        label: "Culture",
        text: `Artists at the start of the 20th century were testing fresh ways to represent mood, speed, and urban experience.`
      }
    ];
  }

  if (year < 1950) {
    return [
      {
        label: "World",
        text: `The first half of the 20th century was marked by war, political upheaval, and rapid social change, all of which shaped artistic expression.`
      },
      {
        label: "Ideas",
        text: `Modern technologies such as film, photography, and faster communication were changing how images were made and understood.`
      },
      {
        label: "Culture",
        text: `Many artists used bold new forms in this era to question tradition and respond to the speed of modern life.`
      }
    ];
  }

  if (year < 2000) {
    return [
      {
        label: "World",
        text: `Around ${year}, civil rights struggles, decolonization, and global media were reshaping public life and identity.`
      },
      {
        label: "Ideas",
        text: `Space exploration, computing, and new materials were expanding what progress and experimentation could look like.`
      },
      {
        label: "Culture",
        text: `Art from this period often reflects a world of faster communication, wider audiences, and more visible social debate.`
      }
    ];
  }

  return [
    {
      label: "World",
      text: `Around ${year}, globalization and digital networks were changing how quickly images, stories, and ideas could travel.`
    },
    {
      label: "Ideas",
      text: `Contemporary art in this era often sits alongside conversations about technology, identity, sustainability, and public memory.`
    },
    {
      label: "Culture",
      text: `This is a good place to add a researched event from ${year} later, turning the card into a richer year-by-year timeline feature.`
    }
  ];
}

function getEraFrame(year: number) {
  if (year < 1500) {
    return "religious influence, regional power, and the exchange of ideas through objects, architecture, and trade";
  }

  if (year < 1800) {
    return "expanding trade, political change, and a growing interest in reason, history, and classical learning";
  }

  if (year < 1900) {
    return "industrial change, new technologies, and rising attention to everyday experience and national identity";
  }

  if (year < 1914) {
    return "industrial expansion, urban modernity, and major experiments in how art could capture everyday life";
  }

  if (year < 1950) {
    return "war, political upheaval, technological acceleration, and major experiments in how art could represent reality";
  }

  if (year < 2000) {
    return "mass media, social movements, and a wider public conversation about freedom, identity, and innovation";
  }

  return "global networks, digital culture, and new debates about memory, technology, and representation";
}

function cleanText(value?: string | null) {
  if (!value) {
    return null;
  }

  return value
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function extractYear(dateText: string) {
  const yearMatch = dateText.match(/-?\d{1,4}/);

  if (!yearMatch) {
    return null;
  }

  const year = Number(yearMatch[0]);

  return Number.isNaN(year) ? null : year;
}

function toDisplayLabel(value?: string | null) {
  if (!value) {
    return null;
  }

  return value
    .split(" ")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}
