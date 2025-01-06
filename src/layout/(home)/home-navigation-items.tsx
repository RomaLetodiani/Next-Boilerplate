import { BarChart, CircleDollarSign, Home, Info, Layout, Lock, User } from "lucide-react";
import { authNavigationItems } from "../(auth)/auth-navigation-items";
import { dashboardNavigationItems } from "../dashboard/dashboard-navigation-items";

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
    icon: <Lock />,
    subNavItems: authNavigationItems,
  },
  { name: "About", href: "/about", icon: <Info /> },
  { name: "Contact", href: "/contact", icon: <User /> },
  { name: "Pricing", href: "/pricing", icon: <BarChart /> },
  { name: "Status", href: "/status", icon: <CircleDollarSign /> },
];
