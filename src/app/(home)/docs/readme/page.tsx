import { GitHub } from "@/assets/svgs";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

import { readFile } from "fs/promises";
import { join } from "path";

const getReadmeContent = async () => {
  const filePath = join(process.cwd(), "README.md");
  return readFile(filePath, "utf-8");
};

const ReadmePage = async () => {
  const readmeContent = await getReadmeContent();

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="absolute inset-0 bg-grid-modern opacity-[0.02] dark:opacity-[0.05]" />
      <div className="relative">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8 flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Documentation</h1>
            <Link
              href="https://github.com/RomaLetodiani/Next-Boilerplate"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
            >
              <GitHub />
              <span>View on GitHub</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Content */}
          <div className="prose prose-gray max-w-none dark:prose-invert">
            <ReactMarkdown>{readmeContent}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadmePage;
