import { SidebarLinksType } from "@/types";
import { VideoIcon, CameraIcon, UploadIcon } from "lucide-react";

export const sidebarLinks: SidebarLinksType = [
  { title: "Videos", href: "/", Icon: VideoIcon },
  { title: "Your Clips", href: "/clips", Icon: CameraIcon },
  { title: "Upload", href: "/upload", Icon: UploadIcon },
];
