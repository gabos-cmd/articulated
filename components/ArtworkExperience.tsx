"use client";

import Image from "next/image";
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
    <main className="museum-shell min-h-screen px-5 pb-16 pt-8 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1380px]">
        <header className="flex justify-center pb-12 pt-2 sm:pb-16 sm:pt-6 lg:pb-18">
          <Image
            alt="Articulated"
            className="h-auto w-[220px] sm:w-[290px] lg:w-[360px]"
            height={394}
            priority
            src="/Logo.png"
            width={1511}
          />
        </header>

        <ArtworkCard
          artwork={artwork}
          errorMessage={errorMessage}
          isFavorite={isFavorite}
          isRefreshing={isRefreshing}
          favoriteCount={favorites.length}
          onFavoriteToggle={handleFavoriteToggle}
          onLoadAnother={handleLoadAnother}
        />

        <section className="mx-auto mt-20 max-w-5xl">
          <InfoSection
            title="Why this artwork matters"
            description={artwork.whyItMatters}
          />
          <InfoSection
            title="About the artist"
            description={artwork.aboutArtist}
          />
          <InfoSection
            title="Historical context"
            description={artwork.historicalContext}
          />
          <YearMomentsCard
            dateLabel={artwork.date}
            moments={artwork.yearMoments}
          />
          <InfoSection
            title="Looking prompt"
            description={artwork.lookingPrompt}
            tone="prompt"
          />
        </section>
      </div>
    </main>
  );
}
