import { Search } from "lucide-react";
import Link from "next/link";

const categories = [
  {
    name: "Getting Started",
    description: "Learn the basics and get up and running quickly",
    articles: [
      { title: "Quick Start Guide", href: "/help/getting-started/quick-start" },
      { title: "Account Setup", href: "/help/getting-started/account-setup" },
      { title: "Basic Features", href: "/help/getting-started/basic-features" },
    ],
  },
  {
    name: "Account & Billing",
    description: "Manage your account and subscription",
    articles: [
      { title: "Subscription Plans", href: "/help/account/subscription-plans" },
      { title: "Payment Methods", href: "/help/account/payment-methods" },
      { title: "Billing FAQ", href: "/help/account/billing-faq" },
    ],
  },
  {
    name: "API Documentation",
    description: "Integrate with our API and build custom solutions",
    articles: [
      { title: "API Overview", href: "/help/api/overview" },
      { title: "Authentication", href: "/help/api/authentication" },
      { title: "Rate Limits", href: "/help/api/rate-limits" },
    ],
  },
  {
    name: "Security",
    description: "Learn about our security features and best practices",
    articles: [
      { title: "Security Overview", href: "/help/security/overview" },
      { title: "Two-Factor Auth", href: "/help/security/2fa" },
      { title: "API Keys", href: "/help/security/api-keys" },
    ],
  },
];

const popularArticles = [
  {
    title: "How to reset your password",
    description: "Step-by-step guide to securely reset your account password",
    href: "/help/account/reset-password",
  },
  {
    title: "Integrating with Slack",
    description: "Connect your workspace with Slack for real-time notifications",
    href: "/help/integrations/slack",
  },
  {
    title: "Team permissions",
    description: "Learn about different permission levels and how to manage them",
    href: "/help/teams/permissions",
  },
];

const HelpPage = () => (
  <div className="container mx-auto px-4 py-16">
    {/* Header with Search */}
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 px-8 py-12 text-white shadow-lg">
      <div className="relative z-10">
        <h1 className="text-center text-4xl font-bold">How can we help you?</h1>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-indigo-100">
          Search our knowledge base or browse categories below
        </p>

        <div className="mx-auto mt-8 max-w-2xl">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search for articles..."
              className="w-full rounded-xl border-0 bg-white/10 px-12 py-4 text-white placeholder-white/60 backdrop-blur-sm transition-colors focus:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/20"
            />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-grid opacity-30 dark:opacity-50" />
    </div>

    {/* Popular Articles */}
    <div className="mt-16">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Popular Articles</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {popularArticles.map((article) => (
          <Link
            key={article.title}
            href={article.href}
            className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl dark:bg-gray-800"
          >
            <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 translate-y--8 transform rounded-full bg-indigo-50 opacity-20 transition-transform group-hover:translate-x-6 group-hover:translate-y-6 dark:bg-indigo-900" />
            <div className="relative">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {article.title}
              </h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{article.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>

    {/* Categories */}
    <div className="mt-16">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Browse by Category</h2>
      <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
        {categories.map((category) => (
          <div key={category.name} className="rounded-xl bg-white p-8 shadow-lg dark:bg-gray-800">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{category.name}</h3>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{category.description}</p>
            <div className="mt-6 space-y-3">
              {category.articles.map((article) => (
                <Link
                  key={article.title}
                  href={article.href}
                  className="flex items-center space-x-2 text-sm text-indigo-600 transition-colors hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                >
                  <span>→</span>
                  <span>{article.title}</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Contact Support */}
    <div className="mt-16">
      <div className="rounded-xl bg-gray-50 p-8 dark:bg-gray-800/50">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Can&apos;t find what you&apos;re looking for?
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Our support team is always here to help you with any questions.
          </p>
          <div className="mt-6 flex justify-center space-x-4">
            <Link
              href="/contact"
              className="rounded-lg bg-indigo-600 px-6 py-2 text-white transition-colors hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
            >
              Contact Support
            </Link>
            <Link
              href="/docs"
              className="rounded-lg border border-gray-300 bg-white px-6 py-2 text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
            >
              View Documentation
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HelpPage;
