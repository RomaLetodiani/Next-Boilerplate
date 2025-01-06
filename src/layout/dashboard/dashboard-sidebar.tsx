// import { signOut } from "@/lib/auth";
import { LogOut } from "lucide-react";
import { redirect } from "next/navigation";
import { Sidebar } from "../sidebar/sidebar";
import { SidebarMenu } from "../sidebar/sidebar-menu";
import { dashboardNavigationItems } from "./dashboard-navigation-items";

export const DashboardSidebar = () => (
  <Sidebar largeScreenOn direction="left">
    <SidebarMenu navigation={dashboardNavigationItems} />

    {/* Bottom section */}
    <div className="mt-auto border-t border-gray-200 p-4 dark:border-gray-700">
      <form
        action={async () => {
          "use server";
          redirect("/");
          // await signOut({ redirectTo: "/" });
        }}
      >
        <button
          type="submit"
          className="flex w-full items-center rounded-lg px-4 py-2.5 text-sm font-medium text-red-600 transition-colors hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/50"
        >
          <LogOut className="mr-3 h-5 w-5" />
          Sign Out
        </button>
      </form>
    </div>
  </Sidebar>
);
