"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { FavoriteButton } from "@/components/FavoriteButton";
import type { Artwork } from "@/lib/artwork";

type ArtworkCardProps = {
  artwork: Artwork;
  isRefreshing: boolean;
  isFavorite: boolean;
  favoriteCount: number;
  errorMessage: string | null;
  onLoadAnother: () => void;
  onFavoriteToggle: () => void;
};

export function ArtworkCard({
  artwork,
  isRefreshing,
  isFavorite,
  favoriteCount,
  errorMessage,
  onLoadAnother,
  onFavoriteToggle
}: ArtworkCardProps) {
  const [imageUnavailable, setImageUnavailable] = useState(!artwork.imageUrl);

  useEffect(() => {
    setImageUnavailable(!artwork.imageUrl);
  }, [artwork.id, artwork.imageUrl]);

  return (
    <article className="relative">
      <div
        className={`pointer-events-none absolute inset-x-0 top-0 h-[78vh] rounded-[2rem] bg-[radial-gradient(circle_at_top,rgba(17,17,17,0.03),transparent_55%)] transition-opacity duration-300 ${
          isRefreshing ? "opacity-100" : "opacity-0"
        }`}
      />

      <section className="relative flex min-h-[calc(100vh-9rem)] items-center justify-center">
        <div className="group relative flex w-full items-center justify-center">
          {imageUnavailable ? (
            <div className="image-stage flex w-full flex-col items-center justify-center gap-4 px-8 text-center sm:min-h-[74vh] lg:min-h-[78vh]">
              <span className="font-display text-3xl text-foreground sm:text-4xl">
                Image currently unavailable
              </span>
              <p className="max-w-md text-sm leading-7 text-muted sm:text-base">
                The artwork profile is still worth exploring, so the educational
                notes and metadata remain available even if the image does not
                load.
              </p>
            </div>
          ) : (
            <div className="relative image-stage w-full sm:min-h-[74vh] lg:min-h-[78vh]">
              <Image
                fill
                priority
                unoptimized
                alt={artwork.imageAlt}
                className={`object-contain transition-transform duration-700 ease-out ${
                  isRefreshing ? "scale-[1.01]" : "group-hover:scale-[1.025]"
                }`}
                onError={() => setImageUnavailable(true)}
                sizes="100vw"
                src={artwork.imageUrl ?? ""}
              />
            </div>
          )}
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-3xl text-center sm:mt-14">
        <div>
          <h2 className="font-display text-[2.8rem] leading-[0.95] tracking-[-0.025em] text-foreground sm:text-[3.6rem] lg:text-[4.25rem]">
            {artwork.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-muted sm:text-lg">
            <span className="text-foreground">{artwork.artist}</span>
            <span className="mx-2 text-black/25">&middot;</span>
            {artwork.date}
          </p>
        </div>

        <dl className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] leading-6 text-muted sm:text-sm">
          <MetadataItem label="Medium" value={artwork.medium} inline />
          {artwork.movement ? (
            <MetadataItem label="Movement" value={artwork.movement} inline />
          ) : null}
          {artwork.location ? (
            <MetadataItem label="Origin" value={artwork.location} inline />
          ) : null}
        </dl>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-foreground px-5 py-3 text-sm font-medium text-white transition duration-200 hover:bg-black/88 disabled:cursor-wait disabled:bg-black/60"
            disabled={isRefreshing}
            onClick={onLoadAnother}
            type="button"
          >
            {isRefreshing ? "Discovering another..." : "Discover another"}
          </button>
          <FavoriteButton
            active={isFavorite}
            count={favoriteCount}
            onClick={onFavoriteToggle}
          />
        </div>

        <p className="mx-auto mt-4 min-h-6 max-w-xl text-sm leading-6 text-muted">
          {errorMessage}
        </p>
      </section>
    </article>
  );
}

function MetadataItem({
  label,
  value,
  inline = false
}: {
  label: string;
  value: string;
  inline?: boolean;
}) {
  if (inline) {
    return (
      <div className="inline-flex items-center gap-2">
        <dt className="text-[11px] font-medium uppercase tracking-[0.14em] text-black/42">
          {label}
        </dt>
        <dd className="text-foreground">{value}</dd>
      </div>
    );
  }

  return (
    <div>
      <dt className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
        {label}
      </dt>
      <dd className="mt-2 text-sm leading-7 text-foreground">{value}</dd>
    </div>
  );
}
