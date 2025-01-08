"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-8 w-[88px] rounded-lg bg-gray-100 p-1 dark:bg-gray-700" />;
  }

  return (
    <div className="flex items-center gap-1 rounded-lg bg-gray-100 p-1 dark:bg-gray-700">
      {themes.map((t) => (
        <button
          key={t.value}
          onClick={() => setTheme(t.value)}
          className={`rounded-md p-1 transition-colors ${
            t.value === theme
              ? "bg-white text-gray-800 shadow-sm dark:bg-gray-800 dark:text-gray-200"
              : "text-gray-600 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-600"
          }`}
          aria-label="Dark mode"
        >
          <t.icon className="h-4 w-4" />
        </button>
      ))}
    </div>
  );
};

const themes = [
  {
    icon: Sun,
    label: "Light",
    value: "light",
  },
  {
    icon: Monitor,
    label: "System",
    value: "system",
  },
  {
    icon: Moon,
    label: "Dark",
    value: "dark",
  },
] as const;
