export default function Loading() {
  return (
    <main className="museum-shell min-h-screen px-5 py-8 md:px-10 md:py-10">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="space-y-4">
          <div className="loading-shimmer h-4 w-32 rounded-full bg-white/60" />
          <div className="loading-shimmer h-16 max-w-2xl rounded-[2rem] bg-white/70" />
          <div className="loading-shimmer h-5 max-w-xl rounded-full bg-white/55" />
        </div>
        <div className="grid gap-6 rounded-[2rem] border border-line bg-surface-strong p-4 card-shadow lg:grid-cols-[1.25fr_0.85fr] lg:p-6">
          <div className="loading-shimmer aspect-[4/5] rounded-[1.5rem] bg-background-strong" />
          <div className="space-y-4 py-2">
            <div className="loading-shimmer h-10 w-3/4 rounded-full bg-white/70" />
            <div className="loading-shimmer h-5 w-1/2 rounded-full bg-white/55" />
            <div className="grid gap-3 sm:grid-cols-2">
              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="loading-shimmer h-20 rounded-[1.25rem] bg-white/60"
                />
              ))}
            </div>
            <div className="loading-shimmer h-28 rounded-[1.5rem] bg-white/60" />
            <div className="flex gap-3">
              <div className="loading-shimmer h-12 flex-1 rounded-full bg-white/70" />
              <div className="loading-shimmer h-12 flex-1 rounded-full bg-white/55" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
