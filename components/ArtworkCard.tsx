"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { FavoriteButton } from "@/components/FavoriteButton";
import type { Artwork } from "@/lib/artwork";

type ArtworkCardProps = {
  artwork: Artwork;
  isFavorite: boolean;
  favoriteCount: number;
  onFavoriteToggle: () => void;
};

export function ArtworkCard({
  artwork,
  isFavorite,
  favoriteCount,
  onFavoriteToggle
}: ArtworkCardProps) {
  const [imageUnavailable, setImageUnavailable] = useState(!artwork.imageUrl);

  useEffect(() => {
    setImageUnavailable(!artwork.imageUrl);
  }, [artwork.id, artwork.imageUrl]);

  const heroDescription = getHeroDescription(artwork.whyItMatters);

  return (
    <article className="relative mx-auto mt-8 max-w-[1380px] sm:mt-10">
      {artwork.imageUrl ? (
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2.25rem]">
          <Image
            fill
            priority
            unoptimized
            alt=""
            aria-hidden="true"
            className="scale-110 object-cover opacity-22 blur-[120px] saturate-[0.85]"
            sizes="100vw"
            src={artwork.imageUrl}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.72),rgba(255,255,255,0.92)_34%,rgba(255,255,255,0.98))]" />
        </div>
      ) : null}
      <div className="pointer-events-none absolute -left-16 top-24 h-72 w-72 rounded-full bg-white/75 blur-[110px]" />
      <div className="pointer-events-none absolute right-0 top-10 h-80 w-80 rounded-full bg-black/[0.06] blur-[140px]" />
      <div className="pointer-events-none absolute bottom-12 left-1/2 h-48 w-72 -translate-x-1/2 rounded-full bg-white/60 blur-[120px]" />

      <section className="relative flex min-h-[calc(100vh-6rem)] items-center justify-center">
        <div className="group relative w-full max-w-[1080px] rounded-[2.1rem] border border-white/55 bg-white/[0.34] p-4 shadow-[0_45px_120px_rgba(17,17,17,0.18)] backdrop-blur-[26px] transition duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_55px_140px_rgba(17,17,17,0.2)] sm:p-6 lg:p-7">
          <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.02fr)_340px] lg:items-center">
            {imageUnavailable ? (
              <div className="flex min-h-[56vh] w-full flex-col items-center justify-center rounded-[1.65rem] border border-white/45 bg-white/[0.5] px-8 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] sm:min-h-[62vh] lg:min-h-[68vh]">
                <span className="font-display text-3xl text-foreground sm:text-4xl">
                  Image currently unavailable
                </span>
                <p className="mt-4 max-w-md text-sm leading-7 text-muted sm:text-base">
                  The artwork profile is still worth exploring, so the
                  educational notes and metadata remain available even if the
                  image does not load.
                </p>
              </div>
            ) : (
              <div className="rounded-[1.7rem] border border-white/50 bg-white/[0.58] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.75),0_18px_45px_rgba(17,17,17,0.08)] sm:p-5 lg:p-6">
                <div className="relative min-h-[56vh] sm:min-h-[62vh] lg:min-h-[68vh]">
                  <Image
                    fill
                    priority
                    unoptimized
                    alt={artwork.imageAlt}
                    className="object-contain transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    onError={() => setImageUnavailable(true)}
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    src={artwork.imageUrl ?? ""}
                  />
                </div>
              </div>
            )}

            <div className="flex h-full flex-col justify-between rounded-[1.7rem] border border-white/40 bg-white/[0.18] px-4 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.45)] sm:px-5 sm:py-6">
              <div>
                <div className="flex flex-wrap items-center gap-2 text-[11px] font-medium uppercase tracking-[0.15em] text-black/55">
                  <span>Featured painting</span>
                  {artwork.movement ? (
                    <>
                      <span aria-hidden="true" className="text-black/25">
                        /
                      </span>
                      <span>{artwork.movement}</span>
                    </>
                  ) : null}
                </div>

                <h1 className="mt-5 font-display text-[2.45rem] leading-[0.95] tracking-[-0.03em] text-foreground sm:text-[3rem] lg:text-[3.4rem]">
                  {artwork.title}
                </h1>
                <p className="mt-4 text-base leading-7 text-black/66">
                  <span className="text-foreground">{artwork.artist}</span>
                  <span className="mx-2 text-black/25">&middot;</span>
                  {artwork.date}
                </p>
                <p className="mt-6 max-w-[26rem] text-[15px] leading-7 text-black/72">
                  {heroDescription}
                </p>

                <dl className="mt-8 space-y-4 border-t border-black/8 pt-5">
                  <MetadataItem label="Medium" value={artwork.medium} />
                  {artwork.movement ? (
                    <MetadataItem label="Movement" value={artwork.movement} />
                  ) : null}
                  {artwork.location ? (
                    <MetadataItem label="Origin" value={artwork.location} />
                  ) : null}
                </dl>
              </div>

              <div className="mt-8">
                <FavoriteButton
                  active={isFavorite}
                  count={favoriteCount}
                  onClick={onFavoriteToggle}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}

function getHeroDescription(description: string) {
  const match = description.match(/[^.!?]+[.!?]+/);

  return match?.[0]?.trim() ?? description;
}

function MetadataItem({
  label,
  value
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      <dt className="text-[11px] font-medium uppercase tracking-[0.15em] text-black/42">
        {label}
      </dt>
      <dd className="text-sm leading-6 text-foreground">{value}</dd>
    </div>
  );
}
