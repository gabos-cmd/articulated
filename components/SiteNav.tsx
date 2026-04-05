"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type SiteNavProps = {
  variant?: "overlay" | "page";
};

const navLinks = [
  {
    href: "/favorites",
    label: "Favorites"
  },
  {
    href: "/about",
    label: "About"
  }
];

export function SiteNav({ variant = "page" }: SiteNavProps) {
  const pathname = usePathname();
  const isOverlay = variant === "overlay";

  return (
    <header
      className={`relative z-30 flex items-center justify-between ${
        isOverlay
          ? "rounded-[1.75rem] border border-white/40 bg-white/[0.16] px-5 py-4 backdrop-blur-[18px] shadow-[0_18px_55px_rgba(17,17,17,0.09)] sm:px-6"
          : "border-b border-line/80 py-6"
      }`}
    >
      <Link
        className="inline-flex items-center transition duration-200 hover:opacity-75"
        href="/"
      >
        <img
          alt="Articulated"
          className="block h-auto w-[134px] sm:w-[158px]"
          height={394}
          src="/Logo.png"
          width={1511}
        />
      </Link>
      <nav className="flex items-center gap-2 sm:gap-3">
        {navLinks.map((link) => {
          const active = pathname === link.href;

          return (
            <Link
              key={link.href}
              className={`rounded-full px-4 py-2 text-sm font-medium transition duration-200 ${
                active
                  ? isOverlay
                    ? "bg-black text-white shadow-[0_10px_24px_rgba(17,17,17,0.2)]"
                    : "bg-black text-white"
                  : isOverlay
                    ? "bg-white/55 text-foreground hover:bg-white/75"
                    : "text-muted hover:bg-black/[0.04] hover:text-foreground"
              }`}
              href={link.href}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
