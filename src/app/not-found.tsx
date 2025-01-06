"use client";

import { ArrowLeft, Home } from "lucide-react";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-white px-4 dark:from-gray-900 dark:to-gray-800">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 select-none overflow-hidden">
        <div className="absolute left-[10%] top-1/4 h-64 w-64 rounded-full bg-indigo-100 opacity-30 blur-3xl dark:bg-indigo-900" />
        <div className="absolute right-[10%] top-1/3 h-64 w-64 rounded-full bg-purple-100 opacity-30 blur-3xl dark:bg-purple-900" />
      </div>

      <div className="relative">
        {/* 404 Text with gradient */}
        <h1 className="text-center text-9xl font-black tracking-wider">
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent dark:from-indigo-400 dark:to-purple-400">
            404
          </span>
        </h1>

        <div className="text-center">
          <p className="mt-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Page not found
          </p>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
          </p>

          {/* Action buttons */}
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

          {/* Help links */}
          <div className="mt-12">
            <p className="text-base text-gray-600 flex flex-col gap-2 dark:text-gray-400">
              <span>Looking for something specific?</span>

              <span>
                <Link
                  href="/contact"
                  className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400"
                >
                  Contact support
                </Link>{" "}
                or{" "}
                <Link
                  href="/sitemap"
                  className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400"
                >
                  view sitemap
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;
