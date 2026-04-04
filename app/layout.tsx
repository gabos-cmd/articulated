import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Articulated",
  description:
    "Articulated is a refined museum-style web app that highlights one artwork at a time with accessible, engaging context."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
