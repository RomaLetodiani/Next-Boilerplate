import { NavItem } from "@/types/nav.types";
import Link from "next/link";

type HomeFooterLinkProps = Omit<NavItem, "icon">;

export const HomeFooterLink = ({ name, href }: HomeFooterLinkProps) => (
  <li key={href}>
    <Link
      href={href}
      className="text-sm text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
    >
      {name}
    </Link>
  </li>
);
