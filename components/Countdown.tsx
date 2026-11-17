"use client";

import { useEffect, useState } from "react";

/** Time until the next edition (midnight UTC) */
export function Countdown() {
  const [left, setLeft] = useState<string | null>(null);
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const next = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + 1);
      const s = Math.max(0, Math.floor((next - now.getTime()) / 1000));
      const p = (n: number) => String(n).padStart(2, "0");
      setLeft(`${p(Math.floor(s / 3600))}:${p(Math.floor((s % 3600) / 60))}:${p(s % 60)}`);
    };
    tick();
    const t = setInterval(tick, 1000);
    return () => clearInterval(t);
  }, []);
  return <span className="font-mono tabular-nums">{left ?? "--:--:--"}</span>;
}
