"use client";

import { NavItem } from "@/types/nav.types";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { PageNavItem } from "./pages-nav-item";

type PagesMenuProps = {
  navigationItems: NavItem[];
};

const PagesMenu = ({ navigationItems }: PagesMenuProps) => {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [openSections, setOpenSections] = useState<string[]>([]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleSection = (name: string) => {
    setOpenSections((prev) =>
      prev.includes(name) ? prev.filter((item) => item !== name) : [...prev, name],
    );
  };

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : href === "/dashboard"
        ? pathname === href
        : pathname.includes(href);

  return (
    <div className="invisible absolute right-0 z-50 mt-2 w-64 origin-top-right translate-y-2 rounded-xl border border-gray-200 bg-white p-2 opacity-0 shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-200 peer-checked:visible peer-checked:translate-y-0 peer-checked:opacity-100 dark:border-gray-700 dark:bg-gray-800">
      <ul className="max-h-[600px] space-y-1 overflow-y-auto pr-2">
        {navigationItems.map((section) => (
          <li
            key={section.name}
            className={twMerge(
              "mb-0.5 rounded-lg pl-4 pr-3 last:mb-0",
              isActive(section.href) &&
                "bg-[linear-gradient(135deg,var(--tw-gradient-stops))] from-indigo-500/[0.12] to-indigo-500/[0.04] dark:from-indigo-500/[0.24]",
              isActive(section.href) && section.subNavItems && "py-1",
            )}
          >
            {section.subNavItems ? (
              <div className="space-y-1">
                <button
                  onClick={() => toggleSection(section.name)}
                  className={twMerge(
                    "block w-full text-gray-500/90 transition duration-150 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200",
                    !isActive(section.href) && "hover:text-gray-900 dark:hover:text-white",
                  )}
                >
                  <div className="flex items-center justify-between py-1">
                    <div className="flex items-center">
                      <span
                        className={twMerge(
                          "shrink-0",
                          isActive(section.href)
                            ? "text-indigo-500"
                            : "text-gray-400 dark:text-gray-500",
                        )}
                      >
                        {section.icon}
                      </span>
                      <span className="ml-4 text-sm font-medium duration-200">{section.name}</span>
                    </div>
                    <div className="ml-2 flex shrink-0">
                      <ChevronDown
                        className={twMerge(
                          "ml-1 size-6 shrink-0 text-gray-400 dark:text-gray-500",
                          openSections.includes(section.name) && "rotate-180",
                        )}
                      />
                    </div>
                  </div>
                </button>

                {openSections.includes(section.name) && (
                  <ul className="mb-2 pl-10">
                    {section.subNavItems.map((item) => (
                      <li key={item.name} className="mb-1 last:mb-0">
                        <PageNavItem
                          key={item.name}
                          href={item.href}
                          icon={item.icon}
                          name={item.name}
                          isActive={isActive(item.href)}
                          isSubNavItem
                        />
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <PageNavItem
                href={section.href}
                icon={section.icon}
                name={section.name}
                isActive={isActive(section.href)}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default PagesMenu;
