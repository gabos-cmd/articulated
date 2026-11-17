"use client";

import Link from "next/link";
import type { ReactNode } from "react";

import { SpotLaurel, SpotMoon } from "@/components/illustrations";
import { JournalHeader } from "@/components/JournalHeader";
import { journal, streak, useJournal } from "@/lib/journal";

type Props = {
  todayKey: string;
  total: number;
  titles: Record<string, { title: string; artist: string; year: number }>;
  tiles: Record<string, ReactNode>;
};

export function JournalView({ todayKey, total, titles, tiles }: Props) {
  const { state, hydrated } = useJournal();
  const visits = Object.entries(state.visits).sort((a, b) => b[0].localeCompare(a[0]));
  const seen = new Set(visits.map(([, s]) => s));
  const quizzes = Object.values(state.quizzes);
  const answered = quizzes.reduce((n, q) => n + q.total, 0);
  const right = quizzes.reduce((n, q) => n + q.correct, 0);
  const saved = state.saved.filter((s) => tiles[s]);

  const stats = [
    { label: "day streak", value: hydrated ? streak(state.visits, todayKey) : "–", tint: "var(--color-terracotta)" },
    { label: `of ${total} works seen`, value: hydrated ? seen.size : "–", tint: "var(--color-sky)" },
    { label: "saved", value: hydrated ? saved.length : "–", tint: "var(--color-rose)" },
    { label: "quiz answers right", value: hydrated ? (answered ? `${Math.round((right / answered) * 100)}%` : "–") : "–", tint: "var(--color-moss)" }
  ];

  return (
    <main>
      <JournalHeader />
      <div className="mx-auto max-w-[1180px] px-5 sm:px-10">
        <section className="grid grid-cols-2 gap-3 pt-12 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-[1.5rem] p-5 sm:p-6" style={{ background: `color-mix(in oklab, ${s.tint} 30%, var(--color-card))` }}>
              <p className="display text-[2.75rem] leading-none sm:text-[3.5rem]">{s.value}</p>
              <p className="mt-2 text-[0.8125rem] text-ink-2">{s.label}</p>
            </div>
          ))}
        </section>

        <section className="pt-20">
          <h2 className="display flex items-center gap-4 text-[2rem] sm:text-[2.5rem]">
            Saved works <span className="h-px flex-1 bg-ink/15" />
          </h2>
          {hydrated && saved.length === 0 ? (
            <Empty
              art={<SpotMoon className="h-20 w-20" />}
              text="Nothing saved yet. Tap “Save to journal” on any artwork and it will wait for you here."
            />
          ) : (
            <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-3 lg:grid-cols-4">
              {saved.map((s) => (
                <div key={s}>{tiles[s]}</div>
              ))}
            </div>
          )}
        </section>

        <section className="pt-20">
          <h2 className="display flex items-center gap-4 text-[2rem] sm:text-[2.5rem]">
            Your days <span className="h-px flex-1 bg-ink/15" />
          </h2>
          {hydrated && visits.length === 0 ? (
            <Empty art={<SpotLaurel className="h-20 w-20" />} text="Your reading log starts with today's edition. Spend a moment with it and it will appear here." />
          ) : (
            <ol className="mt-8 divide-y divide-ink/10 border-y border-ink/10">
              {visits.map(([key, slug]) => {
                const t = titles[slug];
                const q = state.quizzes[slug];
                if (!t) return null;
                return (
                  <li key={key}>
                    <Link href={key === todayKey ? "/" : `/day/${key}`} className="group flex items-baseline gap-4 py-4 transition-colors hover:bg-white/40 sm:gap-8">
                      <span className="hand w-24 shrink-0 text-lg text-ink-2 sm:w-32">
                        {new Date(`${key}T00:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "short", timeZone: "UTC" })}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="display text-[1.25rem] group-hover:underline group-hover:underline-offset-4">{t.title}</span>
                        <span className="ml-2 text-sm text-ink-3">{t.artist}</span>
                      </span>
                      <span className="shrink-0 text-sm text-ink-3">{q ? `${q.correct}/${q.total}` : "no quiz"}</span>
                    </Link>
                  </li>
                );
              })}
            </ol>
          )}
        </section>

        <p className="mt-16 max-w-xl text-sm text-ink-3">
          Your journal lives only in this browser. Nothing is sent anywhere.{" "}
          {hydrated && (visits.length > 0 || saved.length > 0) && (
            <button
              type="button"
              className="link-underline"
              onClick={() => {
                if (confirm("Clear your saved works, visits and quiz results from this browser?")) journal.reset();
              }}
            >
              Clear journal
            </button>
          )}
        </p>
      </div>
    </main>
  );
}

function Empty({ art, text }: { art: ReactNode; text: string }) {
  return (
    <div className="mt-8 flex items-center gap-6 rounded-[1.5rem] border border-dashed border-ink/20 p-8">
      {art}
      <p className="max-w-md text-[1rem] leading-relaxed text-ink-2">{text}</p>
    </div>
  );
}
