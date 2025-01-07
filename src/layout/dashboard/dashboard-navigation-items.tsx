import { NavItem } from "@/types/nav.types";
import { BarChart, CreditCard, Home, Settings, User } from "lucide-react";

export const dashboardNavigationItems: NavItem[] = [
  { name: "Overview", href: "/dashboard", icon: <Home /> },
  { name: "Analytics", href: "/dashboard/analytics", icon: <BarChart /> },
  { name: "Profile", href: "/dashboard/profile", icon: <User /> },
  { name: "Settings", href: "/dashboard/settings", icon: <Settings /> },
  { name: "Billing", href: "/dashboard/billing", icon: <CreditCard /> },
];
