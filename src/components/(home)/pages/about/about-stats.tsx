import { Code2, Globe, HeartHandshake, Users } from "lucide-react";

export const AboutStats = () => (
  <section id="stats" className="px-4 pt-24 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-7xl">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all hover:shadow-xl dark:bg-gray-800"
          >
            <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 translate-y--8 transform rounded-full bg-indigo-50 opacity-20 transition-transform group-hover:translate-x-6 group-hover:translate-y-6 dark:bg-indigo-900" />
            <div className="relative">
              <stat.icon className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
              <p className="mt-4 text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const stats = [
  { label: "Active Users", value: "20K+", icon: Users },
  { label: "Countries", value: "150+", icon: Globe },
  { label: "Team Members", value: "50+", icon: HeartHandshake },
  { label: "Code Components", value: "200+", icon: Code2 },
];
