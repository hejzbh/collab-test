import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent } from "react";

export type SidebarLinkType = {
  title: string;
  href: string;
  Icon: ForwardRefExoticComponent<LucideProps>;
};

export type SidebarLinksType = SidebarLinkType[];
