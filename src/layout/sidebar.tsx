import { signOut } from "@/lib/auth";
import { LayoutDashboard, LogOut } from "lucide-react";
import Link from "next/link";
import { Menu } from "./menu";

export const Sidebar = () => (
  <>
    {/* Hidden checkbox for sidebar toggle */}
    <input type="checkbox" id="sidebar-toggle" className="peer hidden" />

    {/* Sidebar */}
    <aside className="fixed inset-y-0 left-0 z-50 -translate-x-full transform overflow-y-auto border-r border-gray-200 bg-white transition-transform dark:border-gray-700 dark:bg-gray-800 peer-checked:translate-x-0 lg:translate-x-0 lg:static lg:w-64">
      <div className="flex h-full flex-col pt-5">
        {/* Logo */}
        <div className="px-6">
          <div className="flex h-16 items-center">
            <Link
              href="/dashboard"
              className="flex items-center gap-2 rounded-lg bg-indigo-50 px-4 py-2 dark:bg-indigo-900/50"
            >
              <LayoutDashboard className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              <span className=" font-semibold text-gray-900 dark:text-white">NextJS Template</span>
            </Link>
          </div>
        </div>

        <Menu />

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
    </aside>

    {/* Backdrop for mobile */}
    <label
      htmlFor="sidebar-toggle"
      className="fixed inset-0 z-40 bg-gray-600/75 backdrop-blur-sm transition-opacity peer-checked:opacity-100 peer-checked:pointer-events-auto pointer-events-none opacity-0 lg:hidden"
    />
  </>
);
