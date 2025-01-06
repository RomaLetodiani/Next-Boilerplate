"use client";

import { NavItem } from "@/types/nav.types";
import Link from "next/link";

export const PageNavItem = ({ href, icon, name }: NavItem) => (
  <Link
    href={href}
    onClick={() => {
      document.getElementById("pages-toggle")?.click();
    }}
    className="flex items-center space-x-2 rounded-lg px-3 py-2 text-sm text-gray-600 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700/50"
  >
    <span className="text-gray-400">{icon}</span>
    <span>{name}</span>
  </Link>
);
