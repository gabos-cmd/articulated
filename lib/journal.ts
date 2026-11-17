"use client";

import { useSyncExternalStore } from "react";

/** Everything the reader does lives in their browser. */
export type JournalState = {
  profile: { name: string; since: string | null };
  saved: string[];
  /** dateKey -> slug seen that day */
  visits: Record<string, string>;
  /** slug -> answers given (index per question) */
  quizzes: Record<string, { answers: number[]; correct: number; total: number }>;
};

const KEY = "articulated:journal:v2";
const LEGACY_KEY = "articulated-favorites";
const EMPTY: JournalState = { profile: { name: "", since: null }, saved: [], visits: {}, quizzes: {} };

let cache: JournalState | null = null;
const listeners = new Set<() => void>();

function read(): JournalState {
  if (cache) return cache;
  try {
    const raw = window.localStorage.getItem(KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as Partial<JournalState>;
      cache = { ...EMPTY, ...parsed, profile: { ...EMPTY.profile, ...(parsed.profile ?? {}) } };
    } else {
      // migrate favourites from the first version of the app
      const legacy = window.localStorage.getItem(LEGACY_KEY);
      const saved = legacy ? (JSON.parse(legacy) as { id: string }[]).map((f) => f.id) : [];
      cache = { ...EMPTY, saved };
    }
  } catch {
    cache = EMPTY;
  }
  return cache;
}

function write(next: JournalState) {
  cache = next;
  try {
    window.localStorage.setItem(KEY, JSON.stringify(next));
  } catch {
    /* private mode – keep in memory */
  }
  listeners.forEach((l) => l());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  const onStorage = (e: StorageEvent) => {
    if (e.key === KEY) {
      cache = null;
      listener();
    }
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

export function useJournal() {
  const state = useSyncExternalStore(subscribe, read, () => EMPTY);
  const hydrated = useSyncExternalStore(subscribe, () => true, () => false);
  return { state, hydrated };
}

export const journal = {
  toggleSaved(slug: string) {
    const s = read();
    write({ ...s, saved: s.saved.includes(slug) ? s.saved.filter((x) => x !== slug) : [slug, ...s.saved] });
  },
  recordVisit(key: string, slug: string) {
    const s = read();
    if (s.visits[key] === slug) return;
    write({ ...s, visits: { ...s.visits, [key]: slug } });
  },
  recordQuiz(slug: string, answers: number[], correct: number, total: number) {
    const s = read();
    write({ ...s, quizzes: { ...s.quizzes, [slug]: { answers, correct, total } } });
  },
  setName(name: string) {
    const s = read();
    write({ ...s, profile: { name: name.slice(0, 40), since: s.profile.since ?? new Date().toISOString().slice(0, 10) } });
  },
  export(): string {
    return JSON.stringify({ app: "articulated", version: 2, exportedAt: new Date().toISOString(), journal: read() }, null, 2);
  },
  /** returns false when the file isn't an Articulated journal */
  import(text: string): boolean {
    try {
      const parsed = JSON.parse(text) as { app?: string; journal?: Partial<JournalState> };
      if (parsed.app !== "articulated" || !parsed.journal) return false;
      const j = parsed.journal;
      const cur = read();
      write({
        profile: j.profile?.name ? j.profile : cur.profile,
        saved: [...new Set([...(j.saved ?? []), ...cur.saved])],
        visits: { ...(j.visits ?? {}), ...cur.visits },
        quizzes: { ...(j.quizzes ?? {}), ...cur.quizzes }
      });
      return true;
    } catch {
      return false;
    }
  },
  reset() {
    write(EMPTY);
  }
};

/** consecutive days (ending today or yesterday) with a visit */
export function streak(visits: Record<string, string>, todayKey: string) {
  const day = (k: string) => Math.round(Date.parse(`${k}T00:00:00Z`) / 86_400_000);
  const days = new Set(Object.keys(visits).map(day));
  let d = day(todayKey);
  if (!days.has(d)) d -= 1;
  let n = 0;
  while (days.has(d)) {
    n++;
    d--;
  }
  return n;
}
