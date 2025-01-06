import ThemeToggle from "@/components/common/theme-toggle";
import { auth, signOut } from "@/lib/auth";
import {
  BarChart,
  Bell,
  Home,
  LayoutDashboard,
  LogOut,
  Menu,
  Settings,
  User,
  X,
} from "lucide-react";
import Link from "next/link";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();
  // if (!session) {
  //   redirect("/login");
  // }

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <div className="fixed inset-y-0 z-50 hidden w-64 flex-shrink-0 lg:flex">
        <div className="flex w-full flex-col overflow-y-auto border-r border-gray-200 bg-white pt-5 dark:border-gray-700 dark:bg-gray-800">
          {/* Logo */}
          <div className="px-6">
            <div className="flex h-16 items-center">
              <Link
                href="/dashboard"
                className="flex items-center gap-2 rounded-lg bg-indigo-50 px-4 py-2 dark:bg-indigo-900/50"
              >
                <LayoutDashboard className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                <span className="text-lg font-semibold text-gray-900 dark:text-white">
                  NextSaaS
                </span>
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <nav className="mt-8 flex-1 space-y-1 px-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group flex items-center rounded-lg px-4 py-2.5 text-sm font-medium transition-all hover:bg-gray-50 dark:hover:bg-gray-700/50"
              >
                <item.icon className="mr-3 h-5 w-5 flex-shrink-0 text-gray-400 transition-colors group-hover:text-indigo-600 dark:group-hover:text-indigo-400" />
                <span className="text-gray-700 transition-colors group-hover:text-indigo-600 dark:text-gray-300 dark:group-hover:text-indigo-400">
                  {item.name}
                </span>
              </Link>
            ))}
          </nav>

          {/* Bottom section */}
          <div className="mt-auto border-t border-gray-200 p-4 dark:border-gray-700">
            <form
              action={async () => {
                "use server";
                await signOut({ redirectTo: "/" });
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
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="fixed inset-0 z-40 lg:hidden">
        {/* Overlay */}
        <div className="fixed inset-0 bg-gray-600/75 backdrop-blur-sm dark:bg-gray-900/80" />

        {/* Dialog */}
        <div className="fixed inset-0 z-40 flex">
          <div className="relative flex w-full max-w-xs flex-1 flex-col bg-white pt-5 dark:bg-gray-800">
            <div className="absolute right-0 top-0 -mr-12 pt-2">
              <button
                type="button"
                className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                <span className="sr-only">Close sidebar</span>
                <X className="h-6 w-6 text-white" />
              </button>
            </div>

            {/* Mobile Logo */}
            <div className="px-6">
              <div className="flex h-16 items-center">
                <Link
                  href="/dashboard"
                  className="flex items-center gap-2 rounded-lg bg-indigo-50 px-4 py-2 dark:bg-indigo-900/50"
                >
                  <LayoutDashboard className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">
                    NextSaaS
                  </span>
                </Link>
              </div>
            </div>

            {/* Mobile Navigation */}
            <div className="mt-8 flex-1 px-4">
              <nav className="space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="group flex items-center rounded-lg px-4 py-2.5 text-sm font-medium transition-all hover:bg-gray-50 dark:hover:bg-gray-700/50"
                  >
                    <item.icon className="mr-3 h-5 w-5 flex-shrink-0 text-gray-400 transition-colors group-hover:text-indigo-600 dark:group-hover:text-indigo-400" />
                    <span className="text-gray-700 transition-colors group-hover:text-indigo-600 dark:text-gray-300 dark:group-hover:text-indigo-400">
                      {item.name}
                    </span>
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 flex-col lg:pl-64">
        {/* Top Navigation */}
        <header className="sticky top-0 z-10 flex h-16 flex-shrink-0 border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
          <div className="flex flex-1 items-center justify-between px-4 sm:px-6 lg:px-8">
            {/* Left side */}
            <div className="flex items-center lg:opacity-0">
              <button
                type="button"
                className="-ml-2 rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 dark:hover:bg-gray-700"
              >
                <span className="sr-only">Open sidebar</span>
                <Menu className="h-6 w-6" />
              </button>
            </div>

            {/* Right side */}
            <div className="ml-4 flex items-center space-x-4">
              {/* Notifications */}
              <button className="rounded-full p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-500 dark:hover:bg-gray-700">
                <span className="sr-only">View notifications</span>
                <Bell className="h-6 w-6" />
              </button>

              {/* Theme Toggle */}
              <ThemeToggle />

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
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1">
          <div className="px-4 py-8 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </div>
  );
};

const navigation = [
  { name: "Overview", href: "/dashboard", icon: Home },
  { name: "Analytics", href: "/dashboard/analytics", icon: BarChart },
  { name: "Profile", href: "/dashboard/profile", icon: User },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export default DashboardLayout;
