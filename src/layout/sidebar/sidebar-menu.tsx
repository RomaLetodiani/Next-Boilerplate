"use client";

import { SIDEBAR_ID } from "@/utils/const";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useState } from "react";
import { twMerge } from "tailwind-merge";

type NavItem = {
  name: string;
  href: string;
  icon: ReactNode;
  subNavItems?: NavItem[];
};

type MenuProps = {
  navigation: NavItem[];
};

export const SidebarMenu = ({ navigation }: MenuProps) => {
  const pathname = usePathname();
  const [openSections, setOpenSections] = useState<string[]>([]);

  const toggleSection = (name: string) => {
    setOpenSections((prev) =>
      prev.includes(name) ? prev.filter((item) => item !== name) : [...prev, name],
    );
  };

  const isActive = (href: string) => pathname === href;

  const NavLink = ({ item }: { item: NavItem }) => {
    const active = isActive(item.href);
    const hasSubItems = item.subNavItems && item.subNavItems.length > 0;
    const isOpen = openSections.includes(item.name);

    return (
      <div className="px-3">
        {hasSubItems ? (
          <button
            onClick={() => toggleSection(item.name)}
            className={twMerge(
              "flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors",
              active
                ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-400"
                : "text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700/50",
            )}
          >
            <div className="flex items-center space-x-3">
              <span className="text-gray-400">{item.icon}</span>
              <span>{item.name}</span>
            </div>
            <ChevronDown
              className={twMerge("h-4 w-4 transition-transform", isOpen && "rotate-180")}
            />
          </button>
        ) : (
          <Link
            href={item.href}
            onClick={() => {
              document.getElementById(SIDEBAR_ID)?.click();
            }}
            className={twMerge(
              "flex items-center space-x-3 rounded-lg px-3 py-2 text-sm transition-colors",
              active
                ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-400"
                : "text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700/50",
            )}
          >
            <span className="text-gray-400">{item.icon}</span>
            <span>{item.name}</span>
          </Link>
        )}

        {/* SubNav Items */}
        {hasSubItems && isOpen && (
          <div className="ml-6 mt-1 space-y-1 border-l border-gray-200 pl-1 dark:border-gray-700">
            {item.subNavItems?.map((subItem) => <NavLink key={subItem.name} item={subItem} />)}
          </div>
        )}
      </div>
    );
  };

  return (
    <nav className="space-y-1">
      {navigation.map((item) => (
        <NavLink key={item.name} item={item} />
      ))}
    </nav>
  );
};
