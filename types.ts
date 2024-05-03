import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent } from "react";

export type IconType = ForwardRefExoticComponent<LucideProps>;

export type SidebarLinkType = {
  title: string;
  href: string;
  Icon: IconType;
};

export type SidebarLinksType = SidebarLinkType[];
