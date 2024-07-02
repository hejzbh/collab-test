import { Clip } from "@prisma/client";
import React from "react";
import dynamic from "next/dynamic";
import { HomePageProps } from "@/app/(main)/page";
import { ColumnsOrderEnum } from "@/types";
// Components
const ClipCard = dynamic(() => import("@/components/main/(columns)/ClipCard"));

// Props
interface ClipsProps {
  clips: Clip[];
  searchParams: HomePageProps["searchParams"];
}

const Clips = ({ clips = [], searchParams }: ClipsProps) => {
  if (
    searchParams.columnsOrder === ColumnsOrderEnum.VIDEO_CLIP &&
    !searchParams.selectedVideoId
  ) {
    const NotSelectedBanner = dynamic(
      () => import("@/components/banners/NotSelectedBanner"),
      { loading: () => null }
    );

    return (
      <NotSelectedBanner
        title="Please choose one of the videos"
        description="Here will appear all your clips that match with selected video"
      />
    );
  }

  return (
    <div className="p-3 md:p-10  !pb-[10rem] scrollbar-hide space-y-5 h-full overflow-y-scroll">
      {clips?.map((clip) => (
        <ClipCard searchParams={searchParams} key={clip.id} clip={clip} />
      ))}
    </div>
  );
};

export default Clips;
