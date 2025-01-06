import { HomeFooter } from "@/layout/(home)/footer/home-footer";
import { HomeHeader } from "@/layout/(home)/header/home-header";
import { HomeMain } from "@/layout/(home)/home-main";
import { HomeWrapper } from "@/layout/(home)/home-wrapper";
import { PropsWithChildren } from "react";

const HomeLayout = ({ children }: PropsWithChildren) => (
  <HomeWrapper>
    <HomeHeader />
    <HomeMain>{children}</HomeMain>
    <HomeFooter />
  </HomeWrapper>
);

export default HomeLayout;
