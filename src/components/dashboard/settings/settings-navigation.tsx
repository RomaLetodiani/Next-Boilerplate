"use client";

import { Bell, Globe, Key, Palette, Shield } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const SettingsNavigation = () => {
  const pathname = usePathname();

  return (
    <div className="space-y-4">
      {settingsNavigation.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className={`flex w-full items-center space-x-3 rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors ${
            item.href === pathname
              ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-400"
              : "text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700/50"
          }`}
        >
          <item.icon className="h-5 w-5" />
          <span>{item.label}</span>
        </Link>
      ))}
    </div>
  );
};

const settingsNavigation = [
  { icon: Bell, label: "Notifications", href: "/dashboard/settings" },
  { icon: Shield, label: "Privacy", href: "/dashboard/settings/privacy" },
  { icon: Palette, label: "Appearance", href: "/dashboard/settings/appearance" },
  { icon: Globe, label: "Language", href: "/dashboard/settings/language" },
  { icon: Key, label: "Security", href: "/dashboard/settings/security" },
];
