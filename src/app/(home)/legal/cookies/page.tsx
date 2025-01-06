import { LegalPageWrapper } from "@/components/(home)/pages/legal/legal-page-wrapper";

const CookiesPage = () => (
  <LegalPageWrapper
    title="Cookie Policy"
    lastUpdated="January 6, 2025"
    content={[
      {
        title: "What Are Cookies",
        content: `Cookies are small text files that are placed on your computer by websites that you visit. They are widely used in order to make websites work, or work more efficiently.`,
      },
      {
        title: "How We Use Cookies",
        content: `We use cookies to understand how you use our website and to improve your experience. This includes personalizing content and advertising.`,
      },
      {
        title: "Managing Cookies",
        content: `Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set.`,
      },
    ]}
  />
);

export default CookiesPage;
