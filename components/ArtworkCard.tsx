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
    <article className="relative mx-auto mt-8 max-w-[1280px] sm:mt-10">
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
        <div className="group relative w-full max-w-[1160px] rounded-[2.25rem] border border-white/60 bg-white/[0.42] p-4 shadow-[0_38px_110px_rgba(17,17,17,0.16)] backdrop-blur-[26px] transition duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_52px_135px_rgba(17,17,17,0.19)] sm:p-5 lg:p-6">
          <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/85 to-transparent" />
          <div className="overflow-hidden rounded-[1.85rem] border border-white/55 bg-white/[0.56] shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_18px_45px_rgba(17,17,17,0.08)]">
            {imageUnavailable ? (
              <div className="flex min-h-[57vh] w-full flex-col items-center justify-center px-8 text-center sm:min-h-[64vh] lg:min-h-[70vh]">
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
              <div className="px-5 pt-5 sm:px-6 sm:pt-6 lg:px-8 lg:pt-8">
                <div className="relative min-h-[57vh] sm:min-h-[64vh] lg:min-h-[70vh]">
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

            <div className="px-5 pb-6 pt-5 text-center sm:px-8 sm:pb-8 sm:pt-6 lg:px-12 lg:pb-10">
              <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] font-medium uppercase tracking-[0.14em] text-black/52">
                <span>Featured painting</span>
                {artwork.movement ? (
                  <>
                    <span aria-hidden="true" className="text-black/24">
                      /
                    </span>
                    <span>{artwork.movement}</span>
                  </>
                ) : null}
              </div>

              <h1 className="mx-auto mt-4 max-w-4xl font-display text-[2.8rem] leading-[0.94] tracking-[-0.03em] text-foreground sm:text-[3.5rem] lg:text-[4rem]">
                {artwork.title}
              </h1>
              <p className="mt-3 text-[15px] leading-7 text-black/66 sm:text-base">
                <span className="text-foreground">{artwork.artist}</span>
                <span className="mx-2 text-black/22">&middot;</span>
                {artwork.date}
              </p>
              <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-black/72 sm:text-base">
                {heroDescription}
              </p>

              <dl className="mx-auto mt-7 flex max-w-3xl flex-wrap items-start justify-center gap-x-8 gap-y-4 text-left">
                <MetadataItem label="Medium" value={artwork.medium} />
                {artwork.movement ? (
                  <MetadataItem label="Movement" value={artwork.movement} />
                ) : null}
                {artwork.location ? (
                  <MetadataItem label="Origin" value={artwork.location} />
                ) : null}
              </dl>

              <div className="mt-7 flex justify-center">
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
    <div className="min-w-[10rem] flex-1 sm:flex-none">
      <dt className="text-[11px] font-medium uppercase tracking-[0.15em] text-black/42">
        {label}
      </dt>
      <dd className="mt-1 text-sm leading-6 text-foreground">{value}</dd>
    </div>
  );
}
