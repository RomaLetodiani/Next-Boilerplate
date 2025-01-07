import { NavItem } from "@/types/nav.types";
import { Lock } from "lucide-react";

export const authNavigationItems: NavItem[] = [
  { name: "Login", href: "/login", icon: <Lock /> },
  // { name: "Register", href: "/register", icon: <User /> },
];
