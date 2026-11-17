"use client";

import { useRef, useState } from "react";

import { PaletteMark } from "@/components/illustrations";
import { journal, streak, useJournal } from "@/lib/journal";

type Props = {
  todayKey: string;
  total: number;
  movements: Record<string, { name: string; color: string }>;
};

export function AccountView({ todayKey, total, movements }: Props) {
  const { state, hydrated } = useJournal();
  const [draft, setDraft] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const name = draft ?? state.profile.name;
  const seen = new Set(Object.values(state.visits));
  const days = Object.keys(state.visits).length;
  const quizzes = Object.values(state.quizzes);
  const answered = quizzes.reduce((n, q) => n + q.total, 0);
  const right = quizzes.reduce((n, q) => n + q.correct, 0);

  // which movements you've met, and how often
  const byMovement = new Map<string, { name: string; color: string; n: number }>();
  for (const slug of seen) {
    const m = movements[slug];
    if (!m) continue;
    const cur = byMovement.get(m.name) ?? { ...m, n: 0 };
    cur.n++;
    byMovement.set(m.name, cur);
  }
  const movementRows = [...byMovement.values()].sort((a, b) => b.n - a.n);
  const maxN = Math.max(1, ...movementRows.map((r) => r.n));

  // last 5 weeks of visits as a little calendar
  const today = Date.parse(`${todayKey}T00:00:00Z`);
  const cells = Array.from({ length: 35 }, (_, i) => {
    const key = new Date(today - (34 - i) * 86_400_000).toISOString().slice(0, 10);
    return { key, on: Boolean(state.visits[key]) };
  });

  const save = () => {
    if (draft !== null) journal.setName(draft.trim());
    setDraft(null);
    flash("Saved.");
  };
  const flash = (m: string) => {
    setMessage(m);
    setTimeout(() => setMessage(null), 2200);
  };

  const download = () => {
    const blob = new Blob([journal.export()], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `articulated-journal-${todayKey}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <main className="px-2 pt-[calc(env(safe-area-inset-top)+5.25rem)] sm:px-5">
      <div className="mx-auto max-w-[1180px]">
        {/* identity card */}
        <section className="relative overflow-hidden rounded-[1.75rem] bg-black px-6 pb-10 pt-10 text-white sm:rounded-[2.75rem] sm:px-14 sm:pb-14 sm:pt-16">
          <div aria-hidden className="absolute -right-16 -top-16 h-72 w-72 opacity-90 sm:-right-10 sm:-top-10 sm:h-96 sm:w-96">
            <PaletteMark id="acct-mark" className="h-full w-full" />
          </div>
          <div className="relative max-w-xl">
            <p className="hand text-[1.4rem] text-ochre">
              {hydrated && state.profile.since ? `reading since ${new Date(`${state.profile.since}T00:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" })}` : "your account"}
            </p>
            <h1 className="display mt-3 text-[3.4rem] leading-none sm:text-[5.5rem]">
              {hydrated && state.profile.name ? (
                <>
                  Hello, <em className="italic">{state.profile.name}</em>
                </>
              ) : (
                <>
                  Hello, <em className="italic">reader</em>
                </>
              )}
            </h1>
            <form
              className="mt-8 flex max-w-md items-center gap-2 rounded-full bg-white/10 p-1.5 ring-1 ring-white/15 focus-within:ring-white/50"
              onSubmit={(e) => {
                e.preventDefault();
                save();
              }}
            >
              <label htmlFor="name" className="sr-only">
                Your name
              </label>
              <input
                id="name"
                value={hydrated ? name : ""}
                onChange={(e) => setDraft(e.target.value)}
                placeholder="What should we call you?"
                autoComplete="given-name"
                className="min-w-0 flex-1 bg-transparent px-4 py-2 text-base text-white placeholder:text-white/45 focus:outline-none"
              />
              <button type="submit" className="btn bg-white text-black hover:bg-cream">
                Save
              </button>
            </form>
            <p className="mt-3 h-5 text-sm text-white/60" aria-live="polite">
              {message}
            </p>
          </div>
        </section>

        {/* stats */}
        <section className="mt-4 grid gap-4 lg:grid-cols-[1.1fr_1fr]">
          <div className="rounded-[1.75rem] bg-white p-6 sm:p-8">
            <p className="display text-[1.8rem] text-black">The last five weeks</p>
            <p className="mt-1 text-sm text-ink-3">Every square is a day; filled means you spent time with that day's work.</p>
            <div className="mt-6 grid max-w-sm grid-cols-7 gap-1.5">
              {cells.map((c) => (
                <span
                  key={c.key}
                  title={c.key}
                  className={`aspect-square rounded-md ${c.on ? "bg-terracotta" : c.key === todayKey ? "bg-black/15 ring-2 ring-black" : "bg-black/[0.06]"}`}
                />
              ))}
            </div>
            <dl className="mt-8 grid grid-cols-3 gap-4">
              <Stat label="day streak" value={hydrated ? streak(state.visits, todayKey) : "–"} />
              <Stat label="days read" value={hydrated ? days : "–"} />
              <Stat label="quiz accuracy" value={hydrated && answered ? `${Math.round((right / answered) * 100)}%` : "–"} />
            </dl>
          </div>

          <div className="rounded-[1.75rem] bg-white p-6 sm:p-8">
            <p className="display text-[1.8rem] text-black">What you&rsquo;ve met</p>
            <p className="mt-1 text-sm text-ink-3">
              {hydrated ? seen.size : "–"} of {total} works, by movement.
            </p>
            {/* progress ring */}
            <div className="mt-6 flex items-center gap-6">
              <svg viewBox="0 0 120 120" className="h-28 w-28 shrink-0 -rotate-90" aria-hidden="true">
                <circle cx="60" cy="60" r="50" fill="none" stroke="rgb(0 0 0 / 0.07)" strokeWidth="14" />
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  fill="none"
                  stroke="var(--color-cobalt)"
                  strokeWidth="14"
                  strokeLinecap="round"
                  strokeDasharray={`${(hydrated ? seen.size / total : 0) * 314.16} 314.16`}
                />
              </svg>
              <ul className="min-w-0 flex-1 space-y-2">
                {movementRows.length === 0 && <li className="hand text-lg text-ink-3">nothing yet: start with today&rsquo;s edition</li>}
                {movementRows.slice(0, 6).map((r) => (
                  <li key={r.name} className="text-[0.8125rem]">
                    <div className="flex justify-between">
                      <span>{r.name}</span>
                      <span className="text-ink-3">{r.n}</span>
                    </div>
                    <div className="mt-1 h-1.5 rounded-full bg-black/[0.06]">
                      <div className="h-full rounded-full" style={{ width: `${(r.n / maxN) * 100}%`, background: r.color }} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* data */}
        <section className="mt-4 rounded-[1.75rem] border border-black/[0.07] bg-white p-6 sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <p className="display text-[1.8rem] text-black">Your data</p>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-2">
                Everything lives in this browser; there&rsquo;s no sign-in yet and nothing is sent anywhere. To move to another
                device, download your journal here and import it there.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <button type="button" onClick={download} className="btn btn-ink">
                Download journal
              </button>
              <button type="button" onClick={() => fileRef.current?.click()} className="btn border border-black/15 bg-white text-black hover:bg-paper">
                Import journal
              </button>
              <input
                ref={fileRef}
                type="file"
                accept="application/json,.json"
                className="hidden"
                onChange={async (e) => {
                  const f = e.target.files?.[0];
                  if (!f) return;
                  flash(journal.import(await f.text()) ? "Journal imported and merged." : "That file isn't an Articulated journal.");
                  e.target.value = "";
                }}
              />
              <button
                type="button"
                onClick={() => {
                  if (confirm("Clear your name, saved works, visits and quiz results from this browser? This can't be undone.")) journal.reset();
                }}
                className="btn text-terracotta hover:bg-terracotta/10"
              >
                Clear everything
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function Stat({ label, value }: { label: string; value: string | number }) {
  return (
    <div>
      <dt className="sr-only">{label}</dt>
      <dd className="display text-[2.6rem] leading-none text-black">{value}</dd>
      <p className="mt-1 text-[0.8125rem] text-ink-3">{label}</p>
    </div>
  );
}
