import { ArrowRight, FileText, Filter, Terminal } from "lucide-react";
import Link from "next/link";

export const SearchResults = () => (
  <div className="flex-1">
    <div className="mb-6 flex items-center justify-between">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Search Results</h2>
      <button className="flex items-center space-x-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-gray-600 shadow-sm ring-1 ring-gray-300 transition-colors hover:text-indigo-600 dark:bg-gray-800 dark:text-gray-300 dark:ring-gray-700 dark:hover:text-indigo-400">
        <Filter className="h-4 w-4" />
        <span>Sort by: Relevance</span>
      </button>
    </div>

    <div className="space-y-6">
      {searchResults.map((result) => (
        <Link
          key={result.url}
          href={result.url}
          className="group block rounded-xl bg-white p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl dark:bg-gray-800"
        >
          <div className="flex items-center space-x-3">
            <span className="rounded-lg bg-indigo-50 p-2 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-400">
              {result.category === "api" ? (
                <Terminal className="h-5 w-5" />
              ) : (
                <FileText className="h-5 w-5" />
              )}
            </span>
            <div>
              <h3 className="font-semibold text-gray-900 group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400">
                {result.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Last updated: {result.lastUpdated}
              </p>
            </div>
          </div>
          <p className="mt-4 text-gray-600 dark:text-gray-300">{result.description}</p>
          <div className="mt-4 flex items-center space-x-4">
            <div className="flex flex-wrap gap-2">
              {result.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full bg-gray-50 px-2.5 py-0.5 text-xs text-gray-600 dark:bg-gray-700 dark:text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
            <ArrowRight className="ml-auto h-5 w-5 text-gray-400 transition-transform group-hover:translate-x-1 dark:text-gray-500" />
          </div>
        </Link>
      ))}
    </div>
  </div>
);

interface SearchResult {
  title: string;
  description: string;
  category: "docs" | "api" | "guides" | "tutorials" | "blog" | "community";
  type: "article" | "documentation" | "guide" | "tutorial" | "question";
  tags: string[];
  url: string;
  lastUpdated: string;
}

// Mock search results
const searchResults: SearchResult[] = [
  {
    title: "Getting Started with the API",
    description: "Learn how to authenticate and make your first API request.",
    category: "api",
    type: "documentation",
    tags: ["api", "authentication", "getting-started"],
    url: "/docs/api/getting-started",
    lastUpdated: "2024-03-15",
  },
  {
    title: "Authentication Best Practices",
    description: "Security guidelines for implementing authentication in your application.",
    category: "guides",
    type: "guide",
    tags: ["security", "authentication", "best-practices"],
    url: "/guides/auth-best-practices",
    lastUpdated: "2024-03-10",
  },
  // Add more mock results...
];
