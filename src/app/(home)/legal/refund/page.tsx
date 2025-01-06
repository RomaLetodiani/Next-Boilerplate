import { LegalPageWrapper } from "@/components/(home)/pages/legal/legal-page-wrapper";

const RefundPage = () => (
  <LegalPageWrapper
    title="Refund Policy"
    lastUpdated="January 6, 2025"
    content={[
      {
        title: "Eligibility",
        content: `You may be eligible for a refund if requested within 14 days of purchase and if the service has not been substantially used.`,
      },
      {
        title: "Process",
        content: `To request a refund, please contact our support team with your order details. We aim to process all refund requests within 5-7 business days.`,
      },
      {
        title: "Exceptions",
        content: `Some purchases may not be eligible for refunds, including but not limited to: custom development work, used API credits, and enterprise subscriptions.`,
      },
    ]}
  />
);

export default RefundPage;
