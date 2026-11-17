"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { PaletteMark } from "@/components/illustrations";
import { useJournal } from "@/lib/journal";

const left = [
  { href: "/", label: "Today" },
  { href: "/archive", label: "Archive" },
  { href: "/collection", label: "Collection" }
];
const right = [{ href: "/journal", label: "Journal" }];

export function SiteNav() {
  const pathname = usePathname();
  const { state, hydrated } = useJournal();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" || pathname.startsWith("/day/") : pathname.startsWith(href);

  const linkCls = (href: string) =>
    `whitespace-nowrap rounded-full px-3.5 py-2 text-[0.875rem] font-medium transition-colors ${
      isActive(href) ? "bg-black text-white" : "text-ink-2 hover:bg-black/[0.05] hover:text-black"
    }`;

  const initial = hydrated && state.profile.name ? state.profile.name.trim()[0]?.toUpperCase() : null;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-[max(0.75rem,env(safe-area-inset-top))] sm:px-6">
      <div className="glass-bar mx-auto grid h-14 max-w-[1180px] grid-cols-[1fr_auto_1fr] items-center rounded-full px-2">
        {/* left */}
        <nav className="hidden items-center gap-0.5 md:flex" aria-label="Main">
          {left.map((l) => (
            <Link key={l.href} href={l.href} aria-current={isActive(l.href) ? "page" : undefined} className={linkCls(l.href)}>
              {l.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-black/5 md:hidden"
        >
          <span className="sr-only">Menu</span>
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 8h16M4 16h16" />}
          </svg>
        </button>

        {/* centre: wordmark */}
        <Link href="/" className="flex items-center gap-2 px-2 transition-opacity hover:opacity-80" aria-label="Articulated, today's edition">
          <PaletteMark id="nav-mark" className="h-7 w-7" />
          <span className="display text-[1.65rem] leading-none tracking-[-0.02em] text-black">Articulated</span>
        </Link>

        {/* right */}
        <div className="flex items-center justify-end gap-0.5">
          {right.map((l) => (
            <Link key={l.href} href={l.href} aria-current={isActive(l.href) ? "page" : undefined} className={`hidden md:inline-flex ${linkCls(l.href)}`}>
              {l.label}
            </Link>
          ))}
          <Link
            href="/account"
            aria-label="Your account"
            aria-current={isActive("/account") ? "page" : undefined}
            className={`ml-1 flex h-10 items-center gap-2 rounded-full pl-1 pr-1 transition-colors md:pr-3.5 ${isActive("/account") ? "bg-black text-white" : "hover:bg-black/5"}`}
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black font-sans text-[0.8125rem] font-semibold text-white ring-2 ring-white">
              {initial ?? (
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <circle cx="12" cy="9" r="3.5" />
                  <path d="M5 19c1.5-3 4-4.5 7-4.5s5.5 1.5 7 4.5" />
                </svg>
              )}
            </span>
            <span className="hidden text-[0.875rem] font-medium md:inline">Account</span>
          </Link>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" className="glass-bar rise mx-auto mt-2 max-w-[1180px] rounded-[1.5rem] p-2 md:hidden" aria-label="Main">
          {[...left, ...right].map((l) => (
            <Link key={l.href} href={l.href} className={`block ${linkCls(l.href)} py-3 text-base`}>
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
