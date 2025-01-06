"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { homeNavigationItems } from "./home-navigation-items";

export const PagesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 text-sm text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
      >
        <span>Pages</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} aria-hidden="true" />

          {/* Dropdown menu */}
          <div className="absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-xl border border-gray-200 bg-white p-2 shadow-lg ring-1 ring-black ring-opacity-5 dark:border-gray-700 dark:bg-gray-800">
            <div className="space-y-1">
              {homeNavigationItems.map((section) => (
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
                            onClick={() => setIsOpen(false)}
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
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="text-gray-400">{section.icon}</span>
                      <span>{section.name}</span>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
