import { ThemeToggle } from "@/components/common/theme-toggle";
import { HomeHeader } from "@/layout/home/home-header";
import {
  BarChart,
  Check,
  Code2,
  Database,
  Layout,
  Lock,
  Moon,
  Package,
  Phone,
  RefreshCcw,
  Shield,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { GitHub, LinkedIn } from "./assets/svgs";

const HomePage = async () => (
  <>
    <HomeHeader />
    <main className="min-h-screen min-w-[300px] pt-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
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

      {/* Stats Section - Modernized with gradients and animations */}
      <div className="relative overflow-hidden border-y border-gray-200 bg-white/50 dark:border-gray-700 dark:bg-gray-800/50">
        <div className="absolute inset-0 bg-grid-modern opacity-5" />
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
      </div>

      {/* Feature Section - Redesigned with better visuals */}
      <div id="features" className="relative overflow-hidden py-24">
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
              Start with a modern tech stack and scale your application with enterprise-grade
              features
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
      </div>

      {/* Testimonials Section - Completely redesigned */}
      <div className="relative overflow-hidden bg-gradient-to-b from-indigo-50 to-white py-24 dark:from-gray-800 dark:to-gray-900">
        <div className="absolute inset-0 bg-grid-modern opacity-5" />
        <div className="container relative mx-auto px-4">
          <div className="text-center">
            <div className="inline-block rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-300">
              Testimonials
            </div>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white">
              Loved by Developers Worldwide
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
              See what our community has to say about their experience
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl dark:bg-gray-800"
              >
                <div className="absolute right-0 top-0 h-32 w-32 translate-x-16 translate-y--16 transform rounded-full bg-indigo-50 opacity-10 transition-transform group-hover:translate-x-8 group-hover:translate-y--8 dark:bg-indigo-900" />
                <div className="relative">
                  <svg className="h-8 w-8 text-indigo-400" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                    {testimonial.quote}
                  </p>
                  <div className="mt-6 flex items-center">
                    <div className="h-10 w-10 overflow-hidden rounded-full bg-gradient-to-r from-indigo-400 to-purple-400">
                      <div className="flex h-full w-full items-center justify-center text-sm font-medium text-white">
                        {testimonial.name[0]}
                      </div>
                    </div>
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
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Code Preview Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-24 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="inline-block rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-300">
              Developer Experience
            </div>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              Write Clean, Modern Code
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
              Built with TypeScript and modern best practices for reliable, maintainable
              applications
            </p>
          </div>

          <div className="mt-16">
            <div className="relative rounded-2xl bg-gray-900 p-4 shadow-2xl">
              <div className="flex items-center space-x-2">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
              </div>
              <pre className="mt-4 overflow-x-auto">
                <code className="text-sm text-gray-300">
                  {`// Example of our clean, modern code

const DashboardPage = () => (
  <div className="space-y-8">
    {/* Welcome Section */}
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 p-8 text-white shadow-lg">
      <div className="relative z-10">
        <h1 className="text-3xl font-bold">Welcome back, User! 👋</h1>
        <p className="mt-2 max-w-2xl text-indigo-100">
          Here's what's happening with your projects today.
        </p>
      </div>
      <div className="absolute inset-0 bg-grid-modern" />
    </div>

    {/* Your Dashboard Content... */}
  </div>
);

export default DashboardPage;`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid with Icons */}
      <div className="relative overflow-hidden py-24">
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
      </div>

      {/* Performance Metrics Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-indigo-50 to-white py-24 dark:from-gray-800 dark:to-gray-900">
        <div className="absolute inset-0 bg-grid-modern opacity-5" />
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
      </div>

      {/* CTA Section - Enhanced with modern design */}
      <div className="container mx-auto px-4 py-24">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-20 shadow-xl sm:px-12">
          <div className="absolute inset-0 bg-grid-modern opacity-10" />
          <div className="relative mx-auto max-w-3xl text-center">
            <h2 className="bg-gradient-to-r from-white to-indigo-100 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
              Ready to get started?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-indigo-100">
              Join thousands of developers building amazing applications with our template.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/login"
                className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-3 text-base font-medium text-indigo-600 shadow-md transition-all hover:-translate-y-0.5 hover:bg-gray-50 hover:shadow-lg dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
              >
                Start Building Now
              </Link>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-8 py-3 text-base font-medium text-white backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-white/20"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <section
        id="pricing"
        className="relative overflow-hidden border-t border-gray-200 bg-white/50 py-24 dark:border-gray-700 dark:bg-gray-800/50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Simple, transparent pricing
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Choose the perfect plan for your needs. Always know what you'll pay.
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl ${
                  plan.highlighted
                    ? "bg-gradient-to-b from-indigo-500 to-indigo-600 p-0.5 shadow-xl dark:from-indigo-400 dark:to-indigo-500"
                    : "border border-gray-200 dark:border-gray-700"
                }`}
              >
                <div className="h-full rounded-2xl bg-white p-8 dark:bg-gray-800">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {plan.name}
                  </h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="ml-1 text-lg text-gray-500 dark:text-gray-400">
                        {plan.period}
                      </span>
                    )}
                  </div>
                  <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                    {plan.description}
                  </p>

                  <ul className="mt-8 space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <Check className="mr-3 h-5 w-5 flex-shrink-0 text-indigo-500 dark:text-indigo-400" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`mt-8 w-full rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors ${
                      plan.highlighted
                        ? "bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
                        : "bg-gray-50 text-gray-900 hover:bg-gray-100 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* FAQ Link */}
          <div className="mt-16 text-center">
            <p className="text-base text-gray-600 dark:text-gray-300">
              Have questions?{" "}
              <a
                href="#faq"
                className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400"
              >
                Check out our FAQ
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="border-t border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
        <div className="container mx-auto px-4 py-12">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Product Column */}
            <div>
              <div className="flex items-center space-x-2">
                <div className="rounded-lg bg-indigo-600 p-2 dark:bg-indigo-500">
                  <svg
                    className="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <span className="text-xl font-semibold text-gray-900 dark:text-white">
                  NextJS Template
                </span>
              </div>
              <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                Build your next great project with our modern Next.js template. Fast, reliable, and
                ready for production.
              </p>
              <div className="mt-6 flex space-x-4">
                {socials.map((social) => (
                  <Link
                    key={social.href}
                    href={social.href}
                    className="text-gray-400 transition-colors hover:text-gray-500 dark:hover:text-gray-300"
                  >
                    <span className="sr-only">{social.href.split("/").pop()}</span>
                    {social.icon()}
                  </Link>
                ))}
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                Product
              </h3>
              <ul className="mt-4 space-y-3">
                {["Features", "Documentation", "Pricing", "Changelog"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                Company
              </h3>
              <ul className="mt-4 space-y-3">
                {["About", "Blog", "Careers", "Contact"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                Legal
              </h3>
              <ul className="mt-4 space-y-3">
                {["Privacy", "Terms", "License", "Cookie Policy"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 border-t border-gray-200 pt-8 dark:border-gray-700">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <p className="text-sm text-gray-400">
                © {new Date().getFullYear()} NextJS Template. All rights reserved.
              </p>
              <div className="flex items-center space-x-4">
                <a
                  href="#"
                  className="text-sm text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  Status
                </a>
                <span className="text-gray-300 dark:text-gray-700">•</span>
                <a
                  href="#"
                  className="text-sm text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  Support
                </a>
                <span className="text-gray-300 dark:text-gray-700">•</span>

                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  </>
);

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
    icon: Phone,
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

const metrics = [
  { value: "100", label: "Performance Score" },
  { value: "0.8s", label: "Time to Interactive" },
  { value: "3.2kb", label: "First Load JS" },
  { value: "99%", label: "Lighthouse Score" },
];

const socials = [
  {
    icon: GitHub,
    href: "https://github.com/RomaLetodiani",
  },
  {
    icon: LinkedIn,
    href: "https://www.linkedin.com/in/letodiani-roma",
  },
];

const pricingPlans = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for side projects and small teams",
    features: [
      "Up to 3 team members",
      "Basic analytics",
      "1GB storage",
      "Community support",
      "Basic integrations",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "Best for growing teams and businesses",
    features: [
      "Unlimited team members",
      "Advanced analytics",
      "10GB storage",
      "Priority support",
      "Advanced integrations",
      "Custom domains",
      "API access",
      "SSO Authentication",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large-scale applications",
    features: [
      "Unlimited everything",
      "24/7 dedicated support",
      "Unlimited storage",
      "Custom contracts",
      "SLA guarantee",
      "Custom integrations",
      "On-premise deployment",
      "Dedicated account manager",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export default HomePage;
