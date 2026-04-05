"use client";

import { useEffect, useState } from "react";

import { ArtworkCard } from "@/components/ArtworkCard";
import { InfoSection } from "@/components/InfoSection";
import { SiteNav } from "@/components/SiteNav";
import { YearMomentsCard } from "@/components/YearMomentsCard";
import { FAVORITES_STORAGE_KEY, type Artwork } from "@/lib/artwork";

type ArtworkExperienceProps = {
  initialArtwork: Artwork;
};

export function ArtworkExperience({
  initialArtwork
}: ArtworkExperienceProps) {
  const artwork = initialArtwork;
  const [favorites, setFavorites] = useState<Artwork[]>([]);
  const [favoritesReady, setFavoritesReady] = useState(false);

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

  return (
    <main className="museum-shell min-h-screen bg-white">
      <section className="relative overflow-hidden px-5 pb-18 pt-6 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[1380px]">
          <SiteNav variant="overlay" />
        </div>
        <ArtworkCard
          artwork={artwork}
          isFavorite={isFavorite}
          favoriteCount={favorites.length}
          onFavoriteToggle={handleFavoriteToggle}
        />
      </section>

      <section className="relative bg-white px-5 pb-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl">
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
        </div>
      </section>
    </main>
  );
}
