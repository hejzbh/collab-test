import { SidebarLinksType } from "@/types";
import { VideoIcon, BookmarkCheckIcon } from "lucide-react";

export const sidebarLinks: SidebarLinksType = [
  { title: "Home", href: "/", Icon: VideoIcon },
  { title: "Bookmark", href: "/bookmark", Icon: BookmarkCheckIcon },
];
