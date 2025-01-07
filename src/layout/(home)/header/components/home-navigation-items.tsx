import { authNavigationItems } from "@/layout/(auth)/auth-navigation-items";
import { dashboardNavigationItems } from "@/layout/dashboard/dashboard-navigation-items";
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

export const companyNavigationItems = [
  { name: "Home", href: "/", icon: <Home /> },
  { name: "About", href: "/about", icon: <Info /> },
  { name: "Blog", href: "/blog", icon: <Book /> },
  { name: "Contact", href: "/contact", icon: <User /> },
  { name: "Pricing", href: "/pricing", icon: <BarChart /> },
];

export const productNavigationItems = [
  { name: "Docs", href: "/docs", icon: <Book /> },
  { name: "Help", href: "/help", icon: <HelpCircle /> },
  { name: "Search", href: "/search", icon: <Search /> },
  { name: "Sitemap", href: "/sitemap", icon: <Map /> },
  { name: "Status", href: "/status", icon: <CircleDollarSign /> },
  { name: "Resources", href: "/resources", icon: <BookHeart /> },
  { name: "Changelog", href: "/changelog", icon: <BookCheck /> },
  { name: "Screenshots", href: "/screenshots", icon: <ImageIcon /> },
];

export const homeNavigationItems = [
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
