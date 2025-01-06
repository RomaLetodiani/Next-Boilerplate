import { SIDEBAR_ID } from "@/utils/const";
import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import SidebarLogo from "./sidebar-logo";
import { SidebarToggleInput } from "./sidebar-toggle";

type SidebarProps = PropsWithChildren & {
  direction?: "left" | "right";
  largeScreen?: boolean;
};

export const Sidebar = ({ children, direction = "right", largeScreen = false }: SidebarProps) => (
  <>
    <SidebarToggleInput />

    <aside
      className={twMerge(
        "fixed inset-y-0 z-50 transform overflow-y-auto border-r border-gray-200 bg-white transition-transform dark:border-gray-700 dark:bg-gray-800 peer-checked:translate-x-0",
        direction === "right" ? "right-0 translate-x-full" : "left-0 -translate-x-full",
        largeScreen ? "lg:translate-x-0 lg:static" : "lg:hidden",
      )}
    >
      <div className="flex h-full flex-col pt-5">
        <SidebarLogo />
        {children}
      </div>
    </aside>

    {/* Backdrop */}
    <label
      htmlFor={SIDEBAR_ID}
      className="fixed inset-0 z-40 bg-gray-600/75 backdrop-blur-sm transition-opacity peer-checked:pointer-events-auto peer-checked:opacity-100 pointer-events-none opacity-0 lg:hidden"
    />
  </>
);
