"use client";

import { Clip } from "@prisma/client";
import React, { useMemo } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { HomePageProps } from "@/app/(main)/page";
import { generateNewQuery } from "@/utils/generate-new-query";
import { clsx } from "@/utils/clsx";

// Props
interface ClipCardProps {
  className?: string;
  clip: Clip;
  searchParams: HomePageProps["searchParams"];
}

const ClipCard = ({ clip, searchParams }: ClipCardProps) => {
  const isClipClicked = useMemo(
    () => clip?.id === searchParams?.selectedClipId,
    [clip?.id, searchParams?.selectedClipId]
  );

  const router = useRouter();

  const onClick = () => {
    router.push(
      `/?${generateNewQuery({
        searchParams,
        newSearchParams: {
          selectedClipId: clip.id,
        },
      })}`
    );
  };

  return (
    <div
      className={clsx(
        "w-full cursor-pointer relative transition-all duration-300 ease-in-out hover:scale-105 hover:opacity-90"
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
          src={clip?.thumbnail || "/images/not-loaded-image.avif"}
          className="rounded-xl w-full"
        />

        <h2 className="text-black dark:text-white uppercase text-lg mt-2">
          {clip?.title}
        </h2>
        <p className="text-black/60 dark:text-white/60 text-[15px]">
          3 days ago
        </p>
      </div>
    </div>
  );
};

export default ClipCard;
