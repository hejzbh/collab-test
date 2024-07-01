import { Bookmark, Clip, Matching, Video } from "@prisma/client";
import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent } from "react";

export type IconType = ForwardRefExoticComponent<LucideProps>;

export type SidebarLinkType = {
  title: string;
  href: string;
  Icon: IconType;
};

export type SidebarLinksType = SidebarLinkType[];

export type SortOptionType = {
  title: string;
  key: string;
};

export type MatchingWithAllData = Matching & {
  video: Video;
  clip: Clip;
};

export type BookmarkWithAllDataType = Bookmark & {
  matching: MatchingWithAllData;
};
