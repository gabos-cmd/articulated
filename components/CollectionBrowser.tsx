"use client";

import { type ReactNode, useMemo, useState } from "react";

type M = { id: string; name: string; span: string; color: string };
type W = { slug: string; movement: string; year: number };

const centuryName = (y: number) => {
  const c = Math.floor(y / 100) + 1;
  return `${c}th century`;
};

export function CollectionBrowser({ movements, works, tiles }: { movements: M[]; works: W[]; tiles: Record<string, ReactNode> }) {
  const [filter, setFilter] = useState<string | null>(null);
  const shown = useMemo(() => works.filter((w) => !filter || w.movement === filter), [works, filter]);
  const groups = useMemo(() => {
    const g = new Map<string, W[]>();
    for (const w of shown) g.set(centuryName(w.year), [...(g.get(centuryName(w.year)) ?? []), w]);
    return [...g.entries()];
  }, [shown]);
  const active = movements.find((m) => m.id === filter);

  return (
    <>
      <div className="sticky top-[4.6rem] z-30 -mx-2 mt-10 px-2">
        <div className="glass scrollbar-none flex gap-1.5 overflow-x-auto rounded-full p-1.5">
          <Chip active={!filter} onClick={() => setFilter(null)} color="var(--color-ink)">
            All works
          </Chip>
          {movements.map((m) => (
            <Chip key={m.id} active={filter === m.id} onClick={() => setFilter(filter === m.id ? null : m.id)} color={m.color}>
              {m.name}
            </Chip>
          ))}
        </div>
      </div>

      {active && (
        <p className="rise mt-8 text-[1rem] text-ink-2">
          <span className="display text-xl text-ink">{active.name}</span> · {active.span} · {shown.length} {shown.length === 1 ? "work" : "works"}
        </p>
      )}

      {groups.map(([century, list]) => (
        <section key={century} className="pt-16">
          <h2 className="display flex items-center gap-4 text-[2rem] sm:text-[2.5rem]">
            <span>
              The <em className="italic">{century}</em>
            </span>
            <span className="h-px flex-1 bg-ink/15" />
            <span className="font-sans text-sm text-ink-3">{list.length}</span>
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-3 lg:grid-cols-4">
            {list.map((w) => (
              <div key={w.slug}>{tiles[w.slug]}</div>
            ))}
          </div>
        </section>
      ))}
    </>
  );
}

function Chip({ active, onClick, color, children }: { active: boolean; onClick: () => void; color: string; children: ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full px-3.5 py-2 text-[0.8125rem] font-medium transition-colors ${
        active ? "bg-ink text-cream" : "text-ink-2 hover:bg-white/70"
      }`}
    >
      <span className="h-2.5 w-2.5 rounded-full" style={{ background: color }} />
      {children}
    </button>
  );
}
