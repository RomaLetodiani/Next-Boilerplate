import { PropsWithChildren } from "react";

export const SearchBottomWrapper = ({ children }: PropsWithChildren) => (
  <div className="mx-auto mt-8 max-w-7xl lg:flex lg:gap-8">{children}</div>
);
