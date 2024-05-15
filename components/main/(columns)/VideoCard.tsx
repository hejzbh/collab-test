"use client";
import Image from "next/image";
import { Video } from "@prisma/client";

import { useRouter } from "next/navigation";
import { HomePageProps } from "@/app/(main)/page";
import { generateNewQuery } from "@/utils/generate-new-query";
import { useMemo } from "react";

// Props
interface VideoCardProps {
  className?: string;
  video: Video;
  searchParams: HomePageProps["searchParams"];
}

const VideoCard = ({ video, searchParams }: VideoCardProps) => {
  const isVideoClicked = useMemo(
    () => video?.id === searchParams?.selectedVideoId,
    [video?.id, searchParams?.selectedVideoId]
  );

  const router = useRouter();

  const onClick = () => {
    router.push(
      `/?${generateNewQuery({
        searchParams,
        newSearchParams: {
          selectedVideoId: video.id,
        },
      })}`
    );
  };

  return (
    <div
      onClick={onClick}
      className="w-full cursor-pointer  relative transition-all duration-300 ease-in-out hover:scale-105 hover:opacity-90"
    >
      {isVideoClicked && (
        <div className="ribbon ribbon-top-left z-10 ">
          <span className="shadow-xl">Selected</span>
        </div>
      )}
      <div className={isVideoClicked ? "opacity-80" : ""}>
        <Image
          loading="lazy"
          width={350}
          height={500}
          quality={60}
          alt="Clip"
          src={video?.thumbnail}
          className="rounded-xl w-full"
        />
        <h2 className="text-black dark:text-white uppercase text-lg mt-2">
          {video?.title}
        </h2>
        <p className="text-black/60 dark:text-white/60 text-[15px]">
          3 days ago
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
