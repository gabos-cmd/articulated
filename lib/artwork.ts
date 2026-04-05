export type YearMoment = {
  label: string;
  text: string;
};

export type Artwork = {
  id: string;
  title: string;
  artist: string;
  date: string;
  year: number | null;
  medium: string;
  imageUrl: string | null;
  imageAlt: string;
  location: string | null;
  movement: string | null;
  whyItMatters: string;
  aboutArtist: string;
  historicalContext: string;
  lookingPrompt: string;
  yearMoments: YearMoment[];
  source: "mock" | "api" | "curated";
  sourceLabel: string;
};

export const FAVORITES_STORAGE_KEY = "articulated-favorites";
