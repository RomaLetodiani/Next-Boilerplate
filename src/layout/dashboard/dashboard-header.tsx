import { NotificationsDropdown } from "@/components/common/notifications-dropdown";
import { ThemeToggle } from "@/components/common/theme-toggle";
import { Search } from "lucide-react";
import { SidebarToggle } from "../sidebar/sidebar-toggle";

export const DashboardHeader = () => (
  <header className="sticky top-0 z-20 flex h-16 flex-shrink-0 border-b bg-white/80 backdrop-blur-lg dark:border-gray-700 dark:bg-gray-800/80">
    <div className="flex flex-1 items-center justify-between px-4 sm:px-6 lg:justify-end lg:px-8">
      <SidebarToggle />
      <div className="ml-4 flex items-center space-x-4">
        <ThemeToggle />

        <button className="hidden items-center space-x-2 rounded-lg border border-gray-200 px-3 py-1.5 text-sm text-gray-400 dark:border-gray-700 lg:flex">
          <Search className="h-4 w-4" />
          <span>Quick search...</span>
          <kbd className="rounded bg-gray-100 px-1.5 py-0.5 text-xs text-gray-500 dark:bg-gray-700">
            ⌘K
          </kbd>
        </button>

        <NotificationsDropdown />
        {/* Profile dropdown */}
        <div className="relative">
          <button className="flex items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-gray-800">
            <span className="sr-only">Open user menu</span>
            <div className="h-8 w-8 rounded-full bg-indigo-100 dark:bg-indigo-900/50">
              <span className="flex h-full w-full items-center justify-center text-sm font-medium text-indigo-600 dark:text-indigo-400">
                U
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  </header>
);
