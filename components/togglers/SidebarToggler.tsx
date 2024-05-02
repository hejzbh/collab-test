"use client";
// Icons
import { AlignJustifyIcon } from "lucide-react";
// Store
import { useSidebarConfig } from "@/store/sidebar-config-store";

// Props
interface SidebarTogglerProps {}

const SidebarToggler = ({}: SidebarTogglerProps) => {
  const { toggleSidebarExpandStatus } = useSidebarConfig();

  return (
    <button title="Expand sidebar" onClick={() => toggleSidebarExpandStatus()}>
      <AlignJustifyIcon className="text-iconColors-primary" />
    </button>
  );
};

export default SidebarToggler;
