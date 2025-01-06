import { HomeFooter } from "@/layout/home/home-footer";
import { HomeHeader } from "@/layout/home/home-header";
import { PropsWithChildren } from "react";

const HomeLayout = ({ children }: PropsWithChildren) => (
  <>
    <HomeHeader />
    {children}
    <HomeFooter />
  </>
);
export default HomeLayout;
