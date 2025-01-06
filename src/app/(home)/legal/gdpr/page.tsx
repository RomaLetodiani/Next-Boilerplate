import { LegalPageWrapper } from "@/components/(home)/pages/legal/legal-page-wrapper";

const GDPRPage = () => (
  <LegalPageWrapper
    title="GDPR Compliance"
    lastUpdated="January 6, 2025"
    content={[
      {
        title: "Your Rights",
        content: `Under GDPR, you have the right to access, rectify, port and erase your data. You also have rights to object to processing and restrict processing of your data.`,
      },
      {
        title: "Data Protection",
        content: `We implement appropriate technical and organizational measures to ensure a level of security appropriate to the risk.`,
      },
      {
        title: "International Transfers",
        content: `When we transfer your data outside the EEA, we ensure an adequate level of protection for your rights and freedoms.`,
      },
    ]}
  />
);

export default GDPRPage;
