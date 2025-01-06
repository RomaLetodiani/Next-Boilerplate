import { PagesDropdown } from "@/components/common/pages/pages-dropdown";
import { ThemeToggle } from "@/components/common/theme-toggle";
import { SidebarToggle } from "@/layout/sidebar/sidebar-toggle";
import HomeLogo from "./home-logo";
import { homeNavigationItems } from "./home-navigation-items";
import { HomeSections } from "./home-sections";
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
            <HomeSections />
            <PagesDropdown navigationItems={homeNavigationItems} />
            <ThemeToggle />
          </div>
          <SidebarToggle />
        </div>
      </nav>
    </header>
  </>
);
