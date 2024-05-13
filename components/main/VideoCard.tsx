import { Video } from "@prisma/client";
import React from "react";
import Image from "next/image";

// Props
interface VideoCardProps {
  className?: string;
  video: Video;
}

const VideoCard = ({ video }: VideoCardProps) => {
  return (
    <div className="w-full">
      <Image
        loading="lazy"
        width={350}
        height={500}
        alt="Clip"
        src={video.thumbnail}
        className="rounded-xl w-full"
      />
      <h2 className="text-black dark:text-white uppercase text-lg mt-2">
        {video.title}
      </h2>
      <p className="text-black/60 dark:text-white/60 text-[15px]">3 days ago</p>
    </div>
  );
};

export default VideoCard;
