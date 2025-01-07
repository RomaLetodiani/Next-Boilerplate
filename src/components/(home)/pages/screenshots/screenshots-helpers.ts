import { logger } from "@/lib/logger";
import { readdirSync } from "fs";
import path from "path";

// Function to get all screenshots from the public/screenshots directory
const getScreenshots = () => {
  try {
    const screenshotsDir = path.join(process.cwd(), "public", "screenshots");
    const sections = ["company", "product", "dashboard", "legal"];
    const abbreviations = ["dpa", "gdpr", "ccpa"];

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
          logger.error("Error reading screenshots:", error);
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
          .map((word) =>
            abbreviations.includes(word)
              ? word.toUpperCase()
              : word.charAt(0).toUpperCase() + word.slice(1),
          )
          .join(" ");

        return {
          src: `/screenshots/${section}/${file}`,
          alt: formattedName,
          caption: formattedName,
          section: section.replace(/[()]/g, ""),
        };
      });

    return screenshots;
  } catch (error) {
    logger.error("Error reading screenshots:", error);
    return [];
  }
};

export const screenshots = getScreenshots();

const categories = {
  Company: screenshots.filter((s) => s.section === "company"),
  Product: screenshots.filter((s) => s.section === "product"),
  Dashboard: screenshots.filter((s) => s.section === "dashboard"),
  Legal: screenshots.filter((s) => s.section === "legal"),
};

// Only show categories that have screenshots
export const nonEmptyCategories = Object.fromEntries(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  Object.entries(categories).filter(([_, screenshots]) => screenshots.length > 0),
);
