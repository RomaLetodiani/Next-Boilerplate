import { BarChart, Home, Layout, Lock, User } from "lucide-react";
import { dashboardNavigationItems } from "../dashboard/dashboard-navigation-items";

export const homeNavigationItems = [
  { name: "Home", href: "/", icon: <Home /> },
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: <Layout />,
    subNavItems: dashboardNavigationItems,
  },
  { name: "About", href: "/about", icon: <BarChart /> },
  { name: "Contact", href: "/contact", icon: <User /> },
  { name: "Login", href: "/login", icon: <Lock /> },
];
