import { Activity, Briefcase, Eye, Users } from "lucide-react";
import { StatsGrid } from "../stats-grid";

export const OverviewStats = () => <StatsGrid stats={stats} />;

const stats = [
  {
    title: "Total Views",
    value: "1,234",
    change: "12%",
    changeType: "increase" as const,
    icon: Eye,
  },
  {
    title: "Active Users",
    value: "56",
    change: "8%",
    changeType: "increase" as const,
    icon: Users,
  },
  {
    title: "Projects",
    value: "12",
    change: "2%",
    changeType: "decrease" as const,
    icon: Briefcase,
  },
  {
    title: "Engagement",
    value: "89%",
    change: "5%",
    changeType: "increase" as const,
    icon: Activity,
  },
];
