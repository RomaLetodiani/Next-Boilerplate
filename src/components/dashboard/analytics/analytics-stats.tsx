import { BarChart2, DollarSign, TrendingUp, Users } from "lucide-react";
import { StatsGrid } from "../stats-grid";

export const AnalyticsStats = () => <StatsGrid stats={stats} />;

const stats = [
  {
    title: "Total Revenue",
    value: "$54,234",
    change: "12%",
    changeType: "increase" as const,
    icon: DollarSign,
  },
  {
    title: "Active Users",
    value: "2,345",
    change: "8%",
    changeType: "increase" as const,
    icon: Users,
  },
  {
    title: "Conversion Rate",
    value: "3.24%",
    change: "2%",
    changeType: "decrease" as const,
    icon: TrendingUp,
  },
  {
    title: "Avg. Order Value",
    value: "$89.34",
    change: "5%",
    changeType: "increase" as const,
    icon: BarChart2,
  },
];
