import {
  BarChart,
  Code2,
  Database,
  Layout,
  Lock,
  Moon,
  Package,
  RefreshCcw,
  Shield,
  Smartphone,
  Zap,
} from "lucide-react";

export const Features = () => (
  <section id="features" className="relative overflow-hidden py-24">
    <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800" />
    <div className="container relative mx-auto px-4">
      <div className="text-center">
        <div className="inline-block rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-300">
          Powerful Features
        </div>
        <h2 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
          Everything you need to build
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
          Start with a modern tech stack and scale your application with enterprise-grade features
        </p>
      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-3">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl dark:bg-gray-800"
          >
            <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 translate-y--8 transform rounded-full bg-indigo-50 opacity-20 transition-transform group-hover:translate-x-6 group-hover:translate-y--6 dark:bg-indigo-900" />
            <div className="relative">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-2xl dark:bg-indigo-900/50">
                <feature.icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const TechFeatures = () => (
  <section id="tech-features" className="relative overflow-hidden py-24">
    <div className="container mx-auto px-4">
      <div className="text-center">
        <div className="inline-block rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-300">
          Built for Scale
        </div>
        <h2 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
          Everything You Need
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
          A complete solution with all the features you need to build modern web applications
        </p>
      </div>

      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {techFeatures.map((feature, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800"
          >
            <div className="flex items-center space-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50 dark:bg-indigo-900/50">
                <feature.icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const features = [
  {
    icon: Zap,
    title: "Server Components",
    description:
      "Built with React Server Components for optimal performance and reduced client-side JavaScript.",
  },
  {
    icon: Layout,
    title: "Edge Runtime",
    description:
      "Deploy globally with edge functions for minimal latency and maximum availability worldwide.",
  },
  {
    icon: Code2,
    title: "Type Safety",
    description:
      "End-to-end type safety with TypeScript, providing better developer experience and code reliability.",
  },
  {
    icon: Layout,
    title: "Modern UI",
    description:
      "Beautiful, responsive interfaces built with Tailwind CSS and modern design principles.",
  },
  {
    icon: Lock,
    title: "Authentication",
    description:
      "Secure authentication with NextAuth.js, supporting multiple providers and session management.",
  },
  {
    icon: Code2,
    title: "API Routes",
    description:
      "Built-in API routes with Next.js for seamless backend functionality and data handling.",
  },
  {
    icon: Moon,
    title: "Dark Mode",
    description: "Elegant theme system with light and dark modes that respect user preferences.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description:
      "Mobile-first approach ensuring perfect display across all devices and screen sizes.",
  },
  {
    icon: Code2,
    title: "React 19",
    description: "Latest React features including concurrent rendering and automatic batching.",
  },
  {
    icon: Package,
    title: "Zero Config",
    description: "Pre-configured development environment with ESLint, Prettier, and TypeScript.",
  },
  {
    icon: RefreshCcw,
    title: "Hot Reload",
    description:
      "Fast refresh development experience with instant feedback and state preservation.",
  },
  {
    icon: BarChart,
    title: "Analytics Ready",
    description:
      "Built-in analytics support with performance monitoring and user tracking capabilities.",
  },
];

const techFeatures = [
  {
    icon: Zap,
    title: "Server Components",
    description: "Optimized rendering with React Server Components for better performance",
  },
  {
    icon: Database,
    title: "Edge Runtime",
    description: "Deploy globally with edge functions for minimal latency",
  },
  {
    icon: Shield,
    title: "Type Safety",
    description: "End-to-end type safety with TypeScript and tRPC",
  },
  {
    icon: Layout,
    title: "Responsive UI",
    description: "Beautiful interfaces that work on any device",
  },
  {
    icon: Lock,
    title: "Authentication",
    description: "Secure auth with NextAuth.js and OAuth providers",
  },
  {
    icon: Code2,
    title: "API Routes",
    description: "Built-in API routes for backend functionality",
  },
];
