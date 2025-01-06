import { LegalPageWrapper } from "@/components/(home)/pages/legal/legal-page-wrapper";

const SLAPage = () => (
  <LegalPageWrapper
    title="Service Level Agreement"
    lastUpdated="January 6, 2025"
    content={[
      {
        title: "Service Availability",
        content: `We guarantee 99.9% uptime for our services, measured on a monthly basis, excluding scheduled maintenance windows.`,
      },
      {
        title: "Performance Metrics",
        content: `Our platform maintains response times under 500ms for API requests and 99th percentile latency under 2 seconds for web applications.`,
      },
      {
        title: "Support Response Times",
        content: `Critical issues: 1 hour response time
        High priority: 4 hours response time
        Normal priority: 24 hours response time
        Low priority: 48 hours response time`,
      },
      {
        title: "Maintenance Windows",
        content: `Scheduled maintenance is performed during off-peak hours with at least 48 hours advance notice to customers.`,
      },
      {
        title: "Credits and Compensation",
        content: `Service credits are provided for availability below guaranteed levels:
        < 99.9%: 10% credit
        < 99.5%: 25% credit
        < 99.0%: 50% credit`,
      },
      {
        title: "Exclusions",
        content: `SLA guarantees do not apply during force majeure events, scheduled maintenance, or issues caused by customer actions.`,
      },
    ]}
  />
);

export default SLAPage;
