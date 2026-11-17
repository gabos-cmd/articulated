import Link from "next/link";
import type { ReactNode } from "react";

import { type Artwork, chronological, TIMELINE_END, TIMELINE_START } from "@/lib/collection";
import { srcSet } from "@/lib/media";

export function SectionHead({
  numeral,
  eyebrow,
  title,
  aside
}: {
  numeral: string;
  eyebrow: string;
  title: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <div className="mb-8 flex flex-wrap items-end justify-between gap-4 sm:mb-10">
      <div>
        <p className="eyebrow flex items-center gap-3 text-ink-3">
          <span className="numeral text-base normal-case tracking-normal text-ink-2">{numeral}</span>
          <span className="h-px w-8 bg-ink/25" />
          {eyebrow}
        </p>
        <h2 className="display mt-3 text-[2.25rem] sm:text-[3.25rem]">{title}</h2>
      </div>
      {aside}
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

const blockColors = ["var(--color-sky)", "var(--color-ochre)", "var(--color-rose)", "var(--color-moss)", "var(--color-lilac)", "var(--color-terracotta)"];

/** Collage tile: the painting pinned onto a block of flat colour */
export function ArtTile({
  artwork,
  href,
  index = 0,
  kicker,
  className = ""
}: {
  artwork: Artwork;
  href?: string;
  index?: number;
  kicker?: ReactNode;
  className?: string;
}) {
  const color = blockColors[index % blockColors.length];
  const tilt = [-1.6, 1.2, -0.6, 1.8, -1.2, 0.8][index % 6];
  return (
    <Link href={href ?? `/artwork/${artwork.slug}`} className={`group block ${className}`}>
      <div className="relative aspect-[4/5]">
        <div
          className="absolute inset-[10%_6%_6%_12%] transition-transform duration-500 ease-[var(--ease-out-soft)] group-hover:translate-x-1 group-hover:translate-y-1"
          style={{ background: color }}
        />
        <div
          className="absolute inset-[4%_10%_12%_6%] flex items-center justify-center transition-transform duration-500 ease-[var(--ease-out-soft)] group-hover:-translate-y-1 group-hover:rotate-0"
          style={{ transform: `rotate(${tilt}deg)` }}
        >
          <Thumb artwork={artwork} sizes="(min-width: 1024px) 280px, 45vw" className="max-h-full max-w-full object-contain shadow-[0_14px_30px_-14px_rgb(42_37_32/0.55)]" />
        </div>
      </div>
      <div className="mt-3 px-1">
        {kicker && <div className="hand text-lg leading-none text-ink-2">{kicker}</div>}
        <h3 className="display mt-1 text-[1.25rem] leading-tight group-hover:underline group-hover:decoration-1 group-hover:underline-offset-4">{artwork.title}</h3>
        <p className="mt-0.5 text-[0.8125rem] text-ink-3">
          {artwork.artist}, {artwork.date}
        </p>
      </div>
    </Link>
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
