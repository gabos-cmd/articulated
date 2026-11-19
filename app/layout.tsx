import type { Metadata, Viewport } from "next";
import { Caveat, Instrument_Sans, Newsreader, Young_Serif } from "next/font/google";

import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";

import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-newsreader",
  display: "swap"
});

const youngSerif = Young_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-young-serif",
  display: "swap"
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap"
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://articulated.vercel.app"),
  title: {
    default: "Articulated: one artwork a day",
    template: "%s · Articulated"
  },
  description:
    "A daily edition of one great artwork: the story behind it, what to look for, the world it was made in, and three questions to make it stick.",
  openGraph: {
    type: "website",
    siteName: "Articulated"
  }
};

export const viewport: Viewport = {
  themeColor: "#f5efe3",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${newsreader.variable} ${youngSerif.variable} ${instrument.variable} ${caveat.variable}`}>
      <body className="min-h-dvh overflow-x-clip">
        <SiteNav />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
