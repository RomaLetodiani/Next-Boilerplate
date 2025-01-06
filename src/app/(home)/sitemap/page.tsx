import { HelpCircle, Home, LayoutDashboard, Shield, Users } from "lucide-react";
import Link from "next/link";

interface SitemapSection {
  title: string;
  icon: React.ElementType;
  links: {
    title: string;
    href: string;
    description?: string;
  }[];
}

const sections: SitemapSection[] = [
  {
    title: "Main",
    icon: Home,
    links: [
      { title: "Home", href: "/", description: "Landing page with key features and benefits" },
      { title: "About", href: "/about", description: "Learn about our company and mission" },
      { title: "Blog", href: "/blog", description: "Latest articles and updates" },
      { title: "Contact", href: "/contact", description: "Get in touch with our team" },
    ],
  },
  {
    title: "Product",
    icon: LayoutDashboard,
    links: [
      { title: "Features", href: "/features", description: "Explore product capabilities" },
      { title: "Pricing", href: "/pricing", description: "Plans and pricing options" },
      { title: "Resources", href: "/resources", description: "Helpful resources and guides" },
      { title: "Status", href: "/status", description: "System status and uptime" },
    ],
  },
  {
    title: "Support",
    icon: HelpCircle,
    links: [
      { title: "Help Center", href: "/help", description: "Get help and support" },
      { title: "Documentation", href: "/docs", description: "Technical documentation" },
      { title: "API Reference", href: "/docs/api", description: "API documentation" },
      { title: "Community", href: "/community", description: "Join our community" },
    ],
  },
  {
    title: "Legal",
    icon: Shield,
    links: [
      { title: "Privacy Policy", href: "/legal/privacy", description: "Privacy information" },
      { title: "Terms of Service", href: "/legal/terms", description: "Terms and conditions" },
      { title: "Cookie Policy", href: "/legal/cookies", description: "Cookie usage information" },
      { title: "GDPR", href: "/legal/gdpr", description: "Data protection information" },
    ],
  },
  {
    title: "Account",
    icon: Users,
    links: [
      { title: "Dashboard", href: "/dashboard", description: "Your account dashboard" },
      { title: "Settings", href: "/dashboard/settings", description: "Account settings" },
      { title: "Billing", href: "/dashboard/billing", description: "Manage billing" },
      { title: "Team", href: "/dashboard/team", description: "Team management" },
    ],
  },
];

const SitemapPage = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="absolute inset-0 bg-grid-modern opacity-[0.02] dark:opacity-[0.05]" />
      <div className="relative">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="relative mb-16 overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 p-8 text-white shadow-lg lg:p-12">
            <div className="relative z-10">
              <h1 className="text-center text-3xl font-bold lg:text-4xl">Sitemap</h1>
              <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-indigo-100">
                Find everything you need across our website
              </p>
            </div>
            <div className="absolute inset-0 bg-grid-modern opacity-10" />
          </div>

          {/* Sections */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {sections.map((section) => (
              <div
                key={section.title}
                className="rounded-xl bg-white p-6 shadow-lg transition-all hover:shadow-xl dark:bg-gray-800"
              >
                <div className="flex items-center space-x-3">
                  <div className="rounded-lg bg-indigo-50 p-2 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-400">
                    <section.icon className="h-6 w-6" />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {section.title}
                  </h2>
                </div>

                <div className="mt-6 space-y-4">
                  {section.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="group block rounded-lg p-3 transition-colors hover:bg-gray-50 dark:hover:bg-gray-700/50"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-gray-900 dark:text-white">
                          {link.title}
                        </span>
                        <span className="text-gray-400 transition-transform group-hover:translate-x-0.5">
                          →
                        </span>
                      </div>
                      {link.description && (
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                          {link.description}
                        </p>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Search Suggestion */}
          <div className="mt-16 text-center">
            <p className="text-gray-600 dark:text-gray-300">
              Can&apos;t find what you&apos;re looking for?{" "}
              <Link
                href="/search"
                className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
              >
                Try searching
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SitemapPage;
