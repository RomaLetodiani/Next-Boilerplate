import { PropsWithChildren } from "react";

export const DashboardPageWrapper = ({ children }: PropsWithChildren) => (
  <div className="space-y-8">{children}</div>
);
