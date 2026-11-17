/* Hand-built SVG illustrations in a risograph / linocut spirit:
   flat inks, roughened edges, slight mis-registration between fill and line. */

import type { SVGProps } from "react";

function rng(seed: number) {
  return () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };
}

/** Roughen + speckle filter shared by the big landscape */
function InkFilters({ id }: { id: string }) {
  return (
    <defs>
      <filter id={`${id}-rough`} x="-5%" y="-5%" width="110%" height="110%">
        <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="2" seed="4" result="warp" />
        <feDisplacementMap in="SourceGraphic" in2="warp" scale="9" xChannelSelector="R" yChannelSelector="G" result="rough" />
        <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="1" seed="9" result="noise" />
        <feColorMatrix in="noise" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -1.6 1.75" result="holes" />
        <feComposite in="rough" in2="holes" operator="in" />
      </filter>
      <filter id={`${id}-leafy`} x="-10%" y="-10%" width="120%" height="120%">
        <feTurbulence type="fractalNoise" baseFrequency="0.09" numOctaves="3" seed="2" result="warp" />
        <feDisplacementMap in="SourceGraphic" in2="warp" scale="16" xChannelSelector="R" yChannelSelector="G" result="rough" />
        <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="1" seed="5" result="noise" />
        <feColorMatrix in="noise" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -1.4 1.6" result="holes" />
        <feComposite in="rough" in2="holes" operator="in" />
      </filter>
    </defs>
  );
}

function Shrubs({ x0, x1, y, r, seed, color }: { x0: number; x1: number; y: number; r: number; seed: number; color: string }) {
  const rand = rng(seed);
  const blobs: { cx: number; cy: number; r: number }[] = [];
  for (let x = x0; x < x1; x += r * (0.7 + rand() * 0.6)) {
    const rr = r * (0.6 + rand() * 0.8);
    blobs.push({ cx: x, cy: y - rr * (0.3 + rand() * 0.5), r: rr });
  }
  return (
    <g fill={color}>
      {blobs.map((b, i) => (
        <circle key={i} cx={b.cx} cy={b.cy} r={b.r} />
      ))}
      <rect x={x0 - r} y={y - r * 0.4} width={x1 - x0 + r * 2} height={r * 2} />
    </g>
  );
}

