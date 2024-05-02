"use client";
import dynamic from "next/dynamic";
// Store
import { useSidebarConfig } from "@/store/sidebar-config-store";
// Components
const SidebarLinks = dynamic(() => import("./SidebarLinks"));
const UserSummaryInfo = dynamic(() => import("@/components/UserSummaryInfo"));

// Props
interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
  const { isSidebarExpanded } = useSidebarConfig();

  return (
    <aside
      className={`bg-bgColors-sidebar w-full transition-[max-width] duration-300 ease-in-out  ${
        isSidebarExpanded ? "max-w-[300px] " : "max-w-[60px] md:max-w-[90px]"
      } ${className}`}
    >
      <div className="container flex flex-col justify-between !py-5 h-full">
        <SidebarLinks expanded={isSidebarExpanded} />
        <UserSummaryInfo expanded={isSidebarExpanded} />
      </div>
    </aside>
  );
};

export default Sidebar;
