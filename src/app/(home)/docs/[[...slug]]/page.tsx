import { ArrowLeft, ArrowRight, Book, ChevronRight, Code2, Lightbulb } from "lucide-react";
import Link from "next/link";

const sections = [
  {
    title: "Getting Started",
    icon: Book,
    items: [
      { title: "Introduction", href: "/docs/introduction" },
      { title: "Quick Start", href: "/docs/quick-start" },
      { title: "Installation", href: "/docs/installation" },
      { title: "Configuration", href: "/docs/configuration" },
    ],
  },
  {
    title: "Core Concepts",
    icon: Lightbulb,
    items: [
      { title: "Architecture", href: "/docs/architecture" },
      { title: "Authentication", href: "/docs/authentication" },
      { title: "Database", href: "/docs/database" },
      { title: "Deployment", href: "/docs/deployment" },
    ],
  },
  {
    title: "API Reference",
    icon: Code2,
    items: [
      { title: "REST API", href: "/docs/api/rest" },
      { title: "GraphQL API", href: "/docs/api/graphql" },
      { title: "Webhooks", href: "/docs/api/webhooks" },
      { title: "SDK", href: "/docs/api/sdk" },
    ],
  },
];

const DocsPage = () => (
  <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="lg:grid lg:grid-cols-12 lg:gap-8">
      {/* Sidebar Navigation */}
      <div className="hidden lg:col-span-3 lg:block">
        <nav className="sticky top-16 space-y-6">
          {sections.map((section) => (
            <div key={section.title}>
              <div className="flex items-center space-x-2 text-sm font-semibold text-gray-900 dark:text-white">
                <section.icon className="h-5 w-5" />
                <span>{section.title}</span>
              </div>
              <ul className="mt-2 space-y-2">
                {section.items.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className="group flex items-center space-x-2 rounded-lg px-3 py-2 text-sm text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
                    >
                      <ChevronRight className="h-4 w-4 text-gray-400 transition-transform group-hover:translate-x-0.5 dark:text-gray-500" />
                      <span>{item.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <main className="lg:col-span-9">
        <div className="prose prose-gray max-w-none dark:prose-invert">
          {/* Breadcrumbs */}
          <nav className="mb-8 flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <Link href="/docs" className="hover:text-gray-900 dark:hover:text-white">
              Docs
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span>Getting Started</span>
          </nav>

          {/* Content Header */}
          <header className="mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              Introduction
            </h1>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
              Learn how to get started with our platform and explore its features.
            </p>
          </header>

          {/* Example Content */}
          <section className="space-y-6 text-gray-900 dark:text-white">
            <h2>Overview</h2>
            <p>
              Our platform provides a comprehensive solution for building modern web applications.
              With our tools and services, you can focus on building great products while we handle
              the infrastructure.
            </p>

            {/* Code Example */}
            <div className="relative rounded-xl bg-gray-900 p-4">
              <div className="absolute left-4 sm:left-auto sm:right-4 top-4">
                <button className="rounded bg-white/10 px-2 py-1 text-xs text-white hover:bg-white/20">
                  Copy
                </button>
              </div>
              <pre className="overflow-x-auto mt-8 sm:mt-0 text-sm text-white">
                <code>{`npm install @your-platform/sdk
# or
yarn add @your-platform/sdk`}</code>
              </pre>
            </div>

            {/* Info Box */}
            <div className="rounded-lg border border-blue-100 bg-blue-50 p-4 dark:border-blue-900 dark:bg-blue-900/20">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-blue-800 dark:text-blue-300">Pro tip</h3>
                  <p className="mt-2 text-sm text-blue-700 dark:text-blue-200">
                    You can also use our CLI tool for a faster setup experience.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Navigation Footer */}
          <footer className="mt-16 grid grid-cols-2 gap-4 border-t border-gray-200 pt-8 dark:border-gray-700">
            <Link
              href="/docs/quick-start"
              className="flex items-center space-x-2 text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Previous: Quick Start</span>
            </Link>
            <Link
              href="/docs/installation"
              className="flex items-center justify-end space-x-2 text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              <span>Next: Installation</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </footer>
        </div>
      </main>
    </div>
  </div>
);

export default DocsPage;
