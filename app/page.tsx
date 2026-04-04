import { ArtworkExperience } from "@/components/ArtworkExperience";
import { getFeaturedArtwork } from "@/lib/fetchArtwork";

export const dynamic = "force-dynamic";

export default async function Home() {
  const initialArtwork = await getFeaturedArtwork();

  return <ArtworkExperience initialArtwork={initialArtwork} />;
}
