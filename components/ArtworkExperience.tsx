"use client";

import { useEffect, useState } from "react";

import { ArtworkCard } from "@/components/ArtworkCard";
import { InfoSection } from "@/components/InfoSection";
import { YearMomentsCard } from "@/components/YearMomentsCard";
import { FAVORITES_STORAGE_KEY, type Artwork } from "@/lib/artwork";

type ArtworkExperienceProps = {
  initialArtwork: Artwork;
};

export function ArtworkExperience({
  initialArtwork
}: ArtworkExperienceProps) {
  const [artwork, setArtwork] = useState(initialArtwork);
  const [favorites, setFavorites] = useState<Artwork[]>([]);
  const [favoritesReady, setFavoritesReady] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(FAVORITES_STORAGE_KEY);

      if (saved) {
        setFavorites(JSON.parse(saved) as Artwork[]);
      }
    } catch {
      window.localStorage.removeItem(FAVORITES_STORAGE_KEY);
    } finally {
      setFavoritesReady(true);
    }
  }, []);

  useEffect(() => {
    if (!favoritesReady) {
      return;
    }

    window.localStorage.setItem(
      FAVORITES_STORAGE_KEY,
      JSON.stringify(favorites)
    );
  }, [favorites, favoritesReady]);

  const isFavorite = favorites.some((item) => item.id === artwork.id);

  const handleFavoriteToggle = () => {
    setFavorites((currentFavorites) => {
      if (currentFavorites.some((item) => item.id === artwork.id)) {
        return currentFavorites.filter((item) => item.id !== artwork.id);
      }

      return [artwork, ...currentFavorites].slice(0, 12);
    });
  };

  const handleLoadAnother = async () => {
    setIsRefreshing(true);
    setErrorMessage(null);

    try {
      const response = await fetch(`/api/artwork?exclude=${artwork.id}`, {
        cache: "no-store"
      });

      if (!response.ok) {
        throw new Error("Unable to load a new artwork.");
      }

      const nextArtwork = (await response.json()) as Artwork;
      setArtwork(nextArtwork);
    } catch {
      setErrorMessage(
        "The next artwork could not be loaded right now, so the current piece is staying on view."
      );
    } finally {
      setIsRefreshing(false);
    }
  };

  return (
    <main className="museum-shell min-h-screen px-5 py-8 md:px-10 md:py-10">
      <div className="mx-auto max-w-6xl">
        <header className="flex flex-col gap-6 border-b border-line/80 pb-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl space-y-5">
            <span className="inline-flex w-fit items-center rounded-full border border-line bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-muted">
              Articulated
            </span>
            <div className="space-y-3">
              <h1 className="font-display text-5xl leading-none text-foreground sm:text-6xl lg:text-7xl">
                A daily museum moment, designed for slow looking.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
                Explore one carefully framed artwork at a time, then connect it
                to the artist, the period, and the wider world around it.
              </p>
            </div>
          </div>
          <div className="rounded-[1.75rem] border border-line bg-white/65 p-5 text-sm card-shadow backdrop-blur-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted">
              Saved locally
            </p>
            <p className="mt-3 font-display text-4xl text-foreground">
              {favorites.length}
            </p>
            <p className="mt-2 max-w-[14rem] leading-6 text-muted">
              Favorites stay in your browser, which keeps this MVP simple and
              easy to explain.
            </p>
          </div>
        </header>

        <section className="mt-8">
          <ArtworkCard
            artwork={artwork}
            errorMessage={errorMessage}
            isFavorite={isFavorite}
            isRefreshing={isRefreshing}
            favoriteCount={favorites.length}
            onFavoriteToggle={handleFavoriteToggle}
            onLoadAnother={handleLoadAnother}
          />
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-2">
          <InfoSection
            title="Why this artwork matters"
            description={artwork.whyItMatters}
          />
          <InfoSection
            title="About the artist"
            description={artwork.aboutArtist}
          />
        </section>

        <section className="mt-6 grid gap-6 xl:grid-cols-[1.08fr_0.92fr]">
          <InfoSection
            title="Historical context"
            description={artwork.historicalContext}
          />
          <YearMomentsCard
            dateLabel={artwork.date}
            moments={artwork.yearMoments}
          />
        </section>
      </div>
    </main>
  );
}
