import { AnalyticsChartsGrid } from "@/components/dashboard/analytics/analytics-charts-grid";
import { AnalyticsDetailedStats } from "@/components/dashboard/analytics/analytics-detailed-stats";
import { AnalyticsHeader } from "@/components/dashboard/analytics/analytics-header";
import { AnalyticsStats } from "@/components/dashboard/analytics/analytics-stats";
import { DashboardPageWrapper } from "@/components/dashboard/dashboard-page-wrapper";

const AnalyticsPage = () => (
  <DashboardPageWrapper>
    <AnalyticsHeader />
    <AnalyticsStats />
    <AnalyticsChartsGrid />
    <AnalyticsDetailedStats />
  </DashboardPageWrapper>
);

export default AnalyticsPage;
