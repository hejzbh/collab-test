import { Video as VideoType } from "@prisma/client";

export const dummyVideos: VideoType[] = [
  {
    id: "sagasgasgsa",
    youtubeId: "EeAMj9FvS9g",
    awsUrl: "/videos/fails-compilation.mp4",
    title: "2 minutes Best fails",
    thumbnail: "/images/video-thumb-1.webp",
    createdAt: new Date(new Date().setMonth(new Date().getMonth() - 2)),
  } as VideoType,
  {
    id: "fsaxxxxxxx",
    youtubeId: "Bufjs0gvw4o",
    awsUrl: "/videos/videoplayback.mp4",
    title: "TRY NOT TO LAUGH 1 MINUTE CHALLENGE(funny/fails)",
    thumbnail: "/images/video-thumb-2.webp",
    createdAt: new Date(new Date().setMonth(new Date().getMonth() - 2)),
  } as VideoType,
];
