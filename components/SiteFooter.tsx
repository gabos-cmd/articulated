import Link from "next/link";

import { Countdown } from "@/components/Countdown";
import { Nocturne, PaletteMark } from "@/components/illustrations";

const links = [
  { href: "/", label: "Today" },
  { href: "/archive", label: "Archive" },
  { href: "/collection", label: "Collection" },
  { href: "/journal", label: "Journal" },
  { href: "/account", label: "Account" },
  { href: "/about", label: "About" }
];

export function SiteFooter() {
  return (
    <footer className="relative mt-28 overflow-hidden bg-black text-cream">
      <div className="relative z-10 mx-auto max-w-[1180px] px-6 pt-16 sm:px-10 sm:pt-20">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="hand text-2xl text-ochre">The next edition arrives in</p>
            <p className="mt-1 text-[2.75rem] leading-none text-white sm:text-[4rem]">
              <Countdown />
            </p>
            <p className="mt-4 max-w-sm text-[0.9375rem] leading-relaxed text-cream/65">
              A new artwork every day at midnight (UTC). Five slow minutes, and a little more of art history sticks.
            </p>
          </div>
          <nav className="grid grid-cols-3 gap-x-8 gap-y-3 text-[0.9375rem] sm:grid-cols-6 lg:grid-cols-3" aria-label="Footer">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="text-cream/75 transition-colors hover:text-white">
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <div className="relative h-[260px] sm:h-[400px]">
        <Nocturne className="absolute inset-0 h-full w-full" />
      </div>

      <div className="relative z-10 bg-black">
        <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-4 px-6 py-6 sm:px-10">
          <Link href="/" className="flex items-center gap-2.5">
            <PaletteMark id="foot-mark" className="h-8 w-8" />
            <span className="display text-[1.75rem] leading-none text-white">Articulated</span>
          </Link>
          <p className="text-[0.8125rem] text-cream/55">
            © {new Date().getFullYear()} · made slowly by Gabriel · images public domain via{" "}
            <a href="https://commons.wikimedia.org" className="underline decoration-cream/30 underline-offset-2 hover:text-cream" target="_blank" rel="noreferrer">
              Wikimedia Commons
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
