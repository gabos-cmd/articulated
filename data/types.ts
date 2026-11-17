export type Moment = { label: string; text: string };

export type Quiz = {
  question: string;
  options: string[];
  /** index into options */
  answer: number;
  explanation: string;
};

export type ArtworkSeed = {
  slug: string;
  title: string;
  artist: string;
  artistLife: string;
  artistOrigin: string;
  date: string;
  year: number;
  medium: string;
  dimensions: string;
  movement: MovementId;
  museum: string;
  city: string;
  wikipediaTitle: string;
  artistWikipediaTitle: string;
  /** Explicit Wikimedia Commons file when the article's lead image is wrong or missing */
  commonsFile?: string;
  imageAlt: string;
  /** One sentence that makes you want to keep reading */
  lede: string;
  story: string;
  context: string;
  lookCloser: [string, string, string];
  quote?: { text: string; source: string };
  moments: [Moment, Moment, Moment];
  quiz: Quiz;
};

export type MovementId =
  | "early-netherlandish"
  | "early-renaissance"
  | "high-renaissance"
  | "northern-renaissance"
  | "baroque"
  | "dutch-golden-age"
  | "rococo"
  | "neoclassicism"
  | "romanticism"
  | "realism"
  | "pre-raphaelite"
  | "impressionism"
  | "post-impressionism"
  | "ukiyo-e"
  | "symbolism"
  | "abstraction";

export type Movement = {
  id: MovementId;
  name: string;
  span: string;
  blurb: string;
  /** accent from the site palette */
  color: string;
};
