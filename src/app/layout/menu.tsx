"use client";

import { BarChart, Home, Settings, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

const Menu = () => {
  const pathname = usePathname();

  return (
    <nav className="mt-8 flex-1 space-y-1 px-4">
      {navigation.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={twMerge(
            "group flex items-center rounded-lg px-4 py-2.5 text-sm font-medium transition-all hover:bg-gray-50 dark:hover:bg-gray-700/50",
            pathname === item.href && "bg-gray-100 dark:bg-gray-700/50",
          )}
        >
          <item.icon className="mr-3 h-5 w-5 flex-shrink-0 text-gray-400 transition-colors group-hover:text-indigo-600 dark:group-hover:text-indigo-400" />
          <span className="text-gray-700 transition-colors group-hover:text-indigo-600 dark:text-gray-300 dark:group-hover:text-indigo-400">
            {item.name}
          </span>
        </Link>
      ))}
    </nav>
  );
};

const navigation = [
  { name: "Overview", href: "/dashboard", icon: Home },
  { name: "Analytics", href: "/dashboard/analytics", icon: BarChart },
  { name: "Profile", href: "/dashboard/profile", icon: User },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export default Menu;
