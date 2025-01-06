import { BarChart, Home, Info, Layout, Lock, User } from "lucide-react";
import { dashboardNavigationItems } from "../dashboard/dashboard-navigation-items";

export const homeNavigationItems = [
  { name: "Home", href: "/", icon: <Home /> },
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: <Layout />,
    subNavItems: dashboardNavigationItems,
  },
  { name: "About", href: "/about", icon: <Info /> },
  { name: "Contact", href: "/contact", icon: <User /> },
  { name: "Pricing", href: "/pricing", icon: <BarChart /> },
  { name: "Login", href: "/login", icon: <Lock /> },
];