function Tree({ x, y, scale = 1, color, seed }: { x: number; y: number; scale?: number; color: string; seed: number }) {
  const rand = rng(seed);
  const leaves: { cx: number; cy: number; r: number }[] = [];
  for (let i = 0; i < 60; i++) {
    const a = rand() * Math.PI * 2;
    const d = Math.sqrt(rand());
    leaves.push({
      cx: Math.cos(a) * d * 84,
      cy: -138 + Math.sin(a) * d * 62 - (1 - d) * 14,
      r: 16 + rand() * 20
    });
  }
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`} fill={color}>
      <path d="M-14 4 C-9 -30 -12 -60 -7 -100 L7 -100 C11 -60 8 -30 15 4 Z" />
      <path d="M-4 -60 C-24 -78 -36 -96 -48 -116 L-38 -122 C-26 -102 -14 -86 2 -72 Z" />
      <path d="M2 -70 C20 -86 34 -102 46 -124 L56 -118 C42 -96 26 -78 8 -60 Z" />
      {leaves.map((l, i) => (
        <circle key={i} cx={l.cx} cy={l.cy} r={l.r} />
      ))}
    </g>
  );
}

/** Wide landscape used at the foot of every page */
export function Landscape({ className, ...props }: SVGProps<SVGSVGElement>) {
  const id = "land";
  const cream = "#fbf3e2";
  const blue = "#5f8fd0";
  const orange = "#ef7d4f";
  const green = "#9db06e";
  return (
    <svg viewBox="0 0 1440 560" preserveAspectRatio="xMidYMax slice" className={className} aria-hidden="true" {...props}>
      <InkFilters id={id} />
      {/* clouds */}
      <g filter={`url(#${id}-rough)`} fill={cream}>
        <path d="M160 92 C 230 70, 330 78, 390 108 C 330 100, 240 96, 160 104 Z" />
        <ellipse cx="420" cy="196" rx="44" ry="10" />
        <path d="M-40 250 C 0 200, 70 200, 110 222 C 140 168, 260 150, 310 196 C 350 176, 420 186, 430 228 C 470 222, 520 240, 512 268 L 600 268 C 640 250, 700 262, 700 290 L 760 296 L 760 470 L -40 470 Z" />
        <path d="M620 300 C 640 270, 720 262, 760 284 C 790 230, 880 222, 910 270 C 960 240, 1040 250, 1060 290 C 1120 270, 1200 280, 1220 310 C 1280 300, 1380 300, 1480 330 L 1480 470 L 620 470 Z" />
        <path d="M820 202 C 850 180, 880 178, 910 190 C 880 192, 850 200, 830 214 Z" />
      </g>
      {/* sky streaks cut through the clouds */}
      <g filter={`url(#${id}-rough)`} fill="#79a6dc">
        <path d="M190 330 C 300 318, 420 322, 520 330 C 420 336, 300 338, 190 342 Z" />
        <path d="M760 352 C 860 344, 960 344, 1020 350 C 950 356, 860 360, 760 362 Z" />
        <path d="M430 372 C 470 366, 520 368, 560 374 C 520 378, 470 380, 430 380 Z" />
      </g>
      {/* hedgerow */}
      <g filter={`url(#${id}-leafy)`}>
        <Shrubs x0={-20} x1={420} y={470} r={11} seed={3} color={orange} />
        <Shrubs x0={560} x1={1460} y={462} r={17} seed={11} color={orange} />
        <Shrubs x0={1080} x1={1460} y={440} r={22} seed={17} color={orange} />
      </g>
      <g filter={`url(#${id}-leafy)`}>
        <Tree x={250} y={472} scale={1.25} color={blue} seed={21} />
      </g>
      {/* field */}
      <g filter={`url(#${id}-rough)`}>
        <path d="M-40 478 C 300 456, 700 470, 1000 462 C 1200 456, 1360 448, 1480 444 L 1480 600 L -40 600 Z" fill={green} />
        <g fill={cream} opacity="0.9">
          <path d="M-40 512 C 80 500, 180 498, 260 502 C 170 506, 80 512, -40 524 Z" />
          <path d="M520 498 C 700 486, 860 486, 980 492 C 850 498, 700 506, 520 512 Z" />
          <path d="M760 540 C 960 512, 1180 498, 1480 488 L 1480 498 C 1200 512, 980 532, 800 556 Z" />
          <path d="M1040 520 C 1200 506, 1320 502, 1480 506 L 1480 514 C 1320 514, 1200 520, 1060 530 Z" />
          <path d="M300 548 C 420 534, 520 530, 640 532 C 540 540, 420 548, 300 560 Z" />
        </g>
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Spot illustrations: line in ink, fill offset like mis-registered    */
/* riso layers.                                                        */
/* ------------------------------------------------------------------ */

type SpotProps = { className?: string; fill?: string };

/** round so server and client render identical attribute strings */
const r2 = (n: number) => Math.round(n * 100) / 100;

const ink = "#2a2520";

export function SpotSun({ className, fill = "var(--color-ochre)" }: SpotProps) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <circle cx="63" cy="64" r="24" fill={fill} />
      <g fill="none" stroke={ink} strokeWidth="2" strokeLinecap="round">
        <circle cx="60" cy="60" r="24" />
        {Array.from({ length: 12 }, (_, i) => {
          const a = (i / 12) * Math.PI * 2;
          const r1 = 32, rr = i % 2 ? 42 : 48;
          return <line key={i} x1={r2(60 + Math.cos(a) * r1)} y1={r2(60 + Math.sin(a) * r1)} x2={r2(60 + Math.cos(a) * rr)} y2={r2(60 + Math.sin(a) * rr)} />;
        })}
        <path d="M51 56 q3 -3 6 0 M63 56 q3 -3 6 0 M52 68 q8 7 16 0" />
      </g>
    </svg>
  );
}

export function SpotColumn({ className, fill = "var(--color-rose)" }: SpotProps) {
  return (
    <svg viewBox="0 0 120 160" className={className} aria-hidden="true">
      <rect x="40" y="38" width="44" height="100" rx="2" fill={fill} />
      <g fill="none" stroke={ink} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 30 h72 M28 30 c-10 0 -12 -14 0 -14 c8 0 8 9 2 9 M92 30 c10 0 12 -14 0 -14 c-8 0 -8 9 -2 9 M30 18 h60" />
        <path d="M36 34 h48 v4 h-48 z" />
        <path d="M38 38 v96 M82 38 v96 M49 40 v92 M60 40 v92 M71 40 v92" />
        <path d="M32 134 h56 v8 h-56 z M24 142 h72 v8 h-72 z" />
      </g>
    </svg>
  );
}

