export default function Loading() {
  return (
    <div
      className="min-h-dvh w-full bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900"
      role="status"
      aria-busy="true"
      aria-label="Carregando conteúdo"
    >
      {/* Top bar skeleton */}
      <div className="border-b border-gray-200/70 dark:border-gray-800/70 bg-white/60 dark:bg-gray-950/40 backdrop-blur supports-[backdrop-filter]:backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center gap-4">
          <div className="h-9 w-9 rounded-lg bg-gray-200 dark:bg-gray-800 animate-pulse" />
          <div className="h-5 w-40 rounded bg-gray-200 dark:bg-gray-800 animate-pulse" />
          <div className="ml-auto flex items-center gap-3">
            <div className="h-8 w-24 rounded bg-gray-200 dark:bg-gray-800 animate-pulse" />
            <Spinner className="h-5 w-5" />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Sidebar skeleton */}
        <aside className="lg:col-span-3 space-y-4">
          <div className="h-10 rounded bg-gray-200 dark:bg-gray-800 animate-pulse" />
          <div className="h-10 rounded bg-gray-200 dark:bg-gray-800 animate-pulse" />
          <div className="h-10 rounded bg-gray-200 dark:bg-gray-800 animate-pulse" />
          <div className="h-10 rounded bg-gray-200 dark:bg-gray-800 animate-pulse" />
        </aside>

        {/* Main content skeleton */}
        <main className="lg:col-span-9 space-y-8">
          {/* Metric cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={`metric-${i}`}
                className="rounded-xl border border-gray-200/70 dark:border-gray-800/70 bg-white/70 dark:bg-gray-950/40 p-5"
              >
                <div className="h-4 w-24 rounded bg-gray-200 dark:bg-gray-800 animate-pulse mb-3" />
                <div className="h-8 w-28 rounded bg-gray-200 dark:bg-gray-800 animate-pulse mb-4" />
                <div className="flex items-center gap-2">
                  <Spinner className="h-4 w-4" />
                  <div className="h-3 w-20 rounded bg-gray-200 dark:bg-gray-800 animate-pulse" />
                </div>
              </div>
            ))}
          </div>

          {/* Cards list skeleton */}
          <section className="rounded-xl border border-gray-200/70 dark:border-gray-800/70 bg-white/70 dark:bg-gray-950/40 p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="h-6 w-40 rounded bg-gray-200 dark:bg-gray-800 animate-pulse" />
              <div className="flex items-center gap-3">
                <div className="h-9 w-28 rounded bg-gray-200 dark:bg-gray-800 animate-pulse" />
                <div className="h-9 w-9 rounded-lg bg-gray-200 dark:bg-gray-800 animate-pulse" />
              </div>
            </div>

            <ul className="space-y-4">
              {Array.from({ length: 3 }).map((_, i) => (
                <li
                  key={`item-${i}`}
                  className="rounded-lg border border-gray-200/70 dark:border-gray-800/70 p-4"
                >
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-gray-200 dark:bg-gray-800 animate-pulse" />
                    <div className="flex-1 space-y-2">
                      <div className="h-4 w-56 rounded bg-gray-200 dark:bg-gray-800 animate-pulse" />
                      <div className="h-4 w-80 max-w-full rounded bg-gray-200 dark:bg-gray-800 animate-pulse" />
                      <div className="h-3 w-48 rounded bg-gray-200 dark:bg-gray-800 animate-pulse" />
                    </div>
                    <Spinner className="h-5 w-5 mt-1 shrink-0" />
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Table skeleton */}
          <section className="rounded-xl border border-gray-200/70 dark:border-gray-800/70 bg-white/70 dark:bg-gray-950/40 p-6">
            <div className="h-6 w-44 rounded bg-gray-200 dark:bg-gray-800 animate-pulse mb-5" />
            <div className="overflow-hidden rounded-lg border border-gray-200/70 dark:border-gray-800/70">
              <div className="grid grid-cols-12 bg-gray-50 dark:bg-gray-900/60">
                {["Nome", "Status", "Data", "Ações"].map((_, idx) => (
                  <div
                    key={`th-${idx}`}
                    className="col-span-3 h-10 flex items-center px-4"
                  >
                    <div className="h-4 w-24 rounded bg-gray-200 dark:bg-gray-800 animate-pulse" />
                  </div>
                ))}
              </div>

              <div className="divide-y divide-gray-200/70 dark:divide-gray-800/70">
                {Array.from({ length: 5 }).map((_, row) => (
                  <div
                    key={`row-${row}`}
                    className="grid grid-cols-12 items-center px-4 py-4"
                  >
                    <div className="col-span-3">
                      <div className="h-4 w-44 rounded bg-gray-200 dark:bg-gray-800 animate-pulse" />
                    </div>
                    <div className="col-span-3">
                      <div className="h-6 w-24 rounded-full bg-gray-200 dark:bg-gray-800 animate-pulse" />
                    </div>
                    <div className="col-span-3">
                      <div className="h-4 w-28 rounded bg-gray-200 dark:bg-gray-800 animate-pulse" />
                    </div>
                    <div className="col-span-3 flex items-center gap-2">
                      <div className="h-9 w-9 rounded-lg bg-gray-200 dark:bg-gray-800 animate-pulse" />
                      <div className="h-9 w-20 rounded bg-gray-200 dark:bg-gray-800 animate-pulse" />
                      <Spinner className="h-5 w-5" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* Full-page subtle spinner no canto (decorativo) */}
      <div className="fixed bottom-6 right-6">
        <Spinner className="h-6 w-6 opacity-70" />
      </div>
    </div>
  );
}

function Spinner({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      className={`animate-spin ${className} text-gray-300 dark:text-gray-700 fill-purple-600`}
      viewBox="0 0 100 101"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="opacity-60"
        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908Z"
        fill="currentColor"
      />
      <path
        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
        fill="currentColor"
      />
    </svg>
  );
}
