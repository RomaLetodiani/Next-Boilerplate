import { PropsWithChildren } from "react";

export const HomeWrapper = ({ children }: PropsWithChildren) => (
  <div className="min-h-screen flex flex-col min-w-[300px] bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
    {children}
  </div>
);
