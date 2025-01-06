export const Stats = () => (
  <section
    id="stats"
    className="relative overflow-hidden border-y border-gray-200 bg-white/50 dark:border-gray-700 dark:bg-gray-800/50"
  >
    <div className="absolute inset-0 bg-grid opacity-20 dark:opacity-40" />
    <div className="container relative mx-auto px-4 py-16">
      <div className="grid min-[350px]:grid-cols-2 gap-8 md:grid-cols-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all hover:shadow-xl dark:bg-gray-800"
          >
            <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 translate-y--8 transform rounded-full bg-indigo-50 opacity-20 transition-transform group-hover:translate-x-6 group-hover:translate-y--6 dark:bg-indigo-900" />
            <div className="relative flex gap-x-4 min-[350px]:flex-col ">
              <div className="text-3xl w-24 font-bold text-indigo-600 dark:text-indigo-400">
                {stat.value}
              </div>
              <div className="mt-2  text-sm text-gray-600 dark:text-gray-300">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const stats = [
  { value: "10K+", label: "Developers" },
  { value: "500+", label: "Projects Built" },
  { value: "99.9%", label: "Uptime" },
  { value: "24/7", label: "Support" },
];
