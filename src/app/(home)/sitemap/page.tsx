import { authNavigationItems } from "@/layout/(auth)/auth-navigation-items";
import {
  companyNavigationItems,
  productNavigationItems,
} from "@/layout/(home)/header/home-navigation-items";
import { legalNavigationItems } from "@/layout/(home)/pages/legal/legal-navigation-items";
import { dashboardNavigationItems } from "@/layout/dashboard/dashboard-navigation-items";
import { HelpCircle, Home, LayoutDashboard, Shield, Users } from "lucide-react";
import Link from "next/link";

interface SitemapSection {
  title: string;
  description: string;
  icon: React.ElementType;
  links: {
    name: string;
    href: string;
    description?: string;
    icon?: React.ReactNode;
  }[];
}

const sections: SitemapSection[] = [
  {
    title: "Company",
    description: "Essential information about our company and services",
    icon: Home,
    links: companyNavigationItems,
  },
  {
    title: "Product",
    description: "Explore our products, features, and resources",
    icon: LayoutDashboard,
    links: productNavigationItems,
  },
  {
    title: "Dashboard",
    description: "Manage your account and settings",
    icon: Users,
    links: dashboardNavigationItems,
  },
  {
    title: "Legal",
    description: "Privacy, terms, and compliance information",
    icon: Shield,
    links: legalNavigationItems,
  },
  {
    title: "Support",
    description: "Get help and learn more about our platform",
    icon: HelpCircle,
    links: [
      ...authNavigationItems,
      { name: "Help Center", href: "/help", icon: <HelpCircle /> },
      { name: "Documentation", href: "/docs", icon: <HelpCircle /> },
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
              <div className="flex items-center justify-center">
                <div className="rounded-full bg-white/10 p-3 backdrop-blur-sm">
                  <LayoutDashboard className="h-8 w-8" />
                </div>
              </div>
              <h1 className="mt-4 text-center text-3xl font-bold lg:text-4xl">Site Map</h1>
              <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-indigo-100">
                Quick access to all pages and resources across our platform
              </p>
            </div>
            <div className="absolute inset-0 bg-grid-modern opacity-10" />
          </div>

          {/* Sections */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {sections.map((section) => (
              <div
                key={section.title}
                className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl dark:bg-gray-800"
              >
                {/* Background Decoration */}
                <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 transform rounded-full bg-indigo-50 opacity-20 transition-transform group-hover:translate-x-6 group-hover:-translate-y-6 dark:bg-indigo-900" />

                <div className="relative">
                  {/* Section Header */}
                  <div className="flex items-center space-x-3">
                    <div className="rounded-lg bg-indigo-50 p-2 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-400">
                      <section.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {section.title}
                      </h2>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {section.description}
                      </p>
                    </div>
                  </div>

                  {/* Links */}
                  <div className="mt-6 space-y-3">
                    {section.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="group/link flex items-center justify-between rounded-lg p-3 transition-colors hover:bg-gray-50 dark:hover:bg-gray-700/50"
                      >
                        <div className="flex items-center space-x-3">
                          {link.icon && (
                            <div className="text-gray-400 transition-colors group-hover/link:text-indigo-600 dark:text-gray-500 dark:group-hover/link:text-indigo-400">
                              {link.icon}
                            </div>
                          )}
                          <span className="font-medium text-gray-900 transition-colors group-hover/link:text-indigo-600 dark:text-white dark:group-hover/link:text-indigo-400">
                            {link.name}
                          </span>
                        </div>
                        <span className="text-gray-400 transition-transform group-hover/link:translate-x-0.5 dark:text-gray-500">
                          →
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Search Suggestion */}
          <div className="relative mt-16 overflow-hidden rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 p-8 text-white shadow-lg">
            <div className="relative z-10 text-center">
              <h2 className="text-2xl font-semibold">Need Help Finding Something?</h2>
              <p className="mt-2 text-indigo-100">
                Try our search feature to quickly find what you&apos;re looking for
              </p>
              <Link
                href="/search"
                className="mt-6 inline-flex items-center rounded-lg bg-white px-6 py-2.5 font-medium text-indigo-600 shadow-md transition-all hover:bg-gray-50 hover:shadow-lg"
              >
                Search Now
              </Link>
            </div>
            <div className="absolute inset-0 bg-grid-modern opacity-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SitemapPage;
