"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import type { Media } from "@/lib/collection";
import { srcSet } from "@/lib/media";

type Props = {
  media: Media;
  alt: string;
  sizes: string;
  className?: string;
  priority?: boolean;
  /** show the magnifying glass on hover and open the viewer on click */
  interactive?: boolean;
};

const LOUPE = 180;
const ZOOM = 2.6;

export function Painting({ media, alt, sizes, className = "", priority, interactive }: Props) {
  const imgRef = useRef<HTMLImageElement>(null);
  const [lens, setLens] = useState<{ x: number; y: number; w: number; h: number } | null>(null);
  const [open, setOpen] = useState(false);

  const onMove = useCallback((e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    const r = imgRef.current?.getBoundingClientRect();
    if (!r) return;
    setLens({ x: e.clientX - r.left, y: e.clientY - r.top, w: r.width, h: r.height });
  }, []);

  const img = (
    <img
      ref={imgRef}
      src={media.src["960"]}
      srcSet={srcSet(media)}
      sizes={sizes}
      alt={alt}
      width={media.width}
      height={media.height}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
      className="block h-full w-full object-contain"
      style={{ backgroundColor: media.palette[0] }}
    />
  );

  if (!interactive) return <div className={className}>{img}</div>;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        onPointerMove={onMove}
        onPointerLeave={() => setLens(null)}
        className={`group relative block cursor-zoom-in ${className}`}
        aria-label={`Open ${alt} in the viewer`}
      >
        {img}
        {lens && (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute z-10 hidden rounded-full border-[3px] border-white/80 shadow-[0_18px_40px_-10px_rgb(0_0_0/0.5),inset_0_0_0_1px_rgb(0_0_0/0.08),inset_0_10px_24px_rgb(255_255_255/0.35)] md:block"
            style={{
              width: LOUPE,
              height: LOUPE,
              left: lens.x - LOUPE / 2,
              top: lens.y - LOUPE / 2,
              backgroundImage: `url(${media.src["1920"]})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: `${lens.w * ZOOM}px ${lens.h * ZOOM}px`,
              backgroundPosition: `${-(lens.x * ZOOM - LOUPE / 2)}px ${-(lens.y * ZOOM - LOUPE / 2)}px`
            }}
          />
        )}
      </button>
      {open && createPortal(<Viewer media={media} alt={alt} onClose={() => setOpen(false)} />, document.body)}
    </>
  );
}

/** Full-screen viewer: click or tap to zoom, drag to pan, Esc to close */
function Viewer({ media, alt, onClose }: { media: Media; alt: string; onClose: () => void }) {
  const [zoomed, setZoomed] = useState(false);
  const [origin, setOrigin] = useState({ x: 50, y: 50 });
  const dialogRef = useRef<HTMLDivElement>(null);
  const drag = useRef<{ moved: boolean } | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  const point = (e: React.PointerEvent<HTMLImageElement>) => {
    // measure against the unscaled container so panning stays stable while zoomed
    const r = (e.currentTarget.parentElement ?? e.currentTarget).getBoundingClientRect();
    return {
      x: Math.min(100, Math.max(0, ((e.clientX - r.left) / r.width) * 100)),
      y: Math.min(100, Math.max(0, ((e.clientY - r.top) / r.height) * 100))
    };
  };

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      tabIndex={-1}
      className="fixed inset-0 z-[90] flex items-center justify-center bg-[#1d1915]/92 backdrop-blur-xl outline-none"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between p-4 text-cream/80">
        <span className="eyebrow">{zoomed ? "Move to explore · click to zoom out" : "Click anywhere to zoom in"}</span>
        <button type="button" onClick={onClose} className="glass-dark btn">
          Close <span aria-hidden>×</span>
        </button>
      </div>
      <div className="h-full w-full overflow-hidden p-4 pt-16 sm:p-10 sm:pt-16">
        <img
          src={media.src["1920"]}
          alt={alt}
          className="mx-auto h-full w-full touch-none select-none object-contain transition-transform duration-500 ease-[var(--ease-out-soft)]"
          style={{ transform: zoomed ? "scale(2.8)" : "scale(1)", transformOrigin: `${origin.x}% ${origin.y}%`, cursor: zoomed ? "zoom-out" : "zoom-in" }}
          draggable={false}
          onPointerDown={() => (drag.current = { moved: false })}
          onPointerMove={(e) => {
            if (!zoomed) return;
            if (e.pointerType === "mouse" || drag.current) {
              if (drag.current) drag.current.moved = true;
              setOrigin(point(e));
            }
          }}
          onPointerUp={(e) => {
            const moved = drag.current?.moved && e.pointerType !== "mouse";
            drag.current = null;
            if (moved) return;
            if (!zoomed) setOrigin(point(e));
            setZoomed((z) => !z);
          }}
        />
      </div>
    </div>
  );
}
