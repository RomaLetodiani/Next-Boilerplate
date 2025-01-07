"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

export const HomeSections = () => {
  const pathname = usePathname();

  const sections = useMemo(() => {
    switch (pathname) {
      case "/":
        return homeSections;
      case "/about":
        return aboutSections;
      default:
        return [];
    }
  }, [pathname]);

  if (!sections) return null;

  return sections.map((section) => (
    <Link
      key={section.id}
      href={section.href}
      className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
    >
      {section.title}
    </Link>
  ));
};

const homeSections = [
  {
    id: 1,
    title: "Features",
    href: "#features",
  },
  {
    id: 2,
    title: "Pricing",
    href: "#pricing",
  },
];

const aboutSections = [
  {
    id: 1,
    title: "Stats",
    href: "#stats",
  },
  {
    id: 2,
    title: "Mission",
    href: "#mission",
  },
  {
    id: 3,
    title: "Team",
    href: "#team",
  },
];
