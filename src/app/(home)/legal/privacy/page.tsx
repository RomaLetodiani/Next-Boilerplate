import { ArrowRight, ChevronRight, Lock, Shield } from "lucide-react";
import Link from "next/link";

const sections = [
  {
    title: "Information We Collect",
    icon: Lock,
    content: `We collect information you provide directly to us, including:
      • Name and contact information
      • Account credentials
      • Payment information
      • Communication preferences
      • Usage data and analytics`,
  },
  {
    title: "How We Use Your Information",
    icon: Shield,
    content: `We use the information we collect to:
      • Provide and maintain our services
      • Process your transactions
      • Send you technical notices and updates
      • Respond to your comments and questions
      • Prevent fraud and abuse`,
  },
  {
    title: "Information Sharing",

    content: `We may share your information with:
      • Service providers and business partners
      • Law enforcement when required
      • Other parties with your consent
      We never sell your personal information to third parties.`,
  },
  {
    title: "Data Security",
    content: `We implement appropriate technical and organizational measures to protect your data, including:
      • Encryption in transit and at rest
      • Regular security assessments
      • Access controls and monitoring
      • Secure data centers`,
  },
  {
    title: "Your Rights",
    content: `You have the right to:
      • Access your personal information
      • Correct inaccurate data
      • Request deletion of your data
      • Object to processing
      • Data portability`,
  },
  {
    title: "Cookie Policy",
    content: `We use cookies and similar technologies to:
      • Remember your preferences
      • Analyze site traffic
      • Personalize content
      • Improve our services`,
  },
];

const relatedDocs = [
  { title: "Terms of Service", href: "/legal/terms" },
  { title: "Cookie Policy", href: "/legal/cookies" },
  { title: "GDPR Compliance", href: "/legal/gdpr" },
  { title: "Data Processing", href: "/legal/dpa" },
];

const PrivacyPage = () => (
  <div className="relative min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
    {/* Sticky Navigation */}
    <div className="absolute  left-0 top-0 hidden h-full w-64 border-r border-gray-200 bg-white/80 p-8 backdrop-blur-xl dark:border-gray-700 dark:bg-gray-900/80 lg:block">
      <div className="sticky top-20">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">On this page</h3>
        <nav className="mt-4 space-y-2">
          {sections.map((section) => (
            <Link
              key={section.title}
              href={`#${section.title.toLowerCase().replace(/\s+/g, "-")}`}
              className="group flex items-center space-x-2 rounded-lg px-3 py-2 text-sm text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
            >
              <ChevronRight className="h-4 w-4 text-gray-400 transition-transform group-hover:translate-x-0.5 dark:text-gray-500" />
              <span>{section.title}</span>
            </Link>
          ))}
        </nav>

        <div className="mt-12">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Related Documents</h3>
          <div className="mt-4 space-y-2">
            {relatedDocs.map((doc) => (
              <Link
                key={doc.title}
                href={doc.href}
                className="group flex items-center space-x-2 rounded-lg px-3 py-2 text-sm text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
              >
                <ArrowRight className="h-4 w-4 text-gray-400 transition-transform group-hover:translate-x-0.5 dark:text-gray-500" />
                <span>{doc.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>

    <div className="lg:pl-64">
      <div className="mx-auto max-w-4xl px-4 py-16">
        {/* Header */}
        <div className="relative mb-16 overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 p-8 text-white shadow-lg">
          <div className="relative z-10">
            <div className="flex items-center justify-center">
              <Shield className="h-12 w-12" />
            </div>
            <h1 className="mt-4 text-center text-3xl font-bold">Privacy Policy</h1>
            <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-indigo-100">
              We care about your privacy and are committed to protecting your personal data. This
              policy explains how we collect, use, and safeguard your information.
            </p>
            <p className="mt-4 text-center text-sm text-indigo-200">
              Last updated: January 6, 2025
            </p>
          </div>
          <div className="absolute inset-0 bg-grid opacity-30 dark:opacity-50" />
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          {sections.map((section) => (
            <section
              key={section.title}
              id={section.title.toLowerCase().replace(/\s+/g, "-")}
              className="scroll-mt-16"
            >
              <div className="group rounded-xl bg-white p-8 shadow-lg transition-all hover:shadow-xl dark:bg-gray-800">
                <div className="flex items-center space-x-3">
                  <div className="rounded-lg bg-indigo-50 p-2 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-400">
                    {section.icon && <section.icon className="h-6 w-6" />}
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    {section.title}
                  </h2>
                </div>
                <div className="mt-4 whitespace-pre-line text-gray-600 dark:text-gray-300">
                  {section.content}
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 rounded-xl bg-gray-50 p-8 dark:bg-gray-800/50">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Questions About Our Privacy Policy?
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              If you have any questions about our privacy practices, please don&apos;t hesitate to
              contact us.
            </p>
            <div className="mt-6 flex justify-center space-x-4">
              <Link
                href="/contact"
                className="rounded-lg bg-indigo-600 px-6 py-2 text-white transition-colors hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
              >
                Contact Us
              </Link>
              <Link
                href="/help"
                className="rounded-lg border border-gray-300 bg-white px-6 py-2 text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
              >
                Visit Help Center
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default PrivacyPage;
