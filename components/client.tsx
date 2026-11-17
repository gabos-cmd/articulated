"use client";

import { useEffect, useState } from "react";

import { journal, useJournal } from "@/lib/journal";

export function SaveButton({ slug, className = "" }: { slug: string; className?: string }) {
  const { state, hydrated } = useJournal();
  const saved = hydrated && state.saved.includes(slug);
  return (
    <button
      type="button"
      onClick={() => journal.toggleSaved(slug)}
      aria-pressed={saved}
      className={`btn ${saved ? "bg-terracotta text-cream shadow-[0_8px_20px_-10px_rgb(226_113_74/0.9)]" : "glass text-ink"} ${className}`}
    >
      <svg viewBox="0 0 24 24" className={`h-4 w-4 transition-transform duration-300 ${saved ? "scale-110" : ""}`} aria-hidden="true">
        <path
          d="M12 20.5s-7.5-4.4-7.5-10.1A4.4 4.4 0 0 1 12 7.6a4.4 4.4 0 0 1 7.5 2.8c0 5.7-7.5 10.1-7.5 10.1Z"
          fill={saved ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
      </svg>
      {saved ? "In your journal" : "Save to journal"}
    </button>
  );
}

export function ShareButton({ title, path, className = "" }: { title: string; path: string; className?: string }) {
  const [copied, setCopied] = useState(false);
  const share = async () => {
    const url = new URL(path, window.location.origin).toString();
    try {
      if (navigator.share && window.matchMedia("(pointer: coarse)").matches) {
        await navigator.share({ title, url });
        return;
      }
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* dismissed */
    }
  };
  return (
    <button type="button" onClick={share} className={`btn glass text-ink ${className}`}>
      <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 15V4M7.5 8.5 12 4l4.5 4.5M5 13v5.5A1.5 1.5 0 0 0 6.5 20h11a1.5 1.5 0 0 0 1.5-1.5V13" />
      </svg>
      <span aria-live="polite">{copied ? "Link copied" : "Share"}</span>
    </button>
  );
}

/** Marks today's edition as seen in the reader's journal */
export function VisitTracker({ dateKey, slug }: { dateKey: string; slug: string }) {
  useEffect(() => {
    // count it only once someone has actually spent a moment with the work
    const t = setTimeout(() => journal.recordVisit(dateKey, slug), 4000);
    return () => clearTimeout(t);
  }, [dateKey, slug]);
  return null;
}

export function CopySwatch({ hex, className = "text-ink-2 hover:text-ink" }: { hex: string; className?: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(hex);
          setCopied(true);
          setTimeout(() => setCopied(false), 1200);
        } catch {}
      }}
      className={`font-mono text-[0.6875rem] uppercase tracking-wider ${className}`}
      title="Copy colour"
    >
      {copied ? "copied" : hex}
    </button>
  );
}
