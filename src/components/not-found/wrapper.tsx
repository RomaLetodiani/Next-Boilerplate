import { PropsWithChildren } from "react";

export const NotFoundWrapper = ({ children }: PropsWithChildren) => (
  <main className="flex min-h-dvh flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-white px-4 dark:from-gray-900 dark:to-gray-800">
    {children}
  </main>
);
