import { authNavigationItems } from "@/layout/(auth)/auth-navigation-items";
import { dashboardNavigationItems } from "@/layout/dashboard/dashboard-navigation-items";
import { NavItem } from "@/types/nav.types";
import {
  BarChart,
  Book,
  BookCheck,
  BookHeart,
  CircleDollarSign,
  HelpCircle,
  Home,
  ImageIcon,
  Info,
  Layout,
  LockKeyhole,
  Map,
  Search,
  ShieldCheck,
  User,
} from "lucide-react";
import { legalNavigationItems } from "../../pages/legal/legal-navigation-items";

export const companyNavigationItems: NavItem[] = [
  { name: "Home", href: "/", icon: <Home /> },
  { name: "About", href: "/about", icon: <Info /> },
  { name: "Blogs", href: "/blogs", icon: <Book /> },
  { name: "Contact", href: "/contact", icon: <User /> },
  { name: "Pricing", href: "/pricing", icon: <BarChart /> },
  { name: "FAQ", href: "/faq", icon: <HelpCircle /> },
];

export const productNavigationItems: NavItem[] = [
  { name: "Docs", href: "/docs", icon: <Book /> },
  { name: "Help", href: "/help", icon: <HelpCircle /> },
  { name: "Search", href: "/search", icon: <Search /> },
  { name: "Sitemap", href: "/sitemap", icon: <Map /> },
  { name: "Status", href: "/status", icon: <CircleDollarSign /> },
  { name: "Resources", href: "/resources", icon: <BookHeart /> },
  { name: "Changelog", href: "/changelog", icon: <BookCheck /> },
  { name: "Screenshots", href: "/screenshots", icon: <ImageIcon /> },
];

export const homeNavigationItems: NavItem[] = [
  ...companyNavigationItems,
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: <Layout />,
    subNavItems: dashboardNavigationItems,
  },
  {
    name: "Auth",
    href: "/auth",
    icon: <LockKeyhole />,
    subNavItems: authNavigationItems,
  },
  ...productNavigationItems,
  { name: "Legal", href: "/legal", icon: <ShieldCheck />, subNavItems: legalNavigationItems },
];
