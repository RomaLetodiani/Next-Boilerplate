import { Sidebar } from "@/layout/sidebar/sidebar";
import { SidebarMenu } from "@/layout/sidebar/sidebar-menu";
import { homeNavigationItems } from "./home-navigation-items";

export const HomeSidebar = () => (
  <Sidebar>
    <SidebarMenu navigation={homeNavigationItems} />
  </Sidebar>
);
