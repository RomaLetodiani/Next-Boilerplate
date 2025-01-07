import { nonEmptyCategories } from "./screenshots-helpers";
import { ScreenshotsMasonryGrid } from "./screenshots-masonry-grid";

export const CategorizedScreenshots = () =>
  Object.entries(nonEmptyCategories).map(([category, categoryScreenshots]) => (
    <section id={`${category.toLowerCase()}-screenshots`} key={category} className="pt-24">
      <h2 className="mb-8 text-2xl font-semibold text-gray-900 dark:text-white">{category}</h2>
      <ScreenshotsMasonryGrid items={categoryScreenshots} />
    </section>
  ));
