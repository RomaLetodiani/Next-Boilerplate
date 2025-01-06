import { Menu } from "../menu";
import { Sidebar } from "../sidebar";
import { homeNavigationItems } from "./home-navigation-items";

export const HomeSidebar = () => (
  <Sidebar>
    <Menu navigation={homeNavigationItems} />
  </Sidebar>
);
