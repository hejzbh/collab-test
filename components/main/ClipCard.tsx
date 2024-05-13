"use client";

import { Clip } from "@prisma/client";
import React from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

// Props
interface ClipCardProps {
  className?: string;
  clip: Clip;
}

const ClipCard = ({ clip }: ClipCardProps) => {
  const router = useRouter();
  const searchParams: any = useSearchParams();

  const onClick = () => {
    let updatedSearchParams = `?`;

    for (let [key, value] of searchParams.entries()) {
      if (key === "selectedClipId") {
        updatedSearchParams += `&selectedClipId=${clip.id}`;
      } else {
        updatedSearchParams += `&${key}=${value}`;
      }
    }

    if (!updatedSearchParams.includes("selectedClipId")) {
      updatedSearchParams += `&selectedClipId=${clip.id}`;
    }

    router.push(`/${updatedSearchParams}`);
  };

  return (
    <div
      className="w-full cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:opacity-90"
      onClick={onClick}
    >
      <Image
        loading="lazy"
        width={350}
        height={500}
        alt="Clip"
        src={clip.thumbnail}
        className="rounded-xl w-full"
      />
      <h2 className="text-black dark:text-white uppercase text-lg mt-2">
        {clip.title}
      </h2>
      <p className="text-black/60 dark:text-white/60 text-[15px]">3 days ago</p>
    </div>
  );
};

export default ClipCard;
