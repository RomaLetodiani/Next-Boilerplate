import { PropsWithChildren } from "react";

export const HomeWrapper = ({ children }: PropsWithChildren) => (
  <div className="flex min-h-screen min-w-[300px] flex-col bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
    {children}
  </div>
);
