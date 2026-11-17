import { artworksA } from "./artworks-a.ts";
import { artworksB } from "./artworks-b.ts";
import type { ArtworkSeed } from "./types.ts";

export const seeds: ArtworkSeed[] = [...artworksA, ...artworksB];
