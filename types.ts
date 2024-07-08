import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent } from "react";
import { Bookmark, Clip, Matching, Video } from "@prisma/client";

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

export type ClipWithAWSData = Clip & {
  awsClipUrl: string;
};

export type VideoWithAWSData = Video & {
  awsVideoUrl: string;
};

export type MatchingAllData = Matching & {
  clip: ClipWithAWSData;
  video: VideoWithAWSData;
  matchingMoments: MatchingMoment[];
};

export type MatchingMoment = {
  startClipTime: number;
  endClipTime: number;
  startVideoTime: number;
  endVideoTime: number;
};

export type BookmarkAllData = Bookmark & {
  matching: MatchingAllData;
};

export type ColumnsOrderType = "clip-video" | "video-clip";

export enum ColumnsOrderEnum {
  CLIP_VIDEO = "clip-video",
  VIDEO_CLIP = "video-clip",
}
