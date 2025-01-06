import { NavItem } from "@/types/nav.types";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

type PagesDropdownProps = {
  navigationItems: NavItem[];
};

export const PagesDropdown = ({ navigationItems }: PagesDropdownProps) => (
  <div className="relative group">
    {/* Hidden checkbox for toggle state */}
    <input type="checkbox" id="pages-toggle" className="peer hidden" />

    {/* Toggle button */}
    <label
      htmlFor="pages-toggle"
      className="flex items-center space-x-1 text-sm text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white cursor-pointer"
    >
      <span>Pages</span>
      <ChevronDown className="h-4 w-4 transition-transform peer-checked:rotate-180 group-hover:text-current" />
    </label>

    {/* Backdrop - visible when menu is open */}
    <label
      htmlFor="pages-toggle"
      className="fixed inset-0 z-40  opacity-0 invisible peer-checked:opacity-100 peer-checked:visible"
    />

    {/* Dropdown menu */}
    <div className="absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-xl border border-gray-200 bg-white p-2 shadow-lg ring-1 ring-black ring-opacity-5 dark:border-gray-700 dark:bg-gray-800 invisible opacity-0 translate-y-2 peer-checked:visible peer-checked:opacity-100 peer-checked:translate-y-0 transition-all duration-200">
      <div className="space-y-1">
        {navigationItems.map((section) => (
          <div key={section.name}>
            {section.subNavItems ? (
              <div className="space-y-1">
                <div className="flex items-center space-x-2 px-3 py-2 text-xs font-semibold uppercase text-gray-500 dark:text-gray-400">
                  <span className="text-gray-400">{section.icon}</span>
                  <span>{section.name}</span>
                </div>

                <div className="ml-8 border-l border-gray-200 pl-1 dark:border-gray-700">
                  {section.subNavItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center space-x-2 rounded-lg px-3 py-2 text-sm text-gray-600 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700/50"
                    >
                      <span className="text-gray-400">{item.icon}</span>
                      <span>{item.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                href={section.href}
                className="flex items-center space-x-2 rounded-lg px-3 py-2 text-sm text-gray-600 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700/50"
              >
                <span className="text-gray-400">{section.icon}</span>
                <span>{section.name}</span>
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
);
