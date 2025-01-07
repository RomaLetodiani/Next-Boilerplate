"use client";

import { NavItem } from "@/types/nav.types";
import { SIDEBAR_ID } from "@/utils/const";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

type SidebarMenuProps = {
  navigation: NavItem[];
};

export const SidebarMenu = ({ navigation }: SidebarMenuProps) => {
  const pathname = usePathname();
  const [openSections, setOpenSections] = useState<string[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleSection = (name: string) => {
    setOpenSections((prev) =>
      prev.includes(name) ? prev.filter((item) => item !== name) : [...prev, name],
    );
  };

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : href === "/dashboard"
        ? pathname === href
        : pathname.includes(href);

  const closeSidebar = () => {
    const sidebar = document.getElementById(SIDEBAR_ID) as HTMLInputElement;
    if (sidebar) {
      sidebar.checked = false;
      document.body.style.overflow = "auto";
    }
  };

  const NavLink = ({ item }: { item: NavItem }) => {
    const active = isActive(item.href);
    const hasSubItems = item.subNavItems && item.subNavItems.length > 0;
    const isOpen = openSections.includes(item.name);

    return (
      <li
        className={twMerge(
          "mb-0.5 rounded-lg py-2 pl-4 pr-3 last:mb-0",
          active &&
            "bg-[linear-gradient(135deg,var(--tw-gradient-stops))] from-indigo-500/[0.12] to-indigo-500/[0.04] dark:from-indigo-500/[0.24]",
        )}
      >
        {hasSubItems ? (
          <div>
            <button
              onClick={() => toggleSection(item.name)}
              className={twMerge(
                "block w-full text-gray-800 transition duration-150 dark:text-gray-100",
                !active && "hover:text-gray-900 dark:hover:text-white",
              )}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span
                    className={twMerge(
                      "shrink-0",
                      active ? "text-indigo-500" : "text-gray-400 dark:text-gray-500",
                    )}
                  >
                    {item.icon}
                  </span>
                  <span className="ml-4 text-sm font-medium duration-200">{item.name}</span>
                </div>
                <div className="ml-2 flex shrink-0">
                  <ChevronDown
                    className={twMerge(
                      "ml-1 size-6 shrink-0 text-gray-400 dark:text-gray-500",
                      isOpen && "rotate-180",
                    )}
                  />
                </div>
              </div>
            </button>

            {/* SubNav Items */}
            {isOpen && (
              <div className="mt-1">
                <ul className="mt-1 pl-10">
                  {item.subNavItems?.map((subItem) => (
                    <li key={subItem.name} className="mb-1 last:mb-0">
                      <Link
                        href={subItem.href}
                        onClick={closeSidebar}
                        className={twMerge(
                          "block truncate transition duration-150",
                          isActive(subItem.href)
                            ? "text-indigo-500"
                            : "text-gray-500/90 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200",
                        )}
                      >
                        <span className="text-sm font-medium duration-200">{subItem.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ) : (
          <Link
            href={item.href}
            onClick={closeSidebar}
            className={twMerge(
              "block text-gray-800 transition duration-150 dark:text-gray-100",
              !active && "hover:text-gray-900 dark:hover:text-white",
            )}
          >
            <div className="flex items-center">
              <span
                className={twMerge(
                  "shrink-0",
                  active ? "text-indigo-500" : "text-gray-400 dark:text-gray-500",
                )}
              >
                {item.icon}
              </span>
              <span className="ml-4 text-sm font-medium duration-200">{item.name}</span>
            </div>
          </Link>
        )}
      </li>
    );
  };

  return (
    <nav>
      <ul className="space-y-1">
        {navigation.map((item) => (
          <NavLink key={item.name} item={item} />
        ))}
      </ul>
    </nav>
  );
};
