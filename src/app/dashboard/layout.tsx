import ThemeToggle from "@/components/common/theme-toggle";
import { auth, signOut } from "@/lib/auth";
import Link from "next/link";
import { redirect } from "next/navigation";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <div className="w-64 bg-white dark:bg-gray-800 shadow-lg">
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold dark:text-white">Dashboard</h2>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <Link
                href="/dashboard"
                className="block p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-200 transition-colors"
              >
                Overview
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/profile"
                className="block p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-200 transition-colors"
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/settings"
                className="block p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-200 transition-colors"
              >
                Settings
              </Link>
            </li>
            <li>
              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
              >
                <button
                  type="submit"
                  className="w-full text-left block p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-red-600 dark:text-red-400"
                >
                  Sign Out
                </button>
              </form>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white dark:bg-gray-800 shadow">
          <div className="px-6 py-4 flex justify-between items-center">
            <h1 className="text-xl font-semibold dark:text-white">Welcome, {session.user?.name}</h1>
            <ThemeToggle />
          </div>
        </header>
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
