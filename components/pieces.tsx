import Link from "next/link";
import type { ReactNode } from "react";

import { movements } from "@/data/movements";

import { type Artwork, chronological, TIMELINE_END, TIMELINE_START } from "@/lib/collection";
import { srcSet } from "@/lib/media";

export function SectionHead({ title, note, accent = "var(--color-terracotta)" }: { title: ReactNode; note?: ReactNode; accent?: string }) {
  return (
    <div className="mb-8 flex flex-wrap items-end justify-between gap-x-6 gap-y-2 sm:mb-10">
      <h2 className="display relative pb-3 text-[2.6rem] text-black sm:text-[3.6rem]">
        {title}
        <svg viewBox="0 0 120 10" preserveAspectRatio="none" className="absolute bottom-0 left-0 h-2.5 w-28" aria-hidden="true">
          <path d="M2 6 C 20 1, 34 9, 52 5 S 86 2, 118 5" fill="none" stroke={accent} strokeWidth="3" strokeLinecap="round" />
        </svg>
      </h2>
      {note && <p className="hand pb-2 text-xl text-ink-2">{note}</p>}
    </div>
  );
}

export function Thumb({ artwork, className = "", sizes = "320px" }: { artwork: Artwork; className?: string; sizes?: string }) {
  return (
    <img
      src={artwork.media.src["500"]}
      srcSet={srcSet(artwork.media)}
      sizes={sizes}
      alt={artwork.imageAlt}
      width={artwork.media.width}
      height={artwork.media.height}
      loading="lazy"
      decoding="async"
      className={className}
      style={{ backgroundColor: artwork.media.palette[0] }}
    />
  );
}

/** A work hung in a gilded frame, with its caption below */
export function ArtTile({
  artwork,
  href,
  kicker,
  className = ""
}: {
  artwork: Artwork;
  href?: string;
  index?: number;
  kicker?: ReactNode;
  className?: string;
}) {
  return (
    <Link href={href ?? `/artwork/${artwork.slug}`} className={`group block ${className}`}>
      <div className="relative flex aspect-[4/5] items-center justify-center [container-type:size]">
        <div className="frame frame-sm transition-transform duration-500 ease-[var(--ease-out-soft)] group-hover:-translate-y-1.5">
          <Thumb
            artwork={artwork}
            sizes="(min-width: 1024px) 260px, 45vw"
            className="block max-h-[calc(100cqh-18px)] max-w-[calc(100cqw-18px)] object-contain"
          />
        </div>
      </div>
      <div className="mt-4 px-1">
        {kicker && <div className="hand text-lg leading-none text-ink-2">{kicker}</div>}
        <h3 className="display mt-1.5 text-[1.4rem] leading-tight text-black group-hover:underline group-hover:decoration-1 group-hover:underline-offset-4">
          {artwork.title}
        </h3>
        <p className="mt-0.5 text-[0.8125rem] text-ink-3">
          {artwork.artist}, {artwork.date}
        </p>
      </div>
    </Link>
  );
}

/** The painting next to a 170 cm person, to scale */
export function SizeChart({ artwork }: { artwork: Artwork }) {
  const m = artwork.dimensions.match(/([\d.]+)\s*×\s*([\d.]+)/);
  if (!m) return null;
  const h = parseFloat(m[1]);
  const w = parseFloat(m[2]);
  const person = 170;
  const tall = Math.max(h, person);
  const H = 160; // drawing height in svg units
  const k = H / tall;
  const pw = 46 * k;
  const gap = Math.max(14, 30 * k);
  const ar = artwork.media.width / artwork.media.height;
  // use the image's true proportions, scaled to the listed height
  const rw = Math.max(h * ar, 1) * k;
  const rh = h * k;
  const W = rw + gap + pw;
  const r2 = (n: number) => Math.round(n * 10) / 10;
  return (
    <figure>
      <svg viewBox={`-4 -4 ${r2(W + 8)} ${H + 26}`} className="h-auto max-h-56 w-full" role="img" aria-label={`${artwork.title} is ${artwork.dimensions}, shown next to a 170 cm person`}>
        <line x1="-4" x2={r2(W + 4)} y1={H} y2={H} stroke="#111" strokeWidth="1" />
        <rect x="0" y={r2(H - rh)} width={r2(rw)} height={r2(rh)} fill="#c9a24a" />
        <image href={artwork.media.src["500"]} x="1.5" y={r2(H - rh + 1.5)} width={r2(Math.max(rw - 3, 1))} height={r2(Math.max(rh - 3, 1))} preserveAspectRatio="xMidYMid slice" />
        <g transform={`translate(${r2(rw + gap)} ${r2(H - person * k)}) scale(${r2(k * 100) / 100})`} fill="#111">
          <circle cx="23" cy="13" r="12" />
          <path d="M8 34 Q23 26 38 34 L44 92 L36 94 L34 64 L33 168 L25 168 L23 108 L21 168 L13 168 L12 64 L10 94 L2 92 Z" />
        </g>
        <text x="0" y={H + 18} fontSize="11" fill="#5a5148" fontFamily="var(--font-instrument), sans-serif">
          {artwork.dimensions}
        </text>
        <text x={r2(rw + gap + pw / 2)} y={H + 18} fontSize="12" fill="#5a5148" textAnchor="middle" fontFamily="var(--font-caveat), cursive">
          you, 170 cm
        </text>
      </svg>
    </figure>
  );
}

