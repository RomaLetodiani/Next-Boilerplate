import { DashboardHeader } from "@/layout/dashboard/dashboard-header";
import { DashboardSidebar } from "@/layout/dashboard/dashboard-sidebar";
import { PropsWithChildren } from "react";

const DashboardLayout = ({ children }: PropsWithChildren) => (
  <div className="flex min-h-screen min-w-[300px] bg-gray-50 dark:bg-gray-900">
    <DashboardSidebar />
    <div className="flex flex-1 flex-col">
      <DashboardHeader />
      <main className="flex-1">
        <div className="h-[calc(100vh-64px)] overflow-y-auto px-4 py-8 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
    </div>
  </div>
);

export default DashboardLayout;
