"use client";

import { useEffect, useState } from "react";
import { Screenshot } from "./screenshot";

interface MasonryGridProps {
  items: Array<{
    src: string;
    alt: string;
    caption?: string;
  }>;
}

export const MasonryGrid = ({ items }: MasonryGridProps) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) {
    return (
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.src}
            className="aspect-[4/3] animate-pulse rounded-xl bg-gray-200 dark:bg-gray-700"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="columns-1 gap-8 sm:columns-2 lg:columns-3">
      {items.map((item) => (
        <div key={item.src} className="group mb-4 break-inside-avoid">
          {item.caption && (
            <p className="mt-2 font-bold text-center mb-1 text-gray-600 dark:text-gray-200">
              {item.caption}
            </p>
          )}
          <div className="overflow-hidden rounded-xl transition-transform duration-300 ease-in-out hover:scale-[1.02]">
            <Screenshot src={item.src} alt={item.alt} />
          </div>
        </div>
      ))}
    </div>
  );
};
