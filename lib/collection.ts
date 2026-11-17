import mediaJson from "@/data/media.json";
import { movements } from "@/data/movements";
import { seeds } from "@/data/seeds";
import type { ArtworkSeed, Movement, Quiz } from "@/data/types";

export type Media = {
  file: string;
  width: number;
  height: number;
  src: Record<"500" | "960" | "1920", string>;
  pageUrl: string;
  palette: string[];
  artistBio: string;
  artistUrl: string;
};

export type Artwork = ArtworkSeed & {
  media: Media;
  movementInfo: Movement;
  wikipediaUrl: string;
  /** most saturated colour in the palette, used for washes and accents */
  accent: string;
  life: { born: number; died: number };
};

function chroma(hex: string) {
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255);
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  return { c: max - min, l };
}

function pickAccent(palette: string[], fallback: string) {
  const scored = palette
    .map((hex) => ({ hex, ...chroma(hex) }))
    .filter((x) => x.l > 0.18 && x.l < 0.85)
    .sort((a, b) => b.c - a.c);
  return scored[0] && scored[0].c > 0.16 ? scored[0].hex : fallback;
}

const media = mediaJson as unknown as Record<string, Media>;

export const artworks: Artwork[] = seeds.map((seed) => {
  const m = media[seed.slug];
  if (!m) throw new Error(`Missing media for ${seed.slug}. Run: node scripts/build-media.ts`);
  return {
    ...seed,
    media: m,
    movementInfo: movements[seed.movement],
    accent: pickAccent(m.palette, movements[seed.movement].color),
    life: (() => {
      const [born, died] = (seed.artistLife.match(/\d{4}/g) ?? []).map(Number);
      return { born, died };
    })(),
    wikipediaUrl: `https://en.wikipedia.org/wiki/${encodeURIComponent(seed.wikipediaTitle.replace(/ /g, "_"))}`
  };
});

const bySlug = new Map(artworks.map((a) => [a.slug, a]));
export const getArtwork = (slug: string) => bySlug.get(slug);

export const chronological = [...artworks].sort((a, b) => a.year - b.year);

/* ------------------------------------------------------------------ */
/* The daily schedule                                                  */
/* ------------------------------------------------------------------ */

/** Edition No. 1 went out on 1 November 2026 (UTC). */
const EPOCH = Date.UTC(2026, 10, 1);
const DAY = 86_400_000;

export function todayDay(now = new Date()) {
  const utc = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
  return Math.max(0, Math.floor((utc - EPOCH) / DAY));
}

export function dateForDay(day: number) {
  return new Date(EPOCH + day * DAY);
}

export function dateKey(day: number) {
  return dateForDay(day).toISOString().slice(0, 10);
}

export function dayFromKey(key: string): number | null {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(key)) return null;
  const t = Date.parse(`${key}T00:00:00Z`);
  if (Number.isNaN(t)) return null;
  const d = Math.round((t - EPOCH) / DAY);
  return d >= 0 ? d : null;
}

function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffled<T>(items: T[], seed: number) {
  const rand = mulberry32(seed);
  const out = [...items];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

const cycleCache = new Map<number, Artwork[]>();
function cycleOrder(cycle: number) {
  let order = cycleCache.get(cycle);
  if (!order) {
    order = shuffled(artworks, 1889 + cycle * 7919);
    // never show the same work two days running across a cycle boundary
    if (cycle > 0) {
      const prev = cycleOrder(cycle - 1);
      if (order[0].slug === prev[prev.length - 1].slug) [order[0], order[1]] = [order[1], order[0]];
    }
    cycleCache.set(cycle, order);
  }
  return order;
}

export function artworkForDay(day: number) {
  const n = artworks.length;
  return cycleOrder(Math.floor(day / n))[day % n];
}

export type Edition = { day: number; number: number; key: string; date: Date; artwork: Artwork };

export function edition(day: number): Edition {
  return { day, number: day + 1, key: dateKey(day), date: dateForDay(day), artwork: artworkForDay(day) };
}

/** Most recent edition (up to `upTo`) that featured this artwork, if any */
export function lastEditionOf(slug: string, upTo = todayDay()): Edition | null {
  for (let d = upTo; d >= 0 && d > upTo - artworks.length * 2; d--) {
    if (artworkForDay(d).slug === slug) return edition(d);
  }
  return null;
}

/* ------------------------------------------------------------------ */
/* Learning helpers                                                    */
/* ------------------------------------------------------------------ */

export function relatedWorks(artwork: Artwork, count = 4) {
  const same = artworks.filter((a) => a.slug !== artwork.slug && a.movement === artwork.movement);
  const near = chronological
    .filter((a) => a.slug !== artwork.slug && a.movement !== artwork.movement)
    .sort((a, b) => Math.abs(a.year - artwork.year) - Math.abs(b.year - artwork.year));
  return [...same, ...near].slice(0, count);
}

function pickDistinct(correct: string, pool: string[], seed: number, count = 3) {
  const unique = [...new Set(pool.filter((p) => p !== correct))];
  return shuffled(unique, seed).slice(0, count);
}

function withShuffledOptions(question: string, correct: string, wrong: string[], seed: number, explanation: string): Quiz {
  const options = shuffled([correct, ...wrong], seed);
  return { question, options, answer: options.indexOf(correct), explanation };
}

/** One hand-written question plus two generated from the collection */
export function quizFor(artwork: Artwork): Quiz[] {
  const seed = artwork.slug.split("").reduce((s, c) => s * 31 + c.charCodeAt(0), 7) >>> 0;
  const movementNames = Object.values(movements).map((m) => m.name);
  const cities = artworks.map((a) => a.city);

  return [
    artwork.quiz,
    withShuffledOptions(
      "Which movement or school does this work belong to?",
      artwork.movementInfo.name,
      pickDistinct(artwork.movementInfo.name, movementNames, seed + 1),
      seed + 2,
      `${artwork.movementInfo.name} (${artwork.movementInfo.span}). ${artwork.movementInfo.blurb}`
    ),
    withShuffledOptions(
      "In which city can you see it today?",
      artwork.city,
      pickDistinct(artwork.city, cities, seed + 3),
      seed + 4,
      artwork.museum.startsWith("Many")
        ? `It's a print, so there are many copies. ${artwork.museum.replace("Many impressions survive, incl.", "One is at")}, ${artwork.city}.`
        : `It's at the ${artwork.museum}, ${artwork.city}.`
    )
  ];
}

export function centuryLabel(year: number) {
  const c = Math.floor(year / 100) + 1;
  const suffix = c === 1 ? "st" : c === 2 ? "nd" : c === 3 ? "rd" : "th";
  return `${c}${suffix} century`;
}

export const TIMELINE_START = 1400;
export const TIMELINE_END = 1925;
