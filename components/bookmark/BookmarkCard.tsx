import { BookmarkWithAllDataType } from "@/types";
import Image from "next/image";
import { ArrowLeftRightIcon } from "lucide-react";
import React from "react";
import Link from "next/link";

type Props = {
  bookmark: BookmarkWithAllDataType;
};

const BookmarkCard = ({ bookmark }: Props) => {
  return (
    <Link
      href={`/?selectedClipId=${bookmark.matching.clipId}&selectedVideoId=${bookmark.matching?.videoId}`}
      title={
        bookmark?.matching?.clip.title +
        " -> " +
        bookmark?.matching?.video?.title
      }
      className="block border-[1px] border-borderColors-primary max-w-fit p-3 rounded-lg cursor-pointer bg-black/5 hover:bg-black/10 dark:bg-black/20 hover:dark:bg-black/40 transition"
    >
      <div className="flex items-center space-x-5">
        {/** Clip */}
        <div>
          <Image
            src={
              bookmark?.matching?.clip?.thumbnail ||
              "/images/not-loaded-image.avif"
            }
            width={150}
            height={500}
            alt="Clip image"
            className="w-[150px] h-[100px] object-cover rounded-lg"
          />
          <h2 className="text-black dark:text-white uppercase text-md mt-2">
            {bookmark?.matching?.clip?.title}
          </h2>
        </div>
        {/** Icon */}
        <ArrowLeftRightIcon className="text-textColors-primary" />
        {/** Video */}
        <div>
          <Image
            src={
              bookmark?.matching?.video?.thumbnail ||
              "/images/not-loaded-image.avif"
            }
            width={150}
            height={500}
            alt="Clip image"
            className="w-[150px] h-[100px] object-cover rounded-lg"
          />
          <h2 className="text-black dark:text-white uppercase text-md mt-2">
            {bookmark?.matching?.video?.title}
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default BookmarkCard;
