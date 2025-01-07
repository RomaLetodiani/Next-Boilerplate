import { MasonryGrid } from "@/components/common/masonry-grid";
import { logger } from "@/lib/logger";
import { readdirSync } from "fs";
import path from "path";

// Function to get all screenshots from the public/screenshots directory
const getScreenshots = () => {
  try {
    const screenshotsDir = path.join(process.cwd(), "public", "screenshots");
    const sections = ["(home)", "(auth)", "dashboard", "legal"];

    const allFiles = sections.reduce(
      (acc, section) => {
        try {
          const sectionPath = path.join(screenshotsDir, section);
          const files = readdirSync(sectionPath).map((file) => ({
            file,
            section,
          }));
          return [...acc, ...files];
        } catch (error) {
          logger.warn(`No screenshots found in ${section}`);
          return acc;
        }
      },
      [] as Array<{ file: string; section: string }>,
    );

    const screenshots = allFiles
      .filter(({ file }) => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
      .map(({ file, section }) => {
        const name = file.replace(/\.(jpg|jpeg|png|gif|webp)$/i, "");
        const formattedName = name
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");

        return {
          src: `/screenshots/${section}/${file}`,
          alt: formattedName,
          caption: formattedName,
          section: section.replace(/[()]/g, ""),
        };
      });

    logger.info(`Found ${screenshots.length} screenshots`);
    return screenshots;
  } catch (error) {
    logger.error("Error reading screenshots:", error);
    return [];
  }
};

const screenshots = getScreenshots();

const categories = {
  Home: screenshots.filter((s) => s.section === "home"),
  Auth: screenshots.filter((s) => s.section === "auth"),
  Dashboard: screenshots.filter((s) => s.section === "dashboard"),
  Legal: screenshots.filter((s) => s.section === "legal"),
};

// Only show categories that have screenshots
const nonEmptyCategories = Object.fromEntries(
  Object.entries(categories).filter(([_, screenshots]) => screenshots.length > 0),
);

const ScreenshotsPage = () => (
  <div className="relative min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
    <div className="absolute inset-0 bg-grid-modern opacity-[0.02] dark:opacity-[0.05]" />
    <div className="relative">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="relative mb-16 overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 p-8 text-white shadow-lg">
          <div className="relative z-10">
            <h1 className="text-center text-3xl font-bold lg:text-4xl">Screenshots Gallery</h1>
            <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-indigo-100">
              Explore our interface through detailed screenshots
            </p>
          </div>
          <div className="absolute inset-0 bg-grid opacity-20" />
        </div>

        {screenshots.length > 0 && (
          <>
            {/* Categories */}
            {Object.entries(nonEmptyCategories).map(([category, categoryScreenshots]) => (
              <div key={category} className="mb-16">
                <h2 className="mb-8 text-2xl font-semibold text-gray-900 dark:text-white">
                  {category}
                </h2>
                <MasonryGrid items={categoryScreenshots} />
              </div>
            ))}

            {/* All Screenshots */}
            <div className="mt-16">
              <h2 className="mb-8 text-2xl font-semibold text-gray-900 dark:text-white">
                All Screenshots
              </h2>
              <MasonryGrid items={screenshots} />
            </div>
          </>
        )}

        {screenshots.length === 0 && (
          <div className="text-center text-gray-600 dark:text-gray-400">
            No screenshots found in the public/screenshots directory.
          </div>
        )}
      </div>
    </div>
  </div>
);

export default ScreenshotsPage;
