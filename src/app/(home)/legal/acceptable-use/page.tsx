import { LegalPageWrapper } from "@/components/(home)/pages/legal/legal-page-wrapper";

const AcceptableUsePage = () => (
  <LegalPageWrapper
    title="Acceptable Use Policy"
    lastUpdated="January 6, 2025"
    content={[
      {
        title: "Prohibited Activities",
        content: `Users are prohibited from engaging in any illegal activities, distributing malware, attempting unauthorized access, or conducting denial of service attacks.`,
      },
      {
        title: "Content Guidelines",
        content: `Content must not violate intellectual property rights, contain malicious code, or include inappropriate or harmful material.`,
      },
      {
        title: "Security Requirements",
        content: `Users must maintain reasonable security measures, including secure passwords, up-to-date software, and protection against unauthorized access.`,
      },
      {
        title: "Network Usage",
        content: `Users must not overload network resources, conduct automated scanning, or attempt to circumvent system limitations.`,
      },
      {
        title: "Enforcement Actions",
        content: `We reserve the right to suspend or terminate access for violations of this policy, with or without notice.`,
      },
    ]}
  />
);

export default AcceptableUsePage;
