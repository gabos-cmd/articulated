export default function Loading() {
  return (
    <main className="museum-shell min-h-screen bg-white">
      <section className="px-5 pb-18 pt-6 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[1380px]">
          <div className="rounded-[1.75rem] border border-white/45 bg-white/[0.2] px-5 py-4 shadow-[0_18px_55px_rgba(17,17,17,0.09)] backdrop-blur-[18px]">
            <div className="flex items-center justify-between">
              <div className="loading-shimmer h-10 w-40 rounded-full bg-black/5" />
              <div className="flex gap-3">
                <div className="loading-shimmer h-9 w-24 rounded-full bg-black/5" />
                <div className="loading-shimmer h-9 w-20 rounded-full bg-black/5" />
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-[1380px]">
          <div className="flex min-h-[calc(100vh-6rem)] items-center justify-center">
            <div className="w-full max-w-[1180px]">
              <div className="loading-shimmer overflow-hidden rounded-[2.3rem] border border-black/8 bg-[linear-gradient(180deg,rgba(0,0,0,0.035),rgba(0,0,0,0.015))] shadow-[0_34px_110px_rgba(17,17,17,0.08)]">
                <div className="min-h-[58vh] sm:min-h-[66vh] lg:min-h-[74vh]" />
              </div>
              <div className="mx-auto mt-7 w-full max-w-[820px] rounded-[2rem] border border-black/7 bg-white/90 px-6 pb-7 pt-6 text-center shadow-[0_22px_60px_rgba(17,17,17,0.06)] sm:px-10 sm:pb-9 sm:pt-7">
                <div className="loading-shimmer mx-auto h-14 w-full max-w-3xl rounded-full bg-black/[0.04]" />
                <div className="loading-shimmer mx-auto mt-4 h-6 w-64 rounded-full bg-black/[0.04]" />
                <div className="loading-shimmer mx-auto mt-5 h-5 w-full max-w-2xl rounded-full bg-black/[0.03]" />
                <div className="loading-shimmer mx-auto mt-3 h-5 w-10/12 max-w-xl rounded-full bg-black/[0.03]" />
                <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                  <div className="loading-shimmer h-12 w-32 rounded-[1rem] bg-black/[0.03]" />
                  <div className="loading-shimmer h-12 w-32 rounded-[1rem] bg-black/[0.03]" />
                  <div className="loading-shimmer h-12 w-32 rounded-[1rem] bg-black/[0.03]" />
                </div>
                <div className="loading-shimmer mx-auto mt-7 h-12 w-48 rounded-full bg-black/[0.04]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl space-y-0">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="grid gap-5 border-t border-line py-14 md:grid-cols-[220px_minmax(0,1fr)] md:gap-10"
            >
              <div className="loading-shimmer h-3 w-28 rounded-full bg-black/5" />
              <div className={index === 4 ? "loading-shimmer h-24 rounded-[1.25rem] bg-black/[0.03]" : ""}>
                {index === 4 ? null : (
                  <>
                    <div className="loading-shimmer h-6 w-full rounded-full bg-black/[0.03]" />
                    <div className="loading-shimmer mt-3 h-6 w-11/12 rounded-full bg-black/[0.03]" />
                    <div className="loading-shimmer mt-3 h-6 w-10/12 rounded-full bg-black/[0.03]" />
                  </>
                )}
                {index === 3 ? (
                  <div className="mt-8 grid gap-6 lg:grid-cols-3">
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
      </section>
    </main>
  );
}
