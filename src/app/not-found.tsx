import { ActionButtons } from "@/components/not-found/action-buttons";
import { BackgroundDecoration } from "@/components/not-found/background-decoration";
import { Gradient404 } from "@/components/not-found/gradient-404";
import { HelpLinks } from "@/components/not-found/help-links";
import { NotFoundText } from "@/components/not-found/text";
import { NotFoundWrapper } from "@/components/not-found/wrapper";

const NotFoundPage = () => (
  <NotFoundWrapper>
    <BackgroundDecoration />
    <div className="relative">
      <Gradient404 />
      <div className="text-center">
        <NotFoundText />
        <ActionButtons />
        <HelpLinks />
      </div>
    </div>
  </NotFoundWrapper>
);

export default NotFoundPage;
