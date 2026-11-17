"use client";

import { useEffect, useState } from "react";

import { SpotLaurel } from "@/components/illustrations";
import type { Quiz as QuizItem } from "@/data/types";
import { journal, useJournal } from "@/lib/journal";

const letters = ["A", "B", "C", "D"];

export function Quiz({ slug, questions }: { slug: string; questions: QuizItem[] }) {
  const { state, hydrated } = useJournal();
  const previous = state.quizzes[slug];
  const [answers, setAnswers] = useState<(number | null)[]>(() => questions.map(() => null));

  // restore an earlier attempt
  useEffect(() => {
    if (hydrated && previous) setAnswers(questions.map((_, i) => previous.answers[i] ?? null));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hydrated, slug]);

  const done = answers.every((a) => a !== null);
  const correct = answers.filter((a, i) => a === questions[i].answer).length;

  const choose = (qi: number, oi: number) => {
    if (answers[qi] !== null) return;
    const next = answers.map((a, i) => (i === qi ? oi : a));
    setAnswers(next);
    if (next.every((a) => a !== null)) {
      const score = next.filter((a, i) => a === questions[i].answer).length;
      journal.recordQuiz(slug, next as number[], score, questions.length);
    }
  };

  return (
    <div className="space-y-4">
      {questions.map((q, qi) => {
        const picked = answers[qi];
        return (
          <fieldset key={qi} className="rounded-[1.5rem] bg-white p-5 shadow-[0_1px_2px_rgb(0_0_0/0.05)] sm:p-7">
            <legend className="sr-only">Question {qi + 1}</legend>
            <div className="relative flex items-baseline gap-3">
              <span className="numeral text-2xl text-ink-3">{qi + 1}.</span>
              <p className="display text-[1.6rem] leading-tight text-black sm:text-[1.9rem]">{q.question}</p>
            </div>
            <div className="relative mt-5 grid gap-2 sm:grid-cols-2">
              {q.options.map((opt, oi) => {
                const isAnswer = oi === q.answer;
                const isPicked = picked === oi;
                const reveal = picked !== null;
                let tone = "bg-white border-black/12 hover:border-black hover:bg-paper/60";
                if (reveal && isAnswer) tone = "bg-black text-white border-black";
                else if (reveal && isPicked) tone = "bg-terracotta text-white border-terracotta line-through decoration-white/60";
                else if (reveal) tone = "bg-white text-ink-3 border-black/5";
                return (
                  <button
                    key={oi}
                    type="button"
                    disabled={reveal}
                    onClick={() => choose(qi, oi)}
                    className={`flex items-start gap-3 rounded-2xl border px-4 py-3 text-left text-[0.9375rem] leading-snug transition-[background-color,transform] duration-200 active:scale-[0.985] ${tone}`}
                  >
                    <span className="mt-px font-mono text-xs opacity-60">{letters[oi]}</span>
                    <span>{opt}</span>
                  </button>
                );
              })}
            </div>
            {picked !== null && (
              <p className="rise relative mt-4 border-t border-ink/10 pt-4 text-[0.9375rem] leading-relaxed text-ink-2">
                <span className="hand mr-1.5 text-xl text-ink">{picked === q.answer ? "Yes!" : "Not quite."}</span>
                {q.explanation}
              </p>
            )}
          </fieldset>
        );
      })}

      {done && (
        <div className="rise flex items-center gap-5 rounded-[1.5rem] bg-black px-6 py-5 text-white">
          <span className="shrink-0 rounded-full bg-cream p-2">
            <SpotLaurel className="h-12 w-12" />
          </span>
          <div>
            <p className="display text-2xl">
              {correct} of {questions.length}
              {correct === questions.length ? ". Perfect." : correct === 0 ? ". Tomorrow's another one." : ". Nicely done."}
            </p>
            <p className="mt-1 text-sm text-cream/70">Saved to your journal. Come back tomorrow for the next edition.</p>
          </div>
        </div>
      )}
    </div>
  );
}
