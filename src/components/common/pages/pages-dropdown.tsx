import { type NavItem } from "@/types/nav.types";
import { ChevronDown } from "lucide-react";
import PagesMenu from "./pages-menu";

type PagesDropdownProps = {
  navigationItems: NavItem[];
};

export const PagesDropdown = ({ navigationItems }: PagesDropdownProps) => (
  <div className="group relative">
    {/* Hidden checkbox for toggle state */}
    <input type="checkbox" id="pages-toggle" className="peer hidden" />

    {/* Toggle button */}
    <label
      htmlFor="pages-toggle"
      className="flex cursor-pointer items-center space-x-1 text-sm text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
    >
      <span>Pages</span>
      <ChevronDown className="h-4 w-4 transition-transform group-hover:text-current peer-checked:rotate-180" />
    </label>

    {/* Backdrop - visible when menu is open */}
    <label
      htmlFor="pages-toggle"
      className="invisible fixed inset-0 z-40 opacity-0 peer-checked:visible peer-checked:opacity-100"
    />

    <PagesMenu navigationItems={navigationItems} />
  </div>
);
