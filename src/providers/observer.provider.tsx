"use client";

import { PropsWithChildren, useEffect } from "react";
import { Observer } from "tailwindcss-intersect";

export const ObserverProvider = ({ children }: PropsWithChildren) => {
  useEffect(() => {
    Observer.start();
  }, []);

  return <>{children}</>;
};
