import { BarChart, Home, Settings, User } from "lucide-react";

export const dashboardNavigationItems = [
  { name: "Overview", href: "/dashboard", icon: <Home /> },
  { name: "Analytics", href: "/dashboard/analytics", icon: <BarChart /> },
  { name: "Profile", href: "/dashboard/profile", icon: <User /> },
  { name: "Settings", href: "/dashboard/settings", icon: <Settings /> },
];
