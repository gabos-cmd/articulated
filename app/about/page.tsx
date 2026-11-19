import type { Metadata } from "next";
import Link from "next/link";

import { SpotEye, SpotLaurel } from "@/components/illustrations";
import { PageHeader } from "@/components/PageHeader";
import { artworks } from "@/lib/collection";

export const metadata: Metadata = { title: "About", description: "Why Articulated exists and how it works." };

const how = [
  { t: "One work a day", d: "A new edition at midnight (UTC). The same artwork for everyone, all day.", tint: "var(--color-sky)" },
  { t: "Five slow minutes", d: "The story, three things to notice, the artist, the world around it.", tint: "var(--color-ochre)" },
  { t: "Three questions", d: "A tiny quiz at the end, because recalling something is how it sticks.", tint: "var(--color-rose)" },
  { t: "A journal", d: "Save works, keep a streak, and see what you've learned. All in your browser.", tint: "var(--color-moss)" }
];

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        eyebrow="About"
        title={
          <>
            A daily museum <em className="italic">moment</em>
          </>
        }
        intro="Articulated shows you one great artwork a day and gives you just enough context to really see it."
        art={<SpotEye className="h-24 w-36 sm:h-28 sm:w-44" />}
        tint="var(--color-lilac)"
      />

      <div className="mx-auto max-w-[1180px] px-5 sm:px-10">
        <section className="grid gap-4 pt-16 sm:grid-cols-2 lg:grid-cols-4">
          {how.map((h, i) => (
            <div key={h.t} className="rounded-[1.5rem] p-6" style={{ background: `color-mix(in oklab, ${h.tint} 30%, var(--color-card))` }}>
              <span className="numeral text-3xl text-ink-3">{i + 1}.</span>
              <h2 className="display display-sm mt-3 text-[1.25rem]">{h.t}</h2>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-2">{h.d}</p>
            </div>
          ))}
        </section>

        <section className="mx-auto max-w-3xl pt-24">
          <div className="paper relative rotate-[-0.6deg] rounded-sm px-7 py-10 shadow-[0_30px_60px_-30px_rgb(42_37_32/0.45)] sm:px-14 sm:py-16">
            <span className="tape -top-3 left-10 -rotate-6" style={{ "--tape": "var(--color-rose)" } as React.CSSProperties} />
            <span className="tape -top-3 right-10 rotate-6" style={{ "--tape": "var(--color-sky)" } as React.CSSProperties} />
            <div className="prose-serif space-y-6 text-[1.2rem] leading-[1.7] text-ink">
              <p className="hand text-[1.7rem] leading-none">Hello, dear reader,</p>
              <p>
                Articulated is a small project I built myself with the help of AI tools. I&rsquo;ve always wanted to know more about
                great artworks and the history behind them, so I made something to help me do that, a few minutes at a time.
              </p>
              <p>
                The idea is simple: <em>one artwork a day</em>. Every morning there&rsquo;s a new piece, with the story behind it,
                a few details worth slowing down for, and a sense of what the world looked like when it was made. Do it for a while
                and you start to see connections between painters, centuries and ideas.
              </p>
              <p>Thanks for spending some time in this little corner of the internet.</p>
              <p className="hand text-[2.2rem] leading-none">Gabriel</p>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-3xl gap-8 pt-24 sm:grid-cols-[auto_1fr]">
          <SpotLaurel className="h-24 w-24" />
          <div className="text-[0.9375rem] leading-relaxed text-ink-2">
            <h2 className="display text-[1.45rem] text-ink">Sources & credits</h2>
            <p className="mt-3">
              The collection holds {artworks.length} works, all in the public domain. Images come from{" "}
              <a className="link-underline" href="https://commons.wikimedia.org" target="_blank" rel="noreferrer">
                Wikimedia Commons
              </a>{" "}
              and short artist biographies from{" "}
              <a className="link-underline" href="https://en.wikipedia.org" target="_blank" rel="noreferrer">
                Wikipedia
              </a>{" "}
              (CC BY-SA). Each artwork page links to its sources. The essays, notes and questions are written for Articulated.
            </p>
            <p className="mt-4">
              Spotted a mistake? Every page links to its sources, and corrections are always welcome. <Link className="link-underline" href="/collection">Browse the collection →</Link>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
