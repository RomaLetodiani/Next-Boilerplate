import { SettingsHeader } from "@/components/dashboard/settings/settings-header";
import { SettingsNavigation } from "@/components/dashboard/settings/settings-navigation";
import { PropsWithChildren } from "react";

const SettingsLayout = ({ children }: PropsWithChildren) => (
  <div className="mx-auto max-w-4xl space-y-8">
    <SettingsHeader />
    <div className="grid gap-8 md:grid-cols-3">
      <SettingsNavigation />
      {children}
    </div>
  </div>
);

export default SettingsLayout;
