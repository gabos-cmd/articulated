"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Brandmark } from "@/components/illustrations";

const links = [
  { href: "/", label: "Today" },
  { href: "/archive", label: "Archive" },
  { href: "/collection", label: "Collection" },
  { href: "/journal", label: "Journal" }
];

export function SiteNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" || pathname.startsWith("/day/") : pathname.startsWith(href);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-[max(0.75rem,env(safe-area-inset-top))] sm:px-6">
      <div
        className={`glass pointer-events-auto mx-auto flex max-w-[1180px] items-center justify-between gap-2 rounded-full py-1.5 pl-2 pr-1.5 transition-[box-shadow,background-color] duration-300 sm:pl-3 ${
          scrolled ? "" : "shadow-none!"
        }`}
      >
        <Link href="/" className="flex shrink-0 items-center gap-2 rounded-full pr-2 transition-opacity hover:opacity-80" aria-label="Articulated, home">
          <Brandmark className="h-8 w-8" />
          <span className="display hidden text-[1.35rem] leading-none tracking-[-0.03em] sm:inline">Articulated</span>
        </Link>
        <nav className="scrollbar-none flex items-center gap-0.5 overflow-x-auto">
          {links.map((l) => {
            const active = isActive(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`relative whitespace-nowrap rounded-full px-3 py-2 text-[0.8125rem] font-medium transition-colors sm:px-4 ${
                  active ? "bg-ink text-cream shadow-[0_6px_16px_-8px_rgb(42_37_32/0.7)]" : "text-ink-2 hover:bg-white/60 hover:text-ink"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
