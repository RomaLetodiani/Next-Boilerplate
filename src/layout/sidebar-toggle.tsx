"use client";

import { Menu } from "lucide-react";

export const SidebarToggle = () => (
  <div className="flex items-center lg:hidden">
    <label
      htmlFor="sidebar-toggle"
      className="-ml-2 rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 dark:hover:bg-gray-700"
    >
      <span className="sr-only">Open sidebar</span>
      <Menu className="h-6 w-6" />
    </label>
  </div>
);

export const SidebarToggleInput = () => (
  <input
    type="checkbox"
    id="sidebar-toggle"
    className="peer hidden"
    onChange={(e) => {
      if (e.target.checked) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    }}
  />
);
