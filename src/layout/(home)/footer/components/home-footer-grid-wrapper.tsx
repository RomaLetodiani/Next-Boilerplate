import { PropsWithChildren } from "react";

export const HomeFooterGridWrapper = ({ children }: PropsWithChildren) => (
  <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">{children}</div>
);
