import { ClientSideYear } from "@/components/common/client-side-year";
import { ThemeToggle } from "@/components/common/theme-toggle";
import Link from "next/link";

export const HomeFooterBottom = () => (
  <div className="mt-12 border-t border-gray-200 pt-8 dark:border-gray-700">
    <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
      <p className="text-sm text-gray-400">
        © <ClientSideYear /> NextJS Template. All rights reserved.
      </p>
      <div className="flex items-center space-x-4">
        <Link
          href="/status"
          className="text-sm text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
        >
          Status
        </Link>
        <span className="text-gray-300 dark:text-gray-700">•</span>
        <Link
          href="/contact"
          className="text-sm text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
        >
          Support
        </Link>
        <span className="text-gray-300 dark:text-gray-700">•</span>

        <ThemeToggle />
      </div>
    </div>
  </div>
);
