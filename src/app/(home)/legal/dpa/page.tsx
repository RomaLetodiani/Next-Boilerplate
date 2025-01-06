import { LegalPageWrapper } from "@/components/(home)/pages/legal/legal-page-wrapper";

const DPAPage = () => (
  <LegalPageWrapper
    title="Data Processing Agreement"
    lastUpdated="January 6, 2025"
    content={[
      {
        title: "Scope of Processing",
        content: `This agreement covers the processing of personal data carried out by us on behalf of our customers in accordance with applicable data protection laws.`,
      },
      {
        title: "Data Protection",
        content: `We implement appropriate technical and organizational measures to ensure the security of personal data, including encryption, access controls, and regular security assessments.`,
      },
      {
        title: "Subprocessors",
        content: `We may engage subprocessors to assist in providing our services. All subprocessors are bound by similar data protection obligations.`,
      },
      {
        title: "Data Transfer",
        content: `Any transfer of personal data outside the EEA will be conducted in compliance with applicable data protection laws and appropriate safeguards.`,
      },
      {
        title: "Audit Rights",
        content: `Customers have the right to audit our data protection practices, subject to reasonable notice and confidentiality requirements.`,
      },
    ]}
  />
);

export default DPAPage;
