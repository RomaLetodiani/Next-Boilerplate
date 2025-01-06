"use client";

import { NavItem } from "@/types/nav.types";
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

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.includes(href);
  };

  return (
    <div className="absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-xl border border-gray-200 bg-white p-2 shadow-lg ring-1 ring-black ring-opacity-5 dark:border-gray-700 dark:bg-gray-800 invisible opacity-0 translate-y-2 peer-checked:visible peer-checked:opacity-100 peer-checked:translate-y-0 transition-all duration-200">
      <div className="space-y-1 max-h-[600px] pr-2 overflow-y-auto">
        {navigationItems.map((section) => (
          <div key={section.name}>
            {section.subNavItems ? (
              <div className="space-y-1">
                <div
                  className={twMerge(
                    "flex items-center space-x-2 px-3 py-2 rounded-lg text-xs font-semibold uppercase text-gray-500 dark:text-gray-400",
                    isActive(section.href) && "bg-gray-100 dark:bg-gray-700/50",
                  )}
                >
                  <span className="text-gray-400">{section.icon}</span>
                  <span>{section.name}</span>
                </div>

                <div className="ml-10 border-l border-dashed border-gray-200 pl-1 dark:border-gray-700">
                  {section.subNavItems.map((item) => (
                    <PageNavItem
                      key={item.name}
                      href={item.href}
                      icon={item.icon}
                      name={item.name}
                      isActive={isActive(item.href)}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <PageNavItem
                href={section.href}
                icon={section.icon}
                name={section.name}
                isActive={isActive(section.href)}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default PagesMenu;
