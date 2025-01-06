import Link from "next/link";

export const CTA = () => (
  <section id="cta" className="container mx-auto px-4 py-24">
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
  </section>
);
