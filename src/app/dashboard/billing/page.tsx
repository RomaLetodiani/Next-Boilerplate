import { AvailablePlans } from "@/components/dashboard/billing/available-plans";
import { BillingHeader } from "@/components/dashboard/billing/billing-header";
import { BillingHistory } from "@/components/dashboard/billing/billing-history";
import { CurrentPlan } from "@/components/dashboard/billing/current-plan";
import { PaymentMethod } from "@/components/dashboard/billing/payment-method";
import { DashboardPageWrapper } from "@/components/dashboard/dashboard-page-wrapper";

const BillingPage = () => (
  <DashboardPageWrapper>
    <BillingHeader />
    <CurrentPlan />
    <PaymentMethod />
    <AvailablePlans />
    <BillingHistory />
  </DashboardPageWrapper>
);

export default BillingPage;
