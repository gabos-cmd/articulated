type FavoriteButtonProps = {
  active: boolean;
  count: number;
  onClick: () => void;
};

export function FavoriteButton({
  active,
  count,
  onClick
}: FavoriteButtonProps) {
  return (
    <button
      className={`inline-flex min-h-11 items-center justify-center gap-2.5 rounded-full border px-5 py-3 text-sm font-medium backdrop-blur-md transition duration-200 ${
        active
          ? "border-black/70 bg-black text-white shadow-[0_16px_36px_rgba(17,17,17,0.18)] hover:bg-black/88"
          : "border-white/80 bg-white/66 text-foreground shadow-[0_12px_32px_rgba(17,17,17,0.08)] hover:bg-white/82"
      }`}
      onClick={onClick}
      type="button"
    >
      <HeartIcon filled={active} />
      <span>{active ? "Saved to favorites" : "Save to favorites"}</span>
      <span
        className={`rounded-full px-2 py-0.5 text-xs ${
          active ? "bg-white/14 text-white" : "bg-black/[0.05] text-muted"
        }`}
      >
        {count}
      </span>
    </button>
  );
}

function HeartIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="size-[15px]"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      <path
        d="M12 21s-6.6-4.35-9.27-8.06C.63 9.98 2.3 5.5 6.36 4.83 8.4 4.5 10.08 5.26 12 7.2c1.92-1.94 3.6-2.7 5.64-2.37 4.05.67 5.72 5.15 3.63 8.11C18.6 16.65 12 21 12 21Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
