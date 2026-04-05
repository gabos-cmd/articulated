export default function Loading() {
  return (
    <main className="museum-shell min-h-screen px-5 pb-16 pt-8 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1380px]">
        <div className="flex justify-center pb-12 pt-2 sm:pb-16">
          <div className="loading-shimmer h-10 w-56 rounded-full bg-black/6 sm:h-12 sm:w-72" />
        </div>

        <div className="relative rounded-[2rem] bg-background-strong p-3 hero-shadow sm:p-4 lg:p-6">
          <div className="loading-shimmer min-h-[58vh] rounded-[1.75rem] bg-black/[0.03] sm:min-h-[66vh] lg:min-h-[78vh]" />
          <div className="relative mt-6 max-w-xl rounded-[1.75rem] border border-line bg-white/90 p-6 sm:p-8 lg:absolute lg:bottom-10 lg:right-10 lg:mt-0 lg:w-[430px]">
            <div className="loading-shimmer h-3 w-40 rounded-full bg-black/6" />
            <div className="loading-shimmer mt-5 h-14 w-4/5 rounded-[1.5rem] bg-black/6" />
            <div className="loading-shimmer mt-4 h-5 w-1/2 rounded-full bg-black/5" />
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="loading-shimmer h-16 rounded-[1.15rem] bg-black/[0.04]"
                />
              ))}
            </div>
            <div className="mt-8 flex gap-3">
              <div className="loading-shimmer h-12 flex-1 rounded-full bg-black/7" />
              <div className="loading-shimmer h-12 flex-1 rounded-full bg-black/5" />
            </div>
          </div>
        </div>

        <div className="mx-auto mt-18 max-w-5xl space-y-0">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="grid gap-5 border-t border-line py-10 md:grid-cols-[220px_minmax(0,1fr)] md:gap-10"
            >
              <div className="loading-shimmer h-3 w-28 rounded-full bg-black/5" />
              <div className="loading-shimmer h-24 rounded-[1.5rem] bg-black/[0.035]" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
