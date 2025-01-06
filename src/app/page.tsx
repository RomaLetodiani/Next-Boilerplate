import ThemeToggle from "@/components/common/theme-toggle";
import Link from "next/link";

const HomePage = async () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Theme Toggle */}
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20 sm:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="text-left">
            <div className="mb-6 inline-block rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-300">
              Launching Soon 🚀
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              Build faster with{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent dark:from-indigo-400 dark:to-purple-400">
                Next.js 15
              </span>
            </h1>
            <p className="mt-6 text-lg text-gray-500 dark:text-gray-300">
              The ultimate starter template for your next project. Built with Next.js 15, React 19,
              TypeScript, and Tailwind CSS.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/dashboard"
                className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-8 py-3 text-base font-medium text-white transition-colors hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
              >
                Get Started
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-8 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700/50"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute -left-4 top-4 h-72 w-72 rounded-full bg-purple-300 opacity-70 blur-3xl filter dark:bg-purple-900"></div>
            <div className="absolute -right-4 bottom-4 h-72 w-72 rounded-full bg-indigo-300 opacity-70 blur-3xl filter dark:bg-indigo-900"></div>
            <div className="relative rounded-xl border border-gray-200 bg-white/50 p-4 shadow-xl backdrop-blur-sm dark:border-gray-700 dark:bg-gray-800/50">
              {/* Add a code preview or screenshot here */}
              <div className="aspect-video rounded-lg bg-gray-100 dark:bg-gray-700"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="border-y border-gray-200 bg-white/50 dark:border-gray-700 dark:bg-gray-800/50">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-gray-600 dark:text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Feature Section */}
      <div id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              Everything you need to build
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              All the tools and features you need to build your next great project
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group rounded-xl bg-white p-8 shadow-lg transition-all hover:scale-105 dark:bg-gray-800"
              >
                <div className="mb-4 inline-block rounded-lg bg-indigo-100 p-3 text-3xl dark:bg-indigo-900/50">
                  {feature.icon}
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-50 py-20 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold text-gray-900 dark:text-white">
            Loved by Developers
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
                <p className="text-gray-600 dark:text-gray-300">&quot;{testimonial.quote}&quot;</p>
                <div className="mt-4 flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                  <div className="ml-3">
                    <div className="font-medium text-gray-900 dark:text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.title}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="relative rounded-2xl bg-indigo-600 px-6 py-16 dark:bg-indigo-500 sm:px-12 sm:py-20">
          <div className="relative mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to get started?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-indigo-100">
              Join thousands of developers building amazing applications with our template.
            </p>
            <div className="mt-10">
              <Link
                href="/login"
                className="rounded-lg bg-white px-8 py-3 text-base font-medium text-indigo-600 transition-colors hover:bg-gray-50 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
              >
                Start Building Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

const stats = [
  { value: "10K+", label: "Developers" },
  { value: "500+", label: "Projects Built" },
  { value: "99.9%", label: "Uptime" },
  { value: "24/7", label: "Support" },
];

const testimonials = [
  {
    quote:
      "This template saved me weeks of development time. It's incredibly well-structured and easy to customize.",
    name: "Sarah Chen",
    title: "Senior Developer at TechCorp",
  },
  {
    quote: "The best Next.js template I've ever used. The dark mode implementation is flawless.",
    name: "Mike Johnson",
    title: "Frontend Lead at StartupX",
  },
  {
    quote: "Perfect balance of features and simplicity. Exactly what I needed for my SaaS project.",
    name: "Alex Rivera",
    title: "Independent Developer",
  },
];

const features = [
  {
    icon: "🚀",
    title: "Next.js 15",
    description:
      "Leverage the latest Next.js features including server components, streaming, and the App Router for blazing fast performance.",
  },
  {
    icon: "⚛️",
    title: "React 19",
    description:
      "Take advantage of React's newest capabilities including concurrent rendering and automatic batching for smoother user experiences.",
  },
  {
    icon: "🎨",
    title: "Tailwind CSS",
    description:
      "Build beautiful interfaces with a utility-first CSS framework that enables rapid UI development with complete design flexibility.",
  },
  {
    icon: "📱",
    title: "Responsive Design",
    description:
      "Create pixel-perfect layouts that automatically adapt to any screen size, from mobile devices to large desktop displays.",
  },
  {
    icon: "🌓",
    title: "Theme Support",
    description:
      "Implement light and dark modes with an elegant theme system that respects user preferences and enhances accessibility.",
  },
  {
    icon: "🔐",
    title: "Authentication",
    description:
      "Implement secure user authentication with Google OAuth, complete with protected routes and session management.",
  },
  {
    icon: "⚡",
    title: "Fast Performance",
    description:
      "Deliver lightning-fast experiences with automatic image optimization, code splitting, and advanced caching strategies.",
  },
  {
    icon: "📘",
    title: "TypeScript",
    description:
      "Write more reliable code with TypeScript's static typing, intelligent autocomplete, and enhanced IDE support.",
  },
];

export default HomePage;
