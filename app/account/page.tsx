import type { Metadata } from "next";

import { AccountView } from "@/components/AccountView";
import { artworks, dateKey, todayDay } from "@/lib/collection";

export const metadata: Metadata = { title: "Your account", description: "Your name, your progress, and your data." };
export const revalidate = 3600;

export default function AccountPage() {
  return (
    <AccountView
      todayKey={dateKey(todayDay())}
      total={artworks.length}
      movements={Object.fromEntries(artworks.map((a) => [a.slug, { name: a.movementInfo.name, color: a.movementInfo.color }]))}
    />
  );
}
