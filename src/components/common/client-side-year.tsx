"use client";

import { useEffect, useState } from "react";

export const ClientSideYear = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <span>{new Date().getFullYear()}</span>;
};