/** Where a work sits among everything else in the collection */
export function Timeline({ current }: { current?: Artwork }) {
  const span = TIMELINE_END - TIMELINE_START;
  const pos = (y: number) => `${((y - TIMELINE_START) / span) * 100}%`;
  const centuries = [1400, 1500, 1600, 1700, 1800, 1900];
  // stack dots that are close together so they don't overlap
  const rows: number[] = [];
  const lastInRow: number[] = [];
  for (const a of chronological) {
    let r = 0;
    while (lastInRow[r] !== undefined && a.year - lastInRow[r] < 9) r++;
    lastInRow[r] = a.year;
    rows.push(r);
  }

  const maxRow = Math.max(...rows);
  return (
    <div className="relative px-5 pt-12">
      {current && (
        <div className="absolute top-0 z-20 -translate-x-1/2" style={{ left: pos(current.year) }}>
          <div className="hand whitespace-nowrap rounded-full bg-ink px-3 py-0.5 text-lg leading-tight text-cream">{current.year}</div>
          <div className="mx-auto h-5 w-px bg-ink" />
        </div>
      )}
      <div className="relative" style={{ height: 52 + maxRow * 13 }}>
        <div className="absolute inset-x-0 top-[22px] h-[2px] rounded-full bg-ink/20" />
        {centuries.map((c) => (
          <div key={c} className="absolute top-0" style={{ left: pos(c) }}>
            <div className="-translate-x-1/2 font-mono text-[0.6875rem] leading-none text-ink-3">{c}</div>
            <div className="mt-1.5 h-4 w-px bg-ink/30" />
          </div>
        ))}
        {chronological.map((a, i) => {
          const isCurrent = current?.slug === a.slug;
          return (
            <Link
              key={a.slug}
              href={`/artwork/${a.slug}`}
              title={`${a.title} (${a.date})`}
              aria-label={`${a.title}, ${a.date}`}
              className={`absolute -translate-x-1/2 rounded-full transition-transform duration-200 hover:scale-150 ${
                isCurrent ? "z-10 h-4 w-4 ring-[3px] ring-ink ring-offset-2 ring-offset-paper" : "h-2.5 w-2.5"
              }`}
              style={{ left: pos(a.year), top: isCurrent ? 15 : 18 + rows[i] * 13, background: a.movementInfo.color }}
            />
          );
        })}
      </div>
    </div>
  );
}

export function PaletteDabs({ colors, className = "" }: { colors: string[]; className?: string }) {
  const rot = [-18, 12, -6, 22, -24, 8];
  return (
    <div className={`grid w-max grid-cols-3 gap-x-3 gap-y-2.5 ${className}`} aria-label="Colour palette">
      {colors.slice(0, 6).map((c, i) => (
        <span
          key={c + i}
          className="block h-[14px] w-[30px] rounded-[50%] shadow-[inset_0_-2px_3px_rgb(0_0_0/0.12),inset_0_2px_2px_rgb(255_255_255/0.25)]"
          style={{ background: c, transform: `rotate(${rot[i]}deg)` }}
          title={c}
        />
      ))}
    </div>
  );
}

export function formatEditionDate(d: Date, style: "long" | "short" = "long") {
  return d.toLocaleDateString("en-GB", {
    timeZone: "UTC",
    weekday: style === "long" ? "long" : "short",
    day: "numeric",
    month: style === "long" ? "long" : "short"
  });
}

const spanYears = (span: string) => {
  const ys = (span.match(/\d{4}/g) ?? []).map(Number);
  return { from: ys[0], to: ys[1] ?? ys[0] };
};

/** Every movement in the collection as a bar through time */
export function MovementChart({ current }: { current?: string }) {
  const list = Object.values(movements)
    .map((m) => ({ ...m, ...spanYears(m.span) }))
    .sort((a, b) => a.from - b.from);
  const span = TIMELINE_END - TIMELINE_START;
  const pct = (y: number) => ((y - TIMELINE_START) / span) * 100;
  return (
    <div className="grid grid-cols-[9.5rem_1fr] gap-x-3">
      <div />
      <div className="relative mb-2 h-4">
        {[1400, 1500, 1600, 1700, 1800, 1900].map((c) => (
          <span key={c} className="absolute -translate-x-1/2 font-mono text-[0.6875rem] text-ink-3" style={{ left: `${pct(c)}%` }}>
            {c}
          </span>
        ))}
      </div>
      {list.map((m) => {
        const on = m.id === current;
        return (
          <div key={m.id} className="contents">
            <div className={`truncate py-[3px] text-right text-[0.8125rem] leading-5 ${on ? "font-semibold text-black" : "text-ink-3"}`}>{m.name}</div>
            <div className="relative py-[3px]">
              {[1400, 1500, 1600, 1700, 1800, 1900].map((c) => (
                <span key={c} className="absolute inset-y-0 border-l border-dashed border-black/10" style={{ left: `${pct(c)}%` }} />
              ))}
              <div
                className={`relative h-5 rounded-full ${on ? "ring-2 ring-black ring-offset-1" : "opacity-60"}`}
                style={{ marginLeft: `${pct(m.from)}%`, width: `${Math.max(pct(m.to) - pct(m.from), 1.5)}%`, background: m.color }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
