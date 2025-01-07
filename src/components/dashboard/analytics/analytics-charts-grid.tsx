import { ChartCard, MockCardChart } from "@/components/common/chart-card";
import { LineChart, PieChart } from "lucide-react";

export const AnalyticsChartsGrid = () => (
  <div className="grid gap-6 lg:grid-cols-2">
    {charts.map((chart, index) => (
      <ChartCard key={index} {...chart} />
    ))}
  </div>
);

const charts = [
  {
    title: "Revenue Overview",
    description: "Monthly revenue performance",
    icon: LineChart,
    chart: <MockCardChart title="Revenue Chart" />,
  },
  {
    title: "User Distribution",
    description: "Active users by region",
    icon: PieChart,
    chart: <MockCardChart title="User Distribution Chart" />,
  },
];