export function SpotEye({ className, fill = "var(--color-sky)" }: SpotProps) {
  return (
    <svg viewBox="0 0 140 90" className={className} aria-hidden="true">
      <circle cx="74" cy="48" r="20" fill={fill} />
      <g fill="none" stroke={ink} strokeWidth="2" strokeLinecap="round">
        <path d="M10 45 C 40 5, 100 5, 130 45 C 100 85, 40 85, 10 45 Z" />
        <circle cx="70" cy="45" r="20" />
        <circle cx="70" cy="45" r="7" fill={ink} />
        <path d="M24 26 l-8 -10 M44 14 l-4 -12 M70 10 v-12 M96 14 l4 -12 M116 26 l8 -10" />
      </g>
      <circle cx="76" cy="39" r="3" fill="#fff" />
    </svg>
  );
}

export function SpotLaurel({ className, fill = "var(--color-moss)" }: SpotProps) {
  const leaves = Array.from({ length: 7 }, (_, i) => i);
  return (
    <svg viewBox="0 0 160 140" className={className} aria-hidden="true">
      {[-1, 1].map((side) => (
        <g key={side} transform={side === 1 ? "translate(160 0) scale(-1 1)" : undefined}>
          {leaves.map((i) => {
            const t = i / 6;
            const cx = r2(62 - Math.sin(t * 2.2) * 40);
            const cy = r2(120 - t * 96);
            const rot = r2(-30 - t * 60);
            return (
              <g key={i} transform={`translate(${cx} ${cy}) rotate(${rot})`}>
                <ellipse cx="3" cy="2" rx="16" ry="7" fill={fill} />
                <ellipse cx="0" cy="0" rx="16" ry="7" fill="none" stroke={ink} strokeWidth="1.8" />
              </g>
            );
          })}
          <path d="M70 130 C 30 110, 18 60, 44 16" fill="none" stroke={ink} strokeWidth="2" strokeLinecap="round" />
        </g>
      ))}
    </svg>
  );
}

export function SpotMoon({ className, fill = "var(--color-lilac)" }: SpotProps) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <path d="M78 22 A 40 40 0 1 0 98 86 A 32 32 0 1 1 78 22 Z" fill={fill} transform="translate(4 4)" />
      <path d="M78 22 A 40 40 0 1 0 98 86 A 32 32 0 1 1 78 22 Z" fill="none" stroke={ink} strokeWidth="2" strokeLinejoin="round" />
      <g stroke={ink} strokeWidth="2" strokeLinecap="round">
        <path d="M96 30 v10 M91 35 h10 M24 26 v8 M20 30 h8 M104 104 v6 M101 107 h6" />
      </g>
    </svg>
  );
}

export function SpotFrame({ className, fill = "var(--color-terracotta)" }: SpotProps) {
  return (
    <svg viewBox="0 0 140 120" className={className} aria-hidden="true">
      <rect x="30" y="26" width="84" height="66" fill={fill} />
      <g fill="none" stroke={ink} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round">
        <rect x="16" y="12" width="104" height="86" />
        <rect x="26" y="22" width="84" height="66" />
        <path d="M34 80 l20 -24 l14 14 l12 -10 l22 20" />
        <circle cx="88" cy="40" r="7" />
        <path d="M44 98 l-10 18 M92 98 l10 18 M68 12 l0 -8" />
      </g>
    </svg>
  );
}

/** Brandmark: an italic A set inside a riso dab */
export function Brandmark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <circle cx="21.5" cy="21.5" r="16" fill="var(--color-ochre)" />
      <circle cx="19" cy="19" r="16" fill="none" stroke={ink} strokeWidth="1.4" />
      <text x="19.5" y="26.5" textAnchor="middle" fontFamily="var(--font-newsreader), Georgia, serif" fontStyle="italic" fontSize="21" fill={ink}>
        A
      </text>
    </svg>
  );
}
