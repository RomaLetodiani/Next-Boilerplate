import { screenshots } from "./screenshots-helpers";
import { ScreenshotsMasonryGrid } from "./screenshots-masonry-grid";

export const AllScreenshots = () => (
  <section id="all-screenshots" className="pt-24">
    <h2 className="mb-8 text-2xl font-semibold text-gray-900 dark:text-white">All Screenshots</h2>
    <ScreenshotsMasonryGrid items={screenshots} />
  </section>
);
