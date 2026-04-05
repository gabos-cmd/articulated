"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { FooterSignature } from "@/components/FooterSignature";
import { SiteNav } from "@/components/SiteNav";
import { FAVORITES_STORAGE_KEY, type Artwork } from "@/lib/artwork";

export function FavoritesClient() {
  const [favorites, setFavorites] = useState<Artwork[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(FAVORITES_STORAGE_KEY);

      if (saved) {
        setFavorites(JSON.parse(saved) as Artwork[]);
      }
    } catch {
      window.localStorage.removeItem(FAVORITES_STORAGE_KEY);
    } finally {
      setReady(true);
    }
  }, []);

  return (
    <main className="museum-shell min-h-screen bg-white px-5 pb-24 pt-6 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1380px]">
        <SiteNav />

        <section className="relative mt-10 overflow-hidden rounded-[2rem] border border-line bg-[linear-gradient(180deg,rgba(255,255,255,1),rgba(245,245,244,0.75))] px-6 py-10 shadow-[0_22px_60px_rgba(17,17,17,0.06)] sm:px-8 sm:py-12">
          <div className="pointer-events-none absolute -left-12 top-8 h-48 w-48 rounded-full bg-black/[0.03] blur-[90px]" />
          <div className="pointer-events-none absolute right-0 top-0 h-56 w-56 rounded-full bg-white blur-[120px]" />
          <div className="relative max-w-2xl">
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
              Favorites
            </p>
            <h1 className="mt-4 font-display text-[2.9rem] leading-[0.94] tracking-[-0.03em] text-foreground sm:text-[4rem]">
              Your saved artworks,
              <br />
              kept locally.
            </h1>
            <p className="mt-5 max-w-xl text-[16px] leading-8 text-black/72 sm:text-[17px]">
              A quiet collection of paintings you decided were worth returning
              to. These selections stay on this device using local storage.
            </p>
          </div>
        </section>

        {!ready ? (
          <section className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="loading-shimmer h-[28rem] rounded-[1.85rem] bg-black/[0.04]"
              />
            ))}
          </section>
        ) : favorites.length === 0 ? (
          <section className="mt-12 rounded-[1.8rem] border border-line bg-white px-6 py-12 text-center shadow-[0_18px_40px_rgba(17,17,17,0.04)]">
            <h2 className="font-display text-[2rem] tracking-[-0.02em] text-foreground">
              No saved artworks yet.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[16px] leading-8 text-muted">
              Save a painting from the homepage and it will appear here as part
              of your personal gallery.
            </p>
            <Link
              className="mt-8 inline-flex rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition duration-200 hover:bg-black/88"
              href="/"
            >
              Return to the artwork
            </Link>
          </section>
        ) : (
          <section className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {favorites.map((artwork) => (
              <article
                key={artwork.id}
                className="group relative overflow-hidden rounded-[1.9rem] border border-line bg-white shadow-[0_20px_55px_rgba(17,17,17,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(17,17,17,0.1)]"
              >
                {artwork.imageUrl ? (
                  <div className="relative min-h-[23rem] overflow-hidden bg-[#f7f7f4]">
                    <div className="absolute inset-0">
                      <Image
                        fill
                        unoptimized
                        alt=""
                        aria-hidden="true"
                        className="scale-110 object-cover opacity-[0.16] blur-[70px] saturate-[0.9]"
                        sizes="33vw"
                        src={artwork.imageUrl}
                      />
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.28),transparent_52%),linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.32))]" />
                    </div>
                    <div className="relative min-h-[23rem]">
                      <Image
                        fill
                        unoptimized
                        alt={artwork.imageAlt}
                        className="object-cover transition duration-500 group-hover:scale-[1.04]"
                        sizes="(max-width: 1280px) 50vw, 33vw"
                        src={artwork.imageUrl}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="flex min-h-[23rem] items-center justify-center bg-[linear-gradient(180deg,rgba(248,248,246,0.98),rgba(241,241,239,0.88))] px-6 text-center">
                    <p className="max-w-xs text-sm leading-7 text-muted">
                      Image unavailable for this saved artwork.
                    </p>
                  </div>
                )}
                <div className="relative px-5 pb-6 pt-5">
                  <h2 className="font-display text-[2rem] leading-[0.98] tracking-[-0.025em] text-foreground">
                    {artwork.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-black/68">
                    <span className="text-foreground">{artwork.artist}</span>
                    <span className="mx-2 text-black/25">&middot;</span>
                    {artwork.date}
                  </p>
                  <p className="mt-4 text-[14px] leading-7 text-muted">
                    {artwork.movement ?? artwork.medium}
                  </p>
                </div>
              </article>
            ))}
          </section>
        )}

        <FooterSignature className="mt-16" />
      </div>
    </main>
  );
}
