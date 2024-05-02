import React from "react";
import dynamic from "next/dynamic";
// Constans
import { sidebarLinks } from "@/constants/sidebarLinks";
// Components
const SidebarLink = dynamic(() => import("./SidebarLink"));

// Props
interface SidebarLinksProps {
  className?: string;
  expanded: boolean;
}

const SidebarLinks = ({ expanded, className }: SidebarLinksProps) => {
  return (
    <div className={`space-y-4 ${className}`}>
      {sidebarLinks?.map((link) => {
        return <SidebarLink link={link} expanded={expanded} key={link.href} />;
      })}
    </div>
  );
};

export default SidebarLinks;
