import { LegalPageWrapper } from "@/components/(home)/pages/legal/legal-page-wrapper";

const TermsPage = () => (
  <LegalPageWrapper
    title="Terms & Conditions"
    lastUpdated="January 6, 2025"
    content={[
      {
        title: "1. Acceptance of Terms",
        content: `By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.`,
      },
      {
        title: "2. Use License",
        content: `Permission is granted to temporarily download one copy of the materials (information or software) on our website for personal, non-commercial transitory viewing only.`,
      },
      {
        title: "3. Disclaimer",
        content: `The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability.`,
      },
    ]}
  />
);

export default TermsPage;
