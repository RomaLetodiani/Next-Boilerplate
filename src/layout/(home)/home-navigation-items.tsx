import {
  BarChart,
  Book,
  CircleDollarSign,
  HelpCircle,
  Home,
  Info,
  Layout,
  LockKeyhole,
  ShieldCheck,
  User,
} from "lucide-react";
import { authNavigationItems } from "../(auth)/auth-navigation-items";
import { dashboardNavigationItems } from "../dashboard/dashboard-navigation-items";
import { legalNavigationItems } from "./legal/legal-navigation-items";

export const homeNavigationItems = [
  { name: "Home", href: "/", icon: <Home /> },

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
  { name: "About", href: "/about", icon: <Info /> },
  { name: "Contact", href: "/contact", icon: <User /> },
  { name: "Docs", href: "/docs", icon: <Book /> },
  { name: "Help", href: "/help", icon: <HelpCircle /> },
  { name: "Pricing", href: "/pricing", icon: <BarChart /> },
  { name: "Status", href: "/status", icon: <CircleDollarSign /> },
  { name: "Legal", href: "/legal", icon: <ShieldCheck />, subNavItems: legalNavigationItems },
];
