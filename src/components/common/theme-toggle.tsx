"use client";

import { logger } from "@/lib/logger";
import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  logger.info("ThemeToggle", { theme });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex items-center gap-1 rounded-lg bg-gray-100 p-1 dark:bg-gray-700">
      <button
        onClick={() => setTheme("light")}
        className={`rounded-md p-2 transition-colors ${
          theme === "light"
            ? "bg-white text-gray-800 shadow-sm dark:bg-gray-800 dark:text-gray-200"
            : "text-gray-600 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-600"
        }`}
        aria-label="Light mode"
      >
        <Sun className="h-4 w-4" />
      </button>
      <button
        onClick={() => setTheme("system")}
        className={`rounded-md p-2 transition-colors ${
          theme === "system"
            ? "bg-white text-gray-800 shadow-sm dark:bg-gray-800 dark:text-gray-200"
            : "text-gray-600 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-600"
        }`}
        aria-label="System theme"
      >
        <Monitor className="h-4 w-4" />
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={`rounded-md p-2 transition-colors ${
          theme === "dark"
            ? "bg-white text-gray-800 shadow-sm dark:bg-gray-800 dark:text-gray-200"
            : "text-gray-600 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-600"
        }`}
        aria-label="Dark mode"
      >
        <Moon className="h-4 w-4" />
      </button>
    </div>
  );
};
