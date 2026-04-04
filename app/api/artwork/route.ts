import { NextResponse } from "next/server";

import { getFeaturedArtwork } from "@/lib/fetchArtwork";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const excludeId = searchParams.get("exclude") ?? undefined;
  const artwork = await getFeaturedArtwork(excludeId);

  return NextResponse.json(artwork);
}
