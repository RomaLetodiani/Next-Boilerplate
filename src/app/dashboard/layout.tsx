import { ThemeToggle } from "@/components/common/theme-toggle";
import { Sidebar } from "@/layout/sidebar";
import { Bell, Menu, X } from "lucide-react";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  // const session = await auth();
  // if (!session) {
  //   redirect("/login");
  // }

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar />
      {/* Main Content */}
      <div className="flex flex-1 flex-col">
        {/* Top Navigation */}
        <header className="sticky top-0 z-20 flex h-16 flex-shrink-0 border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
          <div className="flex flex-1 items-center justify-between px-4 sm:px-6 lg:px-8">
            {/* Right side */}
            {/* Left side - Menu Toggle */}
            <div className="flex items-center lg:opacity-0">
              <label
                htmlFor="sidebar-toggle"
                className="-ml-2 rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 dark:hover:bg-gray-700"
              >
                <span className="sr-only">Open sidebar</span>
                <Menu className="h-6 w-6" />
              </label>
            </div>
            {/* Close button for mobile */}
            <div className="fixed right-4 top-4 z-50 lg:hidden">
              <label
                htmlFor="sidebar-toggle"
                className="rounded-full bg-gray-800/50 p-2 text-white backdrop-blur-sm peer-checked:pointer-events-auto pointer-events-none opacity-0 peer-checked:opacity-100"
              >
                <X className="h-6 w-6" />
              </label>
            </div>
            <div className="ml-4 flex items-center space-x-4">
              {/* Notifications */}
              <button className="rounded-full p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-500 dark:hover:bg-gray-700">
                <span className="sr-only">View notifications</span>
                <Bell className="h-6 w-6" />
              </button>

              {/* Profile dropdown */}
              <div className="relative">
                <button className="flex items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-gray-800">
                  <span className="sr-only">Open user menu</span>
                  <div className="h-8 w-8 rounded-full bg-indigo-100 dark:bg-indigo-900/50">
                    <span className="flex h-full w-full items-center justify-center text-sm font-medium text-indigo-600 dark:text-indigo-400">
                      U
                    </span>
                  </div>
                </button>
              </div>

              {/* Theme Toggle */}
              <ThemeToggle />
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 ">
          <div className="px-4 h-[calc(100vh-64px)] overflow-y-auto py-8 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
