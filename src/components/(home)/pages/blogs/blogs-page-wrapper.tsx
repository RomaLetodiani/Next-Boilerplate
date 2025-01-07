import { PropsWithChildren } from "react";

export const BlogsPageWrapper = ({ children }: PropsWithChildren) => (
  <div className="relative">
    <div className="absolute inset-0 bg-grid opacity-20 dark:opacity-50" />
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:pt-24 lg:px-8">{children}</div>
  </div>
);
