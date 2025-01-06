import { ThemeToggle } from "@/components/common/theme-toggle";
import { socials } from "@/utils/const";
import Link from "next/link";

export const HomeFooter = () => (
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
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Product</h3>
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
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Company</h3>
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
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Legal</h3>
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
);
