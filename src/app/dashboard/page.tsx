import { DashboardPageWrapper } from "@/components/dashboard/dashboard-page-wrapper";
import { OverviewStats } from "@/components/dashboard/overview/overview-stats";
import { QuickActions } from "@/components/dashboard/overview/quick-actions";
import { RecentActivity } from "@/components/dashboard/overview/recent-activity";
import { TeamPerformance } from "@/components/dashboard/overview/team-performance";
import { WelcomeSection } from "@/components/dashboard/overview/welcome-section";

const DashboardPage = () => (
  <DashboardPageWrapper>
    <WelcomeSection />
    <OverviewStats />
    <RecentActivity />
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <QuickActions />
      <TeamPerformance />
    </div>
  </DashboardPageWrapper>
);

export default DashboardPage;
