import Link from "next/link";

import { Brandmark, Landscape } from "@/components/illustrations";

const columns = [
  {
    title: "Visit",
    links: [
      { href: "/", label: "Today's edition" },
      { href: "/archive", label: "Archive" },
      { href: "/collection", label: "The collection" }
    ]
  },
  {
    title: "Yours",
    links: [
      { href: "/journal", label: "Journal" },
      { href: "/about", label: "About" }
    ]
  },
  {
    title: "Sources",
    links: [
      { href: "https://commons.wikimedia.org", label: "Wikimedia Commons" },
      { href: "https://en.wikipedia.org", label: "Wikipedia" }
    ]
  }
];

export function SiteFooter() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-sky text-ink">
      <div className="relative z-10 mx-auto grid max-w-[1180px] gap-10 px-6 pt-16 sm:grid-cols-[1.2fr_2fr] sm:px-10">
        <div className="max-w-sm">
          <Link href="/" className="inline-flex items-center gap-2.5">
            <span className="rounded-xl bg-cream p-1 shadow-[0_6px_14px_-8px_rgb(0_0_0/0.4)]">
              <Brandmark className="h-8 w-8" />
            </span>
            <span className="display text-[1.75rem]">Articulated</span>
          </Link>
          <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink/80">
            One great artwork, every day. Five slow minutes with a painting, the story behind it, and the world it was made in.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-6 sm:justify-items-end">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="display text-lg">{col.title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-ink/75">
                {col.links.map((l) => (
                  <li key={l.href}>
                    {l.href.startsWith("http") ? (
                      <a href={l.href} target="_blank" rel="noreferrer" className="hover:text-ink">
                        {l.label}
                      </a>
                    ) : (
                      <Link href={l.href} className="hover:text-ink">
                        {l.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="relative -mt-2 h-[280px] sm:-mt-6 sm:h-[420px]">
        <Landscape className="absolute inset-0 h-full w-full" />
        <div className="absolute inset-x-0 bottom-0 z-10 mx-auto flex max-w-[1180px] flex-wrap items-end justify-between gap-2 px-6 pb-6 text-[0.8125rem] text-ink/80 sm:px-10">
          <span>© {new Date().getFullYear()} Articulated · made slowly by Gabriel</span>
          <span className="hidden sm:inline">Images: public domain, via Wikimedia Commons</span>
        </div>
      </div>
    </footer>
  );
}
