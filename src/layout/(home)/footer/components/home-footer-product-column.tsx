import { Socials } from "@/components/common/socials";
import HomeLogo from "../../home-logo";

export const ProductColumn = () => (
  <div>
    <HomeLogo />
    <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
      Build your next great project with our modern Next.js template. Fast, reliable, and ready for
      production.
    </p>
    <Socials />
  </div>
);
