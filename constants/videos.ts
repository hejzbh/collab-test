import { Video as VideoType } from "@prisma/client";

export const dummyVideos: VideoType[] = [
  {
    id: "123",
    title: "Video #1",
    youtubeId: "",
    thumbnail: "/images/thumb-2.webp",
  } as any,
  {
    id: "456",
    title: "Video #2",
    youtubeId: "",
    thumbnail: "/images/thumb-1.webp",
  } as any,
  {
    id: "5234523",
    title: "Video #3",
    youtubeId: "",
    thumbnail: "/images/thumb-2.webp",
  } as any,
  {
    id: "632623623",
    title: "Video #4",
    youtubeId: "",
    thumbnail: "/images/thumb-1.webp",
  },
];
