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
    <article className="mx-auto mt-8 max-w-[1380px] sm:mt-10">
      <section className="relative flex min-h-[calc(100vh-6rem)] items-center justify-center">
        <div className="w-full max-w-[1180px]">
          <div className="group relative overflow-hidden rounded-[2.3rem] border border-black/8 bg-[#f7f7f4] shadow-[0_34px_100px_rgba(17,17,17,0.1)]">
            {imageUnavailable ? (
              <div className="flex min-h-[58vh] w-full flex-col items-center justify-center bg-[linear-gradient(180deg,rgba(248,248,246,0.98),rgba(241,241,239,0.88))] px-8 text-center sm:min-h-[66vh] lg:min-h-[74vh]">
                <span className="font-heading text-3xl font-[500] tracking-[-0.04em] text-foreground sm:text-4xl">
                  Image currently unavailable
                </span>
                <p className="mt-4 max-w-md text-sm leading-7 text-muted sm:text-base">
                  The artwork profile is still worth exploring, so the
                  educational notes and metadata remain available even if the
                  image does not load.
                </p>
              </div>
            ) : (
              <div className="relative min-h-[58vh] overflow-hidden bg-[#f7f7f4] sm:min-h-[66vh] lg:min-h-[74vh]">
                <div className="absolute inset-0">
                  <Image
                    fill
                    priority
                    unoptimized
                    alt=""
                    aria-hidden="true"
                    className="scale-110 object-cover opacity-[0.18] blur-[95px] saturate-[0.9]"
                    sizes="100vw"
                    src={artwork.imageUrl ?? ""}
                  />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.3),transparent_52%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.34))]" />
                </div>
                <div className="relative min-h-[58vh] sm:min-h-[66vh] lg:min-h-[74vh]">
                  <Image
                    fill
                    priority
                    unoptimized
                    alt={artwork.imageAlt}
                    className="object-contain transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    onError={() => setImageUnavailable(true)}
                    sizes="(max-width: 1280px) 100vw, 78vw"
                    src={artwork.imageUrl ?? ""}
                  />
                </div>
              </div>
            )}
          </div>

          <div className="mx-auto mt-7 w-full max-w-[820px] rounded-[2rem] border border-black/7 bg-white/92 px-6 pb-7 pt-6 text-center shadow-[0_22px_60px_rgba(17,17,17,0.08)] sm:px-10 sm:pb-9 sm:pt-7">
            <h1 className="mx-auto max-w-4xl font-heading text-[2.45rem] font-[500] leading-[0.95] tracking-[-0.05em] text-foreground sm:text-[3rem] lg:text-[3.35rem]">
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

            {artwork.artistQuote ? (
              <blockquote className="mx-auto mt-6 max-w-xl rounded-[1.4rem] border border-black/6 bg-black/[0.025] px-5 py-5 text-left">
                <p className="font-heading text-[1rem] font-[450] leading-7 tracking-[-0.02em] text-foreground/84">
                  “{artwork.artistQuote}”
                </p>
                <footer className="mt-3 text-[11px] font-medium uppercase tracking-[0.12em] text-black/42">
                  {artwork.artist}
                </footer>
              </blockquote>
            ) : null}

            <dl className="mx-auto mt-6 flex max-w-3xl flex-wrap items-start justify-center gap-x-8 gap-y-4 text-left">
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
      <dt className="font-heading text-[11px] font-medium uppercase tracking-[0.12em] text-black/42">
        {label}
      </dt>
      <dd className="mt-1 text-sm leading-6 text-foreground">{value}</dd>
    </div>
  );
}
