import { PropsWithChildren } from "react";

export const PricingPageWrapper = ({ children }: PropsWithChildren) => (
  <div className="relative">
    <div className="pointer-events-none absolute inset-0 h-full bg-grid opacity-30 dark:opacity-50" />
    {children}
  </div>
);
