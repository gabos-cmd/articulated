import type { Media } from "@/lib/collection";

export function srcSet(media: Media) {
  return `${media.src["500"]} 500w, ${media.src["960"]} 960w, ${media.src["1920"]} 1920w`;
}
