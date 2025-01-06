import { HomeHeader } from "@/layout/home/home-header";
import { PropsWithChildren } from "react";

const HomeLayout = ({ children }: PropsWithChildren) => (
  <>
    <HomeHeader />
    {children}
  </>
);
export default HomeLayout;
