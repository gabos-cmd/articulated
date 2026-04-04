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
    <article className="relative overflow-hidden rounded-[2rem] border border-line bg-surface-strong p-4 card-shadow backdrop-blur-sm sm:p-5 lg:p-6">
      <div
        className={`absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.45),transparent_24%)] transition-opacity duration-300 ${
          isRefreshing ? "opacity-100" : "opacity-0"
        }`}
      />

      <div className="relative grid gap-6 lg:grid-cols-[1.2fr_0.82fr] lg:items-start">
        <div className="overflow-hidden rounded-[1.6rem] border border-line/80 bg-background-strong">
          {imageUnavailable ? (
            <div className="flex aspect-[4/5] flex-col items-center justify-center gap-4 px-8 text-center">
              <span className="font-display text-3xl text-foreground">
                Image currently unavailable
              </span>
              <p className="max-w-md text-sm leading-7 text-muted">
                The museum record is still worth exploring, so the educational
                notes and metadata remain available even when the image is
                missing.
              </p>
            </div>
          ) : (
            <div className="relative aspect-[4/5]">
              <Image
                fill
                priority
                unoptimized
                alt={artwork.imageAlt}
                className="object-cover"
                onError={() => setImageUnavailable(true)}
                sizes="(max-width: 1024px) 100vw, 60vw"
                src={artwork.imageUrl ?? ""}
              />
            </div>
          )}
        </div>

        <div className="flex h-full flex-col justify-between gap-6 rounded-[1.6rem] border border-line/80 bg-white/55 p-5 sm:p-6">
          <div className="space-y-5">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex rounded-full border border-line bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-muted">
                {artwork.sourceLabel}
              </span>
              {artwork.movement ? (
                <span className="inline-flex rounded-full border border-line px-3 py-1 text-xs uppercase tracking-[0.22em] text-muted">
                  {artwork.movement}
                </span>
              ) : null}
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-muted">
                Featured artwork
              </p>
              <h2 className="mt-3 font-display text-4xl leading-tight text-foreground sm:text-5xl">
                {artwork.title}
              </h2>
              <p className="mt-4 text-lg text-muted">
                {artwork.artist}{" "}
                <span className="text-foreground/60">&middot;</span>{" "}
                {artwork.date}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <MetadataTile label="Artist" value={artwork.artist} />
              <MetadataTile label="Date" value={artwork.date} />
              <MetadataTile label="Medium" value={artwork.medium} />
              <MetadataTile
                label="Place of origin"
                value={artwork.location ?? "Not listed in the museum record"}
              />
            </div>

            <div className="rounded-[1.35rem] border border-line bg-accent-soft px-4 py-4">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted">
                Looking prompt
              </p>
              <p className="mt-3 text-sm leading-7 text-foreground/82">
                Start with one detail that catches your eye, then ask what the
                artist wanted you to notice first.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                className="inline-flex items-center justify-center rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-foreground/90 disabled:cursor-wait disabled:bg-foreground/70"
                disabled={isRefreshing}
                onClick={onLoadAnother}
                type="button"
              >
                {isRefreshing ? "Loading another artwork..." : "Load another artwork"}
              </button>
              <FavoriteButton
                active={isFavorite}
                count={favoriteCount}
                onClick={onFavoriteToggle}
              />
            </div>
            <p className="min-h-6 text-sm leading-6 text-muted">
              {errorMessage}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

function MetadataTile({
  label,
  value
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-[1.2rem] border border-line bg-white/70 px-4 py-4">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
        {label}
      </p>
      <p className="mt-3 text-sm leading-7 text-foreground">{value}</p>
    </div>
  );
}
