import { LegalPageWrapper } from "@/components/(home)/pages/legal/legal-page-wrapper";

const CopyrightPage = () => (
  <LegalPageWrapper
    title="Copyright Policy"
    lastUpdated="January 6, 2025"
    content={[
      {
        title: "Copyright Protection",
        content: `All content on this platform is protected by copyright law and other intellectual property rights.`,
      },
      {
        title: "Licensed Materials",
        content: `Users are granted a limited license to use our materials in accordance with our terms of service and applicable licenses.`,
      },
      {
        title: "Fair Use",
        content: `Limited use of copyrighted material may be permitted for purposes such as criticism, commentary, news reporting, teaching, scholarship, or research.`,
      },
      {
        title: "DMCA Compliance",
        content: `We follow the Digital Millennium Copyright Act (DMCA) guidelines for addressing copyright infringement claims.`,
      },
      {
        title: "Reporting Infringement",
        content: `To report copyright infringement, please provide detailed information about the copyrighted work and the location of the alleged infringement.`,
      },
    ]}
  />
);

export default CopyrightPage;
