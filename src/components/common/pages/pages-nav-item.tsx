"use client";

import { NavItem } from "@/types/nav.types";
import { PAGES_MENU_ID } from "@/utils/const";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

type PageNavItemProps = NavItem & {
  isActive?: boolean;
  isSubNavItem?: boolean;
};

export const PageNavItem = ({ href, icon, name, isActive, isSubNavItem }: PageNavItemProps) => (
  <Link
    href={href}
    onClick={() => {
      document.getElementById(PAGES_MENU_ID)?.click();
    }}
    className={twMerge(
      "block transition duration-150",
      isActive
        ? "text-indigo-400"
        : "block w-full hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200",
    )}
  >
    <div className="flex items-center py-1">
      {!isSubNavItem && (
        <span
          className={twMerge(
            "mr-4 shrink-0",
            isActive ? "text-indigo-400" : "text-gray-400 dark:text-gray-500",
          )}
        >
          {icon}
        </span>
      )}
      <span className="text-sm font-medium duration-200">{name}</span>
    </div>
  </Link>
);
