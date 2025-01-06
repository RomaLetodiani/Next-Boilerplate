import { PropsWithChildren } from "react";

export const LoginPageWrapper = ({ children }: PropsWithChildren) => (
  <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
    <div className="flex min-h-screen">{children}</div>
  </div>
);
