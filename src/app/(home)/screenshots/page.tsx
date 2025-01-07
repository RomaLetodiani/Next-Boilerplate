import { AllScreenshots } from "@/components/(home)/pages/screenshots/all-screenshots";
import { CategorizedScreenshots } from "@/components/(home)/pages/screenshots/categorized-screenshots";
import { NoScreenshots } from "@/components/(home)/pages/screenshots/no-screenshots";
import { ScreenshotsHeader } from "@/components/(home)/pages/screenshots/screenshots-header";
import { screenshots } from "@/components/(home)/pages/screenshots/screenshots-helpers";
import { ScreenshotsPageWrapper } from "@/components/(home)/pages/screenshots/screenshots-page-wrapper";

const ScreenshotsPage = () => (
  <ScreenshotsPageWrapper>
    <ScreenshotsHeader />
    {screenshots.length > 0 ? (
      <>
        <CategorizedScreenshots />
        <AllScreenshots />
      </>
    ) : (
      <NoScreenshots />
    )}
  </ScreenshotsPageWrapper>
);

export default ScreenshotsPage;
