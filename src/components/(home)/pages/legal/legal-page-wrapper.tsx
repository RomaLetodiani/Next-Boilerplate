import { Shield } from "lucide-react";
import Link from "next/link";

interface LegalPageProps {
  title: string;
  lastUpdated: string;
  content: {
    title: string;
    content: string;
  }[];
}

export const LegalPageWrapper = ({ title, lastUpdated, content }: LegalPageProps) => (
  <div className="mx-auto max-w-4xl px-4 py-16">
    {/* Header */}
    <div className="relative mb-16 overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 p-8 text-white shadow-lg">
      <div className="relative z-10">
        <div className="flex items-center justify-center">
          <Shield className="h-12 w-12" />
        </div>
        <h1 className="mt-4 text-center text-3xl font-bold">{title}</h1>
        <p className="mt-4 text-center text-sm text-indigo-200">Last updated: {lastUpdated}</p>
      </div>
      <div className="absolute inset-0 bg-grid opacity-30 dark:opacity-50" />
    </div>

    {/* Content */}
    <div className="space-y-8">
      {content.map((section) => (
        <div key={section.title} className="rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{section.title}</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">{section.content}</p>
        </div>
      ))}
    </div>

    {/* Footer */}
    <div className="mt-16 text-center">
      <p className="text-gray-600 dark:text-gray-300">
        Have questions about our policies?{" "}
        <Link
          href="/contact"
          className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400"
        >
          Contact us
        </Link>
      </p>
    </div>
  </div>
);
