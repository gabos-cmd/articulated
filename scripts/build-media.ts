/**
 * Resolves images, palettes and artist bios for every artwork seed and writes
 * data/media.json. Run locally (macOS, uses `sips`) whenever seeds change:
 *   node scripts/build-media.ts
 */
import { execFileSync } from "node:child_process";
import { mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

import { seeds } from "../data/seeds.ts";

const UA = "ArticulatedBuild/2.0 (daily art learning site; media resolver)";
const WIDTHS = [500, 960, 1920] as const;

type Media = {
  file: string;
  width: number;
  height: number;
  src: Record<string, string>;
  pageUrl: string;
  palette: string[];
  artistBio: string;
  artistUrl: string;
};

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

/** polite fetch: spaced out, retries on 429/5xx with backoff */
async function get(url: string) {
  for (let attempt = 0; ; attempt++) {
    await sleep(700);
    const res = await fetch(url, { headers: { "User-Agent": UA } });
    if (res.ok) return res;
    if (attempt < 6 && (res.status === 429 || res.status >= 500)) {
      await sleep(2000 * 2 ** attempt);
      continue;
    }
    throw new Error(`${url} -> ${res.status}`);
  }
}

async function api(host: string, params: Record<string, string>) {
  const qs = new URLSearchParams({ format: "json", formatversion: "2", ...params });
  return (await get(`https://${host}/w/api.php?${qs}`)).json() as Promise<any>;
}

async function pageImage(title: string): Promise<string> {
  const j = await api("en.wikipedia.org", { action: "query", redirects: "1", prop: "pageimages", piprop: "name", titles: title });
  const name = j.query.pages[0]?.pageimage;
  if (!name) throw new Error(`no page image for ${title}`);
  return `File:${name}`;
}

async function imageInfo(file: string, width: number) {
  const j = await api("commons.wikimedia.org", { action: "query", prop: "imageinfo", iiprop: "url|size", iiurlwidth: String(width), titles: file });
  const ii = j.query.pages[0]?.imageinfo?.[0];
  if (!ii) throw new Error(`no imageinfo for ${file}`);
  return ii as { url: string; thumburl?: string; width: number; height: number; descriptionurl: string };
}

async function artistBio(title: string) {
  const j = await api("en.wikipedia.org", { action: "query", redirects: "1", prop: "extracts|info", inprop: "url", explaintext: "1", exintro: "1", exsentences: "3", titles: title });
  const page = j.query.pages[0];
  const text = String(page?.extract ?? "")
    .replace(/\s*\([^()]*(?:\([^()]*\)[^()]*)*\)/g, "") // drop parentheticals (pronunciations, dates)
    .replace(/\s+([,.;])/g, "$1")
    .replace(/\s{2,}/g, " ")
    .trim();
  return { text, url: String(page?.fullurl ?? `https://en.wikipedia.org/wiki/${encodeURIComponent(title)}`) };
}

/** tiny k-means over pixels of a 64px BMP produced by sips */
function palette(bmpPath: string, k = 6): string[] {
  const buf = readFileSync(bmpPath);
  const offset = buf.readUInt32LE(10);
  const w = buf.readInt32LE(18);
  const h = Math.abs(buf.readInt32LE(22));
  const bpp = buf.readUInt16LE(28) / 8;
  const row = Math.ceil((w * bpp) / 4) * 4;
  const px: number[][] = [];
  for (let y = 0; y < h; y++)
    for (let x = 0; x < w; x++) {
      const i = offset + y * row + x * bpp;
      px.push([buf[i + 2], buf[i + 1], buf[i]]);
    }
  // init with evenly spaced pixels sorted by luminance for determinism
  const sorted = [...px].sort((a, b) => lum(a) - lum(b));
  let c = Array.from({ length: k }, (_, i) => sorted[Math.floor(((i + 0.5) / k) * sorted.length)].slice());
  let counts = new Array(k).fill(0);
  for (let it = 0; it < 20; it++) {
    const sums = c.map(() => [0, 0, 0]);
    counts = new Array(k).fill(0);
    for (const p of px) {
      let best = 0, bd = Infinity;
      c.forEach((cc, j) => {
        const d = (p[0] - cc[0]) ** 2 + (p[1] - cc[1]) ** 2 + (p[2] - cc[2]) ** 2;
        if (d < bd) { bd = d; best = j; }
      });
      counts[best]++;
      sums[best][0] += p[0]; sums[best][1] += p[1]; sums[best][2] += p[2];
    }
    c = c.map((cc, j) => (counts[j] ? sums[j].map((s) => s / counts[j]) : cc));
  }
  return c
    .map((cc, j) => ({ cc, n: counts[j] }))
    .filter((x) => x.n > 0)
    .sort((a, b) => b.n - a.n)
    .map(({ cc }) => "#" + cc.map((v) => Math.round(v).toString(16).padStart(2, "0")).join(""));
}
const lum = (p: number[]) => 0.2126 * p[0] + 0.7152 * p[1] + 0.0722 * p[2];

const tmp = mkdtempSync(join(tmpdir(), "articulated-media-"));
const out: Record<string, Media> = {};

for (const seed of seeds) {
  const file = seed.commonsFile ?? (await pageImage(seed.wikipediaTitle));
  const src: Record<string, string> = {};
  let info: Awaited<ReturnType<typeof imageInfo>> | null = null;
  for (const w of WIDTHS) {
    info = await imageInfo(file, w);
    src[w] = info.thumburl && info.width > w ? info.thumburl : info.url;
  }
  const jpg = join(tmp, `${seed.slug}.jpg`);
  const bmp = join(tmp, `${seed.slug}.bmp`);
  const img = await get(src[500]);
  writeFileSync(jpg, Buffer.from(await img.arrayBuffer()));
  execFileSync("sips", ["-s", "format", "bmp", "-z", "64", "64", jpg, "--out", bmp], { stdio: "ignore" });
  const bio = await artistBio(seed.artistWikipediaTitle);
  out[seed.slug] = {
    file,
    width: info!.width,
    height: info!.height,
    src,
    pageUrl: info!.descriptionurl,
    palette: palette(bmp),
    artistBio: bio.text,
    artistUrl: bio.url
  };
  console.log("✓", seed.slug, file, out[seed.slug].palette.join(" "));
}

writeFileSync(new URL("../data/media.json", import.meta.url), JSON.stringify(out, null, 2) + "\n");
console.log(`wrote ${Object.keys(out).length} entries`);
