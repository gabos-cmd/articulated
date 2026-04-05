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
        className={`pointer-events-none absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top_right,rgba(17,17,17,0.04),transparent_22%)] transition-opacity duration-300 ${
          isRefreshing ? "opacity-100" : "opacity-0"
        }`}
      />

      <div className="relative rounded-[2rem] bg-background-strong p-3 hero-shadow sm:p-4 lg:p-6">
        <div className="group relative overflow-hidden rounded-[1.75rem] bg-[#f6f6f4] min-h-[58vh] sm:min-h-[66vh] lg:min-h-[78vh]">
          {imageUnavailable ? (
            <div className="flex min-h-[58vh] flex-col items-center justify-center gap-4 px-8 text-center sm:min-h-[66vh] lg:min-h-[78vh]">
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
            <div className="relative min-h-[58vh] sm:min-h-[66vh] lg:min-h-[78vh]">
              <Image
                fill
                priority
                unoptimized
                alt={artwork.imageAlt}
                className={`object-contain px-4 py-4 transition-transform duration-700 ease-out sm:px-8 sm:py-8 lg:px-12 lg:py-12 ${
                  isRefreshing ? "scale-[1.01]" : "group-hover:scale-[1.025]"
                }`}
                onError={() => setImageUnavailable(true)}
                sizes="100vw"
                src={artwork.imageUrl ?? ""}
              />
            </div>
          )}
        </div>

        <aside className="soft-panel relative mt-6 rounded-[1.75rem] border border-line p-6 sm:p-8 lg:absolute lg:bottom-10 lg:right-10 lg:mt-0 lg:w-[430px]">
          <div className="space-y-5">
            <div className="flex flex-wrap items-center gap-2 text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
              <span>
                {artwork.sourceLabel}
              </span>
              {artwork.movement ? (
                <>
                  <span aria-hidden="true" className="text-black/30">
                    /
                  </span>
                  {artwork.movement}
                </>
              ) : null}
            </div>

            <div>
              <h2 className="font-display text-[2.55rem] leading-[0.95] tracking-[-0.02em] text-foreground sm:text-[3.1rem]">
                {artwork.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-muted sm:text-lg">
                <span className="text-foreground">{artwork.artist}</span>
                <span className="mx-2 text-black/25">&middot;</span>
                {artwork.date}
              </p>
            </div>

            <dl className="grid gap-x-6 gap-y-5 border-y border-line py-6 sm:grid-cols-2">
              <MetadataItem label="Artist" value={artwork.artist} />
              <MetadataItem label="Year" value={artwork.date} />
              <MetadataItem label="Medium" value={artwork.medium} />
              <MetadataItem
                label={artwork.movement ? "Movement" : "Origin"}
                value={
                  artwork.movement ??
                  artwork.location ??
                  "Not listed in the artwork record"
                }
              />
            </dl>

            {artwork.location ? (
              <p className="text-sm leading-7 text-muted">
                Painted in or associated with{" "}
                <span className="text-foreground">{artwork.location}</span>.
              </p>
            ) : null}
          </div>

          <div className="space-y-4">
            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-foreground px-5 py-3.5 text-sm font-medium text-white transition duration-200 hover:bg-black/88 disabled:cursor-wait disabled:bg-black/60"
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
            <p className="text-sm leading-6 text-muted">
              Saved locally: <span className="text-foreground">{favoriteCount}</span>
            </p>
            <p className="min-h-6 text-sm leading-6 text-muted">
              {errorMessage}
            </p>
          </div>
        </aside>
      </div>
    </article>
  );
}

function MetadataItem({
  label,
  value
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <dt className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
        {label}
      </dt>
      <dd className="mt-2 text-sm leading-7 text-foreground">{value}</dd>
    </div>
  );
}
