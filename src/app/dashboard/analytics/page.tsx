import { AnalyticsChartsGrid } from "@/components/dashboard/analytics/analytics-charts-grid";
import { AnalyticsDetailedStats } from "@/components/dashboard/analytics/analytics-detailed-stats";
import { AnalyticsHeader } from "@/components/dashboard/analytics/analytics-header";
import { AnalyticsStats } from "@/components/dashboard/analytics/analytics-stats";

const AnalyticsPage = () => (
  <div className="space-y-8">
    <AnalyticsHeader />
    <AnalyticsStats />
    <AnalyticsChartsGrid />
    <AnalyticsDetailedStats />
  </div>
);

export default AnalyticsPage;
