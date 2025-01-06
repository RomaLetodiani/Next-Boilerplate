import { LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import { SidebarToggleInput } from "./sidebar-toggle";

type SidebarProps = PropsWithChildren & {
  direction?: "left" | "right";
  largeScreen?: boolean;
};

export const Sidebar = ({ children, direction = "right", largeScreen = false }: SidebarProps) => (
  <>
    {/* Hidden checkbox for sidebar toggle */}
    <SidebarToggleInput />

    {/* Sidebar */}
    <aside
      className={twMerge(
        "fixed inset-y-0 z-50  transform overflow-y-auto border-r border-gray-200 bg-white transition-transform dark:border-gray-700 dark:bg-gray-800 peer-checked:translate-x-0",
        direction === "right" ? "right-0 translate-x-full" : "left-0 -translate-x-full",
        largeScreen ? "lg:translate-x-0 lg:static lg:w-64" : "lg:hidden",
      )}
    >
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

        {children}
      </div>
    </aside>

    {/* Backdrop for mobile */}
    <label
      htmlFor="sidebar-toggle"
      className="fixed inset-0 z-40 bg-gray-600/75 backdrop-blur-sm transition-opacity peer-checked:opacity-100 peer-checked:pointer-events-auto pointer-events-none opacity-0 lg:hidden"
    />
  </>
);
