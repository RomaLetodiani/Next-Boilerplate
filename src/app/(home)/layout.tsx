import { HomeFooter } from "@/layout/(home)/home-footer";
import { HomeHeader } from "@/layout/(home)/home-header";
import { PropsWithChildren } from "react";

const HomeLayout = ({ children }: PropsWithChildren) => (
  <div className="min-h-screen min-w-[300px] bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
    <HomeHeader />
    <main>{children}</main>
    <HomeFooter />
  </div>
);

export default HomeLayout;
