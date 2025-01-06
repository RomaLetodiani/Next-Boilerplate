"use client";

import { ArrowLeft, Home } from "lucide-react";
import Link from "next/link";

export const ActionButtons = () => (
  <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
    <button
      onClick={() => window.history.back()}
      className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-8 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700/50 sm:w-auto"
    >
      <ArrowLeft className="h-5 w-5" />
      Go back
    </button>
    <Link
      href="/"
      className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-8 py-3 text-base font-medium text-white transition-colors hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 sm:w-auto"
    >
      <Home className="h-5 w-5" />
      Back to home
    </Link>
  </div>
);
