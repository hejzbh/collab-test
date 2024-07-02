"use client";
import { HomePageProps } from "@/app/(main)/page";
import React from "react";
import { ArrowRightLeftIcon } from "lucide-react";
import { ColumnsOrderEnum } from "@/types";
import { useRouter } from "next/navigation";
import { generateNewQuery } from "@/utils/generate-new-query";

type Props = {
  className?: string;
  searchParams: HomePageProps["searchParams"];
};

const ColumnsOrderToggler = ({ className = "", searchParams }: Props) => {
  const router = useRouter();

  function onClick() {
    router.push(
      `/?${generateNewQuery({
        searchParams,
        newSearchParams: {
          columnsOrder:
            searchParams.columnsOrder === ColumnsOrderEnum.CLIP_VIDEO
              ? ColumnsOrderEnum.VIDEO_CLIP
              : ColumnsOrderEnum.CLIP_VIDEO,
        },
      })}`
    );
  }

  return (
    <button
      onClick={onClick}
      title={`Change columns order`}
      className={`p-3 pb-0 flex items-center space-x-3 justify-center mx-auto text-textColors-primary hover:text-textColors-blue  transition ${className}`}
    >
      <ArrowRightLeftIcon />
      <p className="text-[17px]">
        {searchParams.columnsOrder === ColumnsOrderEnum.CLIP_VIDEO
          ? "Columns Order: Clip - Video"
          : "Columns Order: Video - Clip"}
      </p>
    </button>
  );
};

export default ColumnsOrderToggler;
