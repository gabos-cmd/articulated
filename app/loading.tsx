export default function Loading() {
  return (
    <main className="museum-shell min-h-screen px-5 pb-16 pt-8 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1380px]">
        <div className="flex justify-center pb-12 pt-2 sm:pb-16">
          <div className="loading-shimmer h-10 w-56 rounded-full bg-black/6 sm:h-12 sm:w-72" />
        </div>

        <div className="flex min-h-[calc(100vh-9rem)] items-center justify-center">
          <div className="loading-shimmer image-stage w-full rounded-[1.5rem] bg-black/[0.025] sm:min-h-[74vh] lg:min-h-[78vh]" />
        </div>

        <div className="mx-auto mt-10 max-w-3xl text-center">
          <div className="loading-shimmer mx-auto h-14 w-4/5 rounded-[1.5rem] bg-black/6" />
          <div className="loading-shimmer mx-auto mt-4 h-5 w-1/2 rounded-full bg-black/5" />
          <div className="loading-shimmer mx-auto mt-6 h-4 w-2/3 rounded-full bg-black/[0.04]" />
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <div className="loading-shimmer h-11 rounded-full bg-black/7 sm:w-44" />
            <div className="loading-shimmer h-11 rounded-full bg-black/5 sm:w-48" />
          </div>
          <div className="loading-shimmer mx-auto mt-5 h-4 w-40 rounded-full bg-black/[0.04]" />
        </div>

        <div className="mx-auto mt-20 max-w-5xl space-y-0">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="grid gap-5 border-t border-line py-10 md:grid-cols-[220px_minmax(0,1fr)] md:gap-10"
            >
              <div className="loading-shimmer h-3 w-28 rounded-full bg-black/5" />
              <div className={index === 4 ? "loading-shimmer h-20 rounded-[1.25rem] bg-black/[0.035]" : ""}>
                {index === 4 ? null : (
                  <>
                    <div className="loading-shimmer h-6 w-full rounded-full bg-black/[0.035]" />
                    <div className="loading-shimmer mt-3 h-6 w-11/12 rounded-full bg-black/[0.03]" />
                    <div className="loading-shimmer mt-3 h-6 w-10/12 rounded-full bg-black/[0.03]" />
                  </>
                )}
                {index === 3 ? (
                  <div className="mt-6 grid gap-6 lg:grid-cols-3">
                    {Array.from({ length: 3 }).map((__, innerIndex) => (
                      <div
                        key={innerIndex}
                        className="loading-shimmer h-28 rounded-[1rem] bg-black/[0.03]"
                      />
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
