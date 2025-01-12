import { PricingFAQs } from "@/components/(home)/pages/pricing/pricing-faqs";
import { PricingHeader } from "@/components/(home)/pages/pricing/pricing-header";
import { PricingPageWrapper } from "@/components/(home)/pages/pricing/pricing-page-wrapper";
import { PricingPlans } from "@/components/(home)/pages/pricing/pricing-plans";

const PricingPage = () => (
  <PricingPageWrapper>
    <PricingHeader />
    <PricingPlans />
    <PricingFAQs />
  </PricingPageWrapper>
);

export default PricingPage;
