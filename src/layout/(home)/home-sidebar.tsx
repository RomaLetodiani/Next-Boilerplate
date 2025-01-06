import { Sidebar } from "../sidebar/sidebar";
import { SidebarMenu } from "../sidebar/sidebar-menu";
import { homeNavigationItems } from "./home-navigation-items";

export const HomeSidebar = () => (
  <Sidebar>
    <SidebarMenu navigation={homeNavigationItems} shouldCloseOnClick />
  </Sidebar>
);
