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
      className={`inline-flex items-center justify-center gap-3 rounded-full border px-5 py-3 text-sm font-semibold transition duration-200 ${
        active
          ? "border-accent bg-accent text-white hover:bg-accent/92"
          : "border-line bg-white/82 text-foreground hover:bg-white"
      }`}
      onClick={onClick}
      type="button"
    >
      <HeartIcon filled={active} />
      <span>{active ? "Saved to favorites" : "Save to favorites"}</span>
      <span
        className={`rounded-full px-2 py-0.5 text-xs ${
          active ? "bg-white/18 text-white" : "bg-accent-soft text-muted"
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
      className="size-4"
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
