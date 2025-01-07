import { NotificationsDropdown } from "@/components/common/notifications-dropdown";
import { ThemeToggle } from "@/components/common/theme-toggle";
import { Search } from "lucide-react";
import { SidebarToggle } from "../sidebar/sidebar-toggle";

export const DashboardHeader = () => (
  <header className="sticky top-0 z-20 backdrop-blur-lg flex h-16 flex-shrink-0 border-b  dark:border-gray-700 bg-white/80 dark:bg-gray-800/80">
    <div className="flex flex-1 items-center justify-between lg:justify-end px-4 sm:px-6 lg:px-8">
      <SidebarToggle />
      <div className="ml-4 flex items-center space-x-4">
        <ThemeToggle />

        <button className="hidden lg:flex items-center space-x-2 px-3 py-1.5 text-sm text-gray-400 border border-gray-200 rounded-lg dark:border-gray-700">
          <Search className="w-4 h-4" />
          <span>Quick search...</span>
          <kbd className="px-1.5 py-0.5 text-xs text-gray-500 bg-gray-100 rounded dark:bg-gray-700">
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
