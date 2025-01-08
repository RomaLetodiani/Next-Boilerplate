import { PropsWithChildren } from "react";

export const SearchWrapper = ({ children }: PropsWithChildren) => (
  <div className="relative min-h-dvh bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
    <div className="absolute inset-0 bg-grid opacity-30 dark:opacity-80" />
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">{children}</div>
  </div>
);
