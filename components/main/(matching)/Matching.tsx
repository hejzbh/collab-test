"use server";

import React from "react";
import dynamic from "next/dynamic";
import { HomePageProps } from "@/app/(main)/page";
// Icons
import { ArrowLeftRightIcon } from "lucide-react";
// Components
const ClipDetails = dynamic(
  () => import("@/components/main/(matching)/ClipDetails")
);
const VideoDetails = dynamic(
  () => import("@/components/main/(matching)/VideoDetails")
);

// Props
interface MatchingProps {
  searchParams: HomePageProps["searchParams"];
}

const Matching = async ({ searchParams }: MatchingProps) => {
  // 1) User didnt select video
  if (!searchParams.selectedVideoId) {
    const NotSelectedBanner = dynamic(
      () => import("@/components/banners/NotSelectedBanner"),
      { loading: () => null }
    );

    return (
      <NotSelectedBanner
        title="Please choose one of the videos"
        description="Here will appear a comparison between the clip and video you've chosen"
      />
    );
  }

  // 2) User selected clip and video, go fetch details of that
  /** const [videoDetails, clipDetails] = await Promise.all([
    new Promise((res) => res({})),
    new Promise((res) => res(true)),
  ]);
 */
  return (
    <div className="p-3 md:p-10 overflow-y-scroll">
      <div className="flex items-center sm:items-start gap-[3em] sm:gap-5 flex-col sm:flex-row ">
        {/** Clip Details */}
        <ClipDetails className="flex-1" />
        {/**?  */}
        <ArrowLeftRightIcon className="sm:mt-[12em] text-textColors-primary" />
        {/** Video Details */}
        <VideoDetails className="flex-1" />
      </div>
    </div>
  );
};

export default Matching;
