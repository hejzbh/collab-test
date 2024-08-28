"use client";

import { Clip } from "@prisma/client";
import React, { useMemo, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { HomePageProps } from "@/app/(main)/page";
import { generateNewQuery } from "@/utils/generate-new-query";
import { clsx } from "@/utils/clsx";
import { timeAgo } from "@/utils/timeAgo";
import axios from "axios";
import { ColumnsOrderEnum } from "@/types";

// Props
interface ClipCardProps {
  className?: string;
  clip: Clip;
  searchParams: HomePageProps["searchParams"];
}

const ClipCard = ({ clip, searchParams }: ClipCardProps) => {
  const [thumbnail, setThumbnail] = useState<string>("");
  const isClipClicked = useMemo(
    () => clip?.id === searchParams?.selectedClipId,
    [clip?.id, searchParams?.selectedClipId]
  );

  // TODO: Cookies and aws thumbnail expiration date
  useEffect(() => {
    if (!clip?.id) return;

    axios
      .post(process.env.NEXT_PUBLIC_AWS_VIDEO_URL! + `/s3/${clip.awsKey}_0.jpg`)
      .then((response) => setThumbnail(response.data?.url));
  }, [clip?.id, clip?.awsKey]);

  const router = useRouter();

  const onClick = () => {
    if (clip.status !== "finished") return;

    router.push(
      `/?${generateNewQuery({
        searchParams,
        newSearchParams: {
          selectedClipId: clip.id,
          ...(searchParams.columnsOrder === ColumnsOrderEnum.CLIP_VIDEO
            ? { selectedVideoId: null }
            : {}),
        },
      })}`
    );
  };

  if (!clip) return null;

  return (
    <div
      className={clsx(
        `w-full relative transition-all duration-300 ease-in-out hover:scale-105 hover:opacity-90 ${
          clip.status === "finished" ? "cursor-pointer" : "cursor-wait"
        }`
      )}
      onClick={onClick}
    >
      {isClipClicked && (
        <div className="ribbon ribbon-top-left z-10 ">
          <span className="shadow-xl">Selected</span>
        </div>
      )}
      <div className={isClipClicked ? "opacity-80" : ""}>
        <Image
          loading="lazy"
          width={350}
          height={500}
          quality={60}
          alt="Clip"
          src={thumbnail || "/images/not-loaded-image.avif"}
          className="rounded-xl w-full max-h-[300px]"
        />

        <h2 className="text-black dark:text-white uppercase text-lg mt-2">
          {clip?.title}
        </h2>
        <p className="text-black/60 dark:text-white/60 text-[15px]">
          {timeAgo(clip.createdAt)}
        </p>
        {clip.status && (
          <p className="text-black/60 dark:text-white/60 text-[15px]">
            Status:{" "}
            <span className="font-semibold">{clip.status?.toUpperCase()}</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default ClipCard;
