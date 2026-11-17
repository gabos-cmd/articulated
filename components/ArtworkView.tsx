import Link from "next/link";
import type { CSSProperties } from "react";

import { CopySwatch, SaveButton, ShareButton, VisitTracker } from "@/components/client";
import { SpotEye, SpotSun } from "@/components/illustrations";
import { Painting } from "@/components/Painting";
import { ArtTile, MovementChart, PaletteDabs, SectionHead, SizeChart, Timeline } from "@/components/pieces";
import { Quiz } from "@/components/Quiz";
import { type Artwork, quizFor, relatedWorks } from "@/lib/collection";

export type EditionMeta = {
  number?: number;
  dateLabel?: string;
  dateKey?: string;
  kind: "today" | "past" | "collection";
  prev?: { href: string; label: string } | null;
  next?: { href: string; label: string } | null;
};

const noteTints = ["var(--color-sky)", "var(--color-ochre)", "var(--color-rose)"];

export function ArtworkView({ artwork, meta, path }: { artwork: Artwork; meta: EditionMeta; path: string }) {
  const { media } = artwork;
  const [c0] = media.palette;
  const accent = artwork.accent;
  const age = artwork.year - artwork.life.born;
  const aspect = media.width / media.height;
  const questions = quizFor(artwork);
  const related = relatedWorks(artwork, 4);
  const lifePct = Math.min(100, Math.max(0, ((artwork.year - artwork.life.born) / (artwork.life.died - artwork.life.born)) * 100));

  return (
    <main>
      {meta.kind === "today" && meta.dateKey && <VisitTracker dateKey={meta.dateKey} slug={artwork.slug} />}

      {/* Hero: the sketchbook spread on an ambient wash of the work */}
      <section className="px-2 pt-[calc(env(safe-area-inset-top)+5.25rem)] sm:px-5">
        <div className="relative isolate mx-auto max-w-[1320px] overflow-hidden rounded-[1.75rem] sm:rounded-[2.75rem]">
          <div aria-hidden className="absolute inset-0 -z-10" style={{ background: `linear-gradient(160deg, ${accent}, ${c0})` }}>
            <img src={media.src["500"]} alt="" className="ambient absolute inset-0 h-full w-full object-cover opacity-85 blur-[56px] saturate-[1.8]" />
            <div className="absolute -left-[10%] -top-[30%] h-[80%] w-[55%] rounded-full opacity-60 blur-[90px]" style={{ background: accent }} />
            <div className="absolute -bottom-[30%] -right-[5%] h-[80%] w-[50%] rounded-full opacity-50 blur-[90px]" style={{ background: artwork.movementInfo.color }} />
            <div className="absolute inset-0 bg-[radial-gradient(90%_70%_at_50%_0%,rgb(255_255_255/0.25),transparent_70%),linear-gradient(180deg,transparent_55%,rgb(245_239_227/0.5))]" />
          </div>

          <div className="px-3 pb-4 pt-8 sm:px-10 sm:pb-8 sm:pt-12 lg:px-14">
            <div
              className="rise relative grid overflow-hidden rounded-[1.1rem] shadow-[0_40px_80px_-40px_rgb(30_22_14/0.65),0_2px_6px_rgb(30_22_14/0.12)] md:h-[min(76vh,760px)] md:min-h-[540px] md:grid-cols-[minmax(300px,0.78fr)_1.5fr]"
              style={{ "--ar": aspect } as CSSProperties}
            >
              {/* right page (first on mobile): the work, framed */}
              <div className="relative order-1 bg-white md:order-2">
                <div className="relative flex items-center justify-center px-5 py-8 sm:p-10 md:absolute md:inset-[7%_8%] md:p-0 md:[container-type:size]">
                  <div className="frame frame-lg w-full md:w-auto">
                    <div
                      className="w-full md:w-[min(calc(100cqw-40px),calc((100cqh-40px)*var(--ar)))]"
                      style={{ aspectRatio: `${media.width} / ${media.height}` }}
                    >
                      <Painting media={media} alt={artwork.imageAlt} priority interactive sizes="(min-width: 768px) 60vw, 92vw" className="h-full w-full" />
                    </div>
                  </div>
                </div>
                <p className="hand absolute bottom-3 right-5 hidden text-base text-ink-3 md:block">hover to look closer · click to open</p>
              </div>

              {/* left page: notes */}
              <div className="paper relative order-2 flex flex-col px-6 pb-8 pt-7 sm:px-9 md:order-1 md:pt-9">
                <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 hidden w-10 bg-[linear-gradient(90deg,transparent,rgb(60_45_30/0.10))] md:block" />

                <p className="hand text-[1.35rem] leading-none">
                  <span className="border-b border-ink/60 pb-0.5">
                    {meta.number ? `No. ${meta.number}` : artwork.movementInfo.name}
                    {meta.dateLabel ? ` · ${meta.dateLabel}` : ""}
                  </span>
                </p>

                <PaletteDabs colors={media.palette} className="mt-9 md:mt-auto" />

                <div className="mt-8 md:mt-auto">
                  <h1 className="display text-balance text-[3rem] text-black sm:text-[3.9rem] lg:text-[4.5rem]">{artwork.title}</h1>
                  <p className="prose-serif mt-3 text-[1.2rem] italic text-ink-2">
                    {artwork.artist}, {artwork.date}
                  </p>
                  <p className="prose-serif mt-5 max-w-[34ch] text-[1.0625rem] leading-relaxed text-ink">{artwork.lede}</p>
                </div>

                <p className="hand mt-8 text-[1.15rem] leading-snug text-ink-2 md:mt-auto">
                  {artwork.medium.toLowerCase()}, {artwork.dimensions}
                  <br />
                  {artwork.museum}, {artwork.city}
                </p>
              </div>
            </div>

            <div className="rise mt-4 flex flex-wrap items-center justify-between gap-3 sm:mt-6" style={{ "--d": "200ms" } as CSSProperties}>
              <div className="flex flex-wrap gap-2">
                <SaveButton slug={artwork.slug} />
                <ShareButton title={`${artwork.title} by ${artwork.artist}`} path={path} />
              </div>
              <div className="flex gap-2">
                {meta.prev && (
                  <Link href={meta.prev.href} className="btn bg-white text-black shadow-sm hover:bg-white/80">
                    <span aria-hidden>←</span> {meta.prev.label}
                  </Link>
                )}
                {meta.next && (
                  <Link href={meta.next.href} className="btn bg-white text-black shadow-sm hover:bg-white/80">
                    {meta.next.label} <span aria-hidden>→</span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1180px] px-5 sm:px-10">
        {/* Why it matters + label + scale */}
        <section className="grid gap-12 pt-24 sm:pt-32 lg:grid-cols-[1fr_340px] lg:gap-20">
          <div>
            <SectionHead title="Why it matters" accent={accent} />
            <p
              className="prose-serif text-[1.3rem] leading-[1.6] text-ink sm:text-[1.5rem] [&::first-letter]:float-left [&::first-letter]:mr-3 [&::first-letter]:mt-1 [&::first-letter]:font-display [&::first-letter]:text-[5.2rem] [&::first-letter]:leading-[0.78] [&::first-letter]:text-[var(--drop)]"
              style={{ "--drop": accent } as CSSProperties}
            >
              {artwork.story}
            </p>
          </div>
          <aside className="space-y-4 lg:pt-6">
            <div className="rounded-sm border border-black/10 bg-white p-6 shadow-[0_18px_40px_-24px_rgb(42_37_32/0.35)]">
              <p className="display text-[1.5rem] leading-tight text-black">{artwork.artist}</p>
              <p className="text-sm text-ink-2">
                {artwork.artistOrigin}, {artwork.artistLife}
              </p>
              <div className="rule-dotted my-4" />
              <p className="prose-serif text-[1.15rem] italic leading-snug">{artwork.title}</p>
              <p className="text-sm text-ink-2">{artwork.date}</p>
              <dl className="mt-4 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1.5 text-[0.8125rem]">
                <dt className="text-ink-3">Medium</dt>
                <dd>{artwork.medium}</dd>
                <dt className="text-ink-3">Where</dt>
                <dd>
                  {artwork.museum}, {artwork.city}
                </dd>
                <dt className="text-ink-3">School</dt>
                <dd>{artwork.movementInfo.name}</dd>
              </dl>
              <div className="rule-dotted my-4" />
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-[0.8125rem]">
                <a className="link-underline" href={artwork.wikipediaUrl} target="_blank" rel="noreferrer">
                  Read more on Wikipedia ↗
                </a>
                <a className="link-underline text-ink-3" href={media.pageUrl} target="_blank" rel="noreferrer">
                  Image source ↗
                </a>
              </div>
            </div>
            <div className="rounded-sm border border-black/10 bg-white p-6">
              <p className="hand text-xl leading-none text-ink-2">how big is it?</p>
              <div className="mt-4">
                <SizeChart artwork={artwork} />
              </div>
            </div>
          </aside>
        </section>

        {/* Look closer */}
        <section className="pt-24 sm:pt-32">
          <SectionHead
            accent={accent}
            title={
              <>
                Look <em className="italic">closer</em>
              </>
            }
            note={
              <span className="flex items-center gap-3">
                <SpotEye className="h-10 w-16" /> three things to find
              </span>
            }
          />
          <div className="grid gap-4 md:grid-cols-3">
            {artwork.lookCloser.map((note, i) => (
              <article
                key={i}
                className="relative overflow-hidden rounded-[1.5rem] p-6 pb-7 sm:p-7"
                style={{ background: `color-mix(in oklab, ${noteTints[i]} 32%, white)` }}
              >
                <span className="numeral absolute right-5 top-1 text-[4.75rem] leading-none text-black/20">{i + 1}</span>
                <p className="hand text-xl text-ink-2">{["First, notice…", "Then…", "And finally…"][i]}</p>
                <p className="mt-3 text-[1rem] leading-relaxed text-ink">{note}</p>
              </article>
            ))}
          </div>

          <div className="mt-4 flex flex-col gap-6 rounded-[1.5rem] bg-black p-6 text-cream sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <p className="display text-[2rem] text-white">The palette</p>
              <p className="mt-1 max-w-sm text-[0.9375rem] text-cream/65">
                The six colours that cover the most of the picture, sampled from the image. Tap one to copy it.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {media.palette.map((hex) => (
                <div key={hex} className="flex flex-col items-center gap-1.5">
                  <span
                    className="block h-14 w-14 rounded-[42%_58%_50%_50%/55%_45%_55%_45%] shadow-[inset_0_-4px_8px_rgb(0_0_0/0.25),inset_0_3px_4px_rgb(255_255_255/0.25)] ring-1 ring-white/15 sm:h-16 sm:w-16"
                    style={{ background: hex }}
                  />
                  <CopySwatch hex={hex} className="text-white/60 hover:text-white" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The artist */}
        <section className="pt-24 sm:pt-32">
          <SectionHead title={artwork.artist} accent={accent} note={`${artwork.artistOrigin}, ${artwork.artistLife}`} />
          <div className="grid gap-4 lg:grid-cols-[1.25fr_1fr]">
            <div className={`rounded-[1.75rem] bg-[color-mix(in_oklab,var(--color-lilac)_28%,white)] p-7 sm:p-10 ${artwork.quote ? "" : "lg:col-span-2"}`}>
              <p className="prose-serif max-w-prose text-[1.15rem] leading-relaxed">{media.artistBio}</p>
              <a className="link-underline mt-5 inline-block text-[0.8125rem] text-ink-2" href={media.artistUrl} target="_blank" rel="noreferrer">
                From Wikipedia (CC BY-SA) ↗
              </a>

              <div className="mt-12">
                <div className="relative h-2 rounded-full bg-black/10">
                  <div className="absolute inset-y-0 left-0 rounded-full" style={{ width: `${lifePct}%`, background: accent }} />
                  <div className="absolute -top-9 -translate-x-1/2 text-center" style={{ left: `${Math.min(86, Math.max(14, lifePct))}%` }}>
                    <span className="hand whitespace-nowrap text-lg leading-none">this work, aged ~{age}</span>
                    <span className="mx-auto mt-1 block h-5 w-px bg-black" />
                  </div>
                </div>
                <div className="mt-2 flex justify-between font-mono text-[0.6875rem] text-ink-3">
                  <span>born {artwork.life.born}</span>
                  <span>died {artwork.life.died}</span>
                </div>
              </div>
            </div>
            {artwork.quote && (
              <figure className="flex flex-col justify-between rounded-[1.75rem] bg-black p-7 text-white sm:p-10">
                <span className="display text-[5.5rem] leading-[0.6] text-ochre">“</span>
                <blockquote className="display mt-2 text-[1.9rem] italic leading-[1.15] sm:text-[2.3rem]">{artwork.quote.text}</blockquote>
                <figcaption className="hand mt-6 text-xl text-white/65">— {artwork.quote.source}</figcaption>
              </figure>
            )}
          </div>
        </section>

        {/* The world around it */}
        <section className="pt-24 sm:pt-32">
          <SectionHead
            accent={accent}
            title={
              <>
                Meanwhile, <em className="italic">around {artwork.year}</em>
              </>
            }
            note={<SpotSun className="h-14 w-14" />}
          />
          <p className="prose-serif max-w-3xl text-[1.2rem] leading-relaxed text-ink-2 sm:text-[1.3rem]">{artwork.context}</p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {artwork.moments.map((m, i) => (
              <div key={i} className="rounded-[1.5rem] border border-black/[0.07] bg-white p-6">
                <span className="tag inline-block rounded-full px-2.5 py-1 text-ink" style={{ background: `color-mix(in oklab, ${noteTints[(i + 1) % 3]} 55%, white)` }}>
                  {m.label}
                </span>
                <p className="mt-4 text-[0.98rem] leading-relaxed">{m.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-[1.5rem] border border-black/[0.07] bg-white px-5 pb-6 pt-6 sm:px-8">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <p className="display text-[1.6rem] text-black">Where it sits in time</p>
              <p className="text-[0.8125rem] text-ink-3">Each dot is a work in the collection, coloured by movement.</p>
            </div>
            <div className="scrollbar-none -mx-2 mt-2 overflow-x-auto px-2">
              <div className="min-w-[640px]">
                <Timeline current={artwork} />
              </div>
            </div>
          </div>
        </section>

        {/* Quiz */}
        <section className="pt-24 sm:pt-32">
          <SectionHead title="Three questions" accent={accent} note="one minute, no pressure" />
          <div className="rounded-[2rem] p-3 sm:p-6" style={{ background: `color-mix(in oklab, ${accent} 16%, var(--color-paper))` }}>
            <Quiz slug={artwork.slug} questions={questions} />
          </div>
        </section>

        {/* Movement & related */}
        <section className="pt-24 sm:pt-32">
          <SectionHead title="Keep going" accent={accent} />
          <div className="grid grid-cols-[minmax(0,1fr)] gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)]">
            <div className="rounded-[1.5rem] p-6 sm:p-8" style={{ background: `color-mix(in oklab, ${artwork.movementInfo.color} 24%, white)` }}>
              <p className="hand text-xl leading-none text-ink-2">{artwork.movementInfo.span}</p>
              <p className="display mt-2 text-[2.4rem] leading-none text-black">{artwork.movementInfo.name}</p>
              <p className="mt-4 text-[1rem] leading-relaxed text-ink-2">{artwork.movementInfo.blurb}</p>
            </div>
            <div className="rounded-[1.5rem] border border-black/[0.07] bg-white px-5 py-6 sm:px-8">
              <div className="scrollbar-none -mx-2 overflow-x-auto px-2 pt-2">
                <div className="min-w-[520px]">
                  <MovementChart current={artwork.movement} />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
            {related.map((a) => (
              <ArtTile key={a.slug} artwork={a} kicker={a.movement === artwork.movement ? "same movement" : `from ${a.year}`} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
