import { PagesDropdown } from "@/components/pages-dropdown";
import { SidebarToggle } from "@/layout/sidebar/sidebar-toggle";
import Link from "next/link";
import HomeLogo from "./home-logo";
import { homeNavigationItems } from "./home-navigation-items";
import { HomeSidebar } from "./home-sidebar";

export const HomeHeader = () => (
  <>
    <HomeSidebar />
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/80 backdrop-blur-sm dark:border-gray-700 dark:bg-gray-800/80">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <HomeLogo />

        {/* Navigation */}
        <div className="flex items-center space-x-8">
          <div className="hidden items-center space-x-8 md:flex">
            <Link
              href="#features"
              className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              Pricing
            </Link>
            <PagesDropdown navigationItems={homeNavigationItems} />
          </div>
          <SidebarToggle />
        </div>
      </nav>
    </header>
  </>
);
