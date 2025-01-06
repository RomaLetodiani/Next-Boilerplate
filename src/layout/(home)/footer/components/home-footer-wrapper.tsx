import { PropsWithChildren } from "react";

export const HomeFooterWrapper = ({ children }: PropsWithChildren) => (
  <footer className="border-t border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
    <div className="container mx-auto px-4 py-12">{children}</div>
  </footer>
);
