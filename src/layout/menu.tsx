"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type NavigationItem = {
  name: string;
  href: string;
  icon: ReactNode;
};

type MenuProps = {
  navigation: NavigationItem[];
};

export const Menu = ({ navigation }: MenuProps) => {
  const pathname = usePathname();

  return (
    <nav className="mt-8 flex-1 space-y-1 px-4">
      {navigation.map((item) => (
        <Link
          href={item.href}
          key={item.name}
          onClick={() => {
            document.getElementById("sidebar-toggle")?.click();
          }}
          className={twMerge(
            "group flex items-center rounded-lg px-4 py-2.5 text-sm font-medium transition-all hover:bg-gray-50 dark:hover:bg-gray-700/50",
            pathname === item.href && "bg-gray-100 dark:bg-gray-700/50",
          )}
        >
          <div className="mr-3 h-5 w-5 flex-shrink-0 text-gray-400 transition-colors group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
            {item.icon}
          </div>
          <span className="text-gray-700 transition-colors group-hover:text-indigo-600 dark:text-gray-300 dark:group-hover:text-indigo-400">
            {item.name}
          </span>
        </Link>
      ))}
    </nav>
  );
};
