import hero from "@/assets/hero.png";
import Image from "next/image";
import Link from "next/link";

export const HomeHero = () => (
  <section id="hero" className="container mx-auto px-4 py-20 sm:py-32">
    <div className="grid items-center gap-12 lg:grid-cols-2">
      <div className="text-left">
        <div className="slide-up button-pop mb-6 inline-block select-none rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-300">
          Launching Soon 🚀
        </div>
        <h1 className="hero-title text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
          Build faster with{" "}
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent dark:from-indigo-400 dark:to-purple-400">
            Next.js 15
          </span>
        </h1>
        <p className="hero-subtitle mt-6 text-lg text-gray-500 dark:text-gray-300">
          The ultimate starter template for your next project. Built with Next.js 15, React 19,
          TypeScript, and Tailwind CSS.
        </p>
        <div className="hero-cta mt-8 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/dashboard"
            className="button-pop inline-flex items-center justify-center rounded-lg bg-indigo-600 px-8 py-3 text-base font-medium text-white transition-colors hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
          >
            Get Started
            <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <Link
            href="/about"
            className="button-pop inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-8 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700/50"
          >
            Learn More
          </Link>
        </div>
      </div>
      <div className="relative hidden h-max lg:block">
        <div className="absolute -left-4 top-4 h-72 w-72 rounded-full bg-purple-300 opacity-70 blur-3xl filter dark:bg-purple-900"></div>
        <div className="absolute -right-4 bottom-4 h-72 w-72 rounded-full bg-indigo-300 opacity-70 blur-3xl filter dark:bg-indigo-900"></div>
        <div className="relative rounded-xl border border-gray-200 bg-white/50 p-4 shadow-xl backdrop-blur-sm dark:border-gray-700 dark:bg-gray-800/50">
          {/* Add a code preview or screenshot here */}
          <div className="image-reveal aspect-video rounded-lg bg-gray-100 dark:bg-gray-700">
            <Image priority src={hero} alt="Home Hero" className="rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  </section>
);
