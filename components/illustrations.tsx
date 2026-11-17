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

function Cypress({ x, y, h, w, color, seed }: { x: number; y: number; h: number; w: number; color: string; seed: number }) {
  const rand = rng(seed);
  const lean = (rand() - 0.5) * 10;
  return (
    <path
      fill={color}
      d={`M${x - w / 2} ${y} C ${x - w * 0.62} ${y - h * 0.35}, ${x - w * 0.35} ${y - h * 0.75}, ${x + lean} ${y - h} C ${x + w * 0.35} ${y - h * 0.75}, ${x + w * 0.62} ${y - h * 0.35}, ${x + w / 2} ${y} Z`}
    />
  );
}

function Temple({ x, y, s = 1, color }: { x: number; y: number; s?: number; color: string }) {
  const cols = [0, 1, 2, 3, 4, 5];
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`} fill={color}>
      <path d="M-70 -78 L0 -112 L70 -78 Z" />
      <rect x="-74" y="-78" width="148" height="10" />
      {cols.map((i) => (
        <rect key={i} x={-62 + i * 23} y="-66" width="10" height="56" rx="1" />
      ))}
      <rect x="-78" y="-10" width="156" height="6" />
      <rect x="-86" y="-4" width="172" height="6" />
    </g>
  );
}

/** Night landscape at the foot of every page: the next edition arrives at midnight */
export function Nocturne({ className }: { className?: string }) {
  const id = "noct";
  const rand = rng(5);
  const stars = Array.from({ length: 70 }, () => ({
    x: Math.round(rand() * 1440),
    y: Math.round(rand() * 250),
    r: Math.round((0.6 + rand() * 1.6) * 10) / 10,
    o: Math.round((0.35 + rand() * 0.6) * 100) / 100
  }));
  return (
    <svg viewBox="0 0 1440 520" preserveAspectRatio="xMidYMax slice" className={className} aria-hidden="true">
      <InkFilters id={id} />
      <g fill="#fbf3e2">
        {stars.map((st, i) => (
          <circle key={i} cx={st.x} cy={st.y} r={st.r} opacity={st.o} />
        ))}
      </g>
      {/* moon with a halo of swirls */}
      <g filter={`url(#${id}-rough)`}>
        <g transform="translate(-420 90)">
          <circle cx="1130" cy="120" r="78" fill="none" stroke="#e9b949" strokeWidth="5" opacity="0.35" />
          <circle cx="1130" cy="120" r="104" fill="none" stroke="#e9b949" strokeWidth="3" opacity="0.18" />
          <path d="M1158 66 A 56 56 0 1 0 1176 160 A 46 46 0 1 1 1158 66 Z" fill="#e9b949" />
        </g>
        <path d="M120 160 C 260 120, 420 150, 560 128 C 460 160, 300 150, 130 176 Z" fill="#3150d0" opacity="0.55" />
        <path d="M620 92 C 720 70, 820 84, 900 74 C 830 96, 720 96, 630 106 Z" fill="#3150d0" opacity="0.45" />
      </g>
      {/* far hills */}
      <g filter={`url(#${id}-rough)`}>
        <path d="M-40 320 C 80 250, 200 240, 320 290 C 420 330, 520 270, 640 286 C 780 300, 860 240, 1000 250 C 1140 262, 1220 300, 1320 280 C 1400 266, 1440 270, 1480 276 L1480 560 L-40 560 Z" fill="#3150d0" />
        <path d="M-40 390 C 140 360, 300 380, 460 366 C 620 352, 760 360, 860 330 C 930 300, 1010 282, 1090 300 C 1200 330, 1320 370, 1480 362 L1480 560 L-40 560 Z" fill="#79a6dc" />
      </g>
      {/* temple on the hill */}
      <g filter={`url(#${id}-rough)`}>
        <Temple x={980} y={296} s={0.62} color="#fbf3e2" />
      </g>
      {/* river with moonlight */}
      <g filter={`url(#${id}-rough)`}>
        <path d="M-40 430 C 300 404, 700 420, 1000 404 C 1200 394, 1360 400, 1480 396 L1480 446 C 1200 450, 900 470, 500 462 C 300 458, 120 466, -40 470 Z" fill="#1d2a6b" />
        <g fill="#e9b949" opacity="0.85">
          <path d="M650 414 h70 v4 h-70 z" />
          <path d="M670 426 h44 v4 h-44 z" />
          <path d="M640 438 h86 v4 h-86 z" />
        </g>
      </g>
      {/* near bank */}
      <g filter={`url(#${id}-rough)`}>
        <path d="M-40 466 C 200 450, 520 468, 800 458 C 1060 450, 1260 470, 1480 456 L1480 560 L-40 560 Z" fill="#8da867" />
        <path d="M-40 500 C 300 486, 640 506, 960 494 C 1180 486, 1340 496, 1480 490 L1480 560 L-40 560 Z" fill="#e2714a" />
      </g>
      <g filter={`url(#${id}-leafy)`}>
        <Cypress x={150} y={476} h={210} w={50} color="#14321f" seed={2} />
        <Cypress x={205} y={480} h={150} w={38} color="#1d4029" seed={3} />
        <Cypress x={1300} y={470} h={170} w={42} color="#14321f" seed={4} />
        <Cypress x={1350} y={472} h={120} w={32} color="#1d4029" seed={6} />
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

/** Brandmark: a round painter's palette with colours swirling into each other */
export function PaletteMark({ className, id = "pm" }: { className?: string; id?: string }) {
  const blobs = [
    { cx: 15, cy: 17, r: 17, c: "#3150d0" },
    { cx: 50, cy: 14, r: 16, c: "#e2714a" },
    { cx: 53, cy: 46, r: 17, c: "#eba2b6" },
    { cx: 22, cy: 54, r: 14, c: "#8da867" },
    { cx: 34, cy: 33, r: 11, c: "#79a6dc" },
    { cx: 32, cy: 4, r: 11, c: "#e9b949" },
    { cx: 4, cy: 38, r: 9, c: "#e9b949" }
  ];
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <clipPath id={`${id}-clip`}>
          <circle cx="32" cy="32" r="30" />
        </clipPath>
        <filter id={`${id}-mix`} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2.4" result="soft" />
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="2" seed="11" result="swirl" />
          <feDisplacementMap in="soft" in2="swirl" scale="20" xChannelSelector="R" yChannelSelector="G" />
        </filter>
        <radialGradient id={`${id}-shine`} cx="0.3" cy="0.25" r="0.6">
          <stop offset="0" stopColor="#fff" stopOpacity="0.55" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <g clipPath={`url(#${id}-clip)`}>
        <rect width="64" height="64" fill="#e9b949" />
        <g filter={`url(#${id}-mix)`}>
          {blobs.map((b, i) => (
            <circle key={i} cx={b.cx} cy={b.cy} r={b.r} fill={b.c} />
          ))}
        </g>
        <rect width="64" height="64" fill={`url(#${id}-shine)`} />
        <circle cx="21" cy="45" r="5.2" fill="#fff" stroke="#111" strokeWidth="1.3" />
      </g>
      <circle cx="32" cy="32" r="30" fill="none" stroke="#111" strokeWidth="1.6" />
    </svg>
  );
}
