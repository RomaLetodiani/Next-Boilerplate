export const Performance = () => (
  <section
    id="performance"
    className="relative overflow-hidden bg-gradient-to-b from-indigo-50 to-white py-24 dark:from-gray-800 dark:to-gray-900"
  >
    <div className="absolute inset-0 bg-grid opacity-20 dark:opacity-40" />
    <div className="container relative mx-auto px-4">
      <div className="text-center">
        <div className="inline-block rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-300">
          Lightning Fast
        </div>
        <h2 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
          Built for Performance
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
          Optimized for the best possible user experience and developer productivity
        </p>
      </div>

      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800"
          >
            <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 translate-y--8 transform rounded-full bg-indigo-50 opacity-20 dark:bg-indigo-900" />
            <div className="relative">
              <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400">
                {metric.value}
              </div>
              <div className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                {metric.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const metrics = [
  { value: "100", label: "Performance Score" },
  { value: "0.8s", label: "Time to Interactive" },
  { value: "3.2kb", label: "First Load JS" },
  { value: "99%", label: "Lighthouse Score" },
];
