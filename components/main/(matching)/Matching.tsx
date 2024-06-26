"use server";

import React from "react";
import dynamic from "next/dynamic";
import { HomePageProps } from "@/app/(main)/page";
// Icons
import { ArrowLeftRightIcon } from "lucide-react";
import { matchingsDummy } from "@/constants/matchings";

// Components
const MatchingVideoPlayersProvider = dynamic(
  () => import("@/components/providers/MatchingVideoPlayersProvider")
);
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
  if (!searchParams.selectedVideoId || !searchParams.selectedClipId) {
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

  // 2) if User has selected clip and video get matching details
  const matching = matchingsDummy.find(
    (matching) =>
      matching.clipId === searchParams.selectedClipId &&
      matching.videoId === searchParams.selectedVideoId
  );

  // 3) If there is no matching
  if (!matching) {
    const NoResultsBanner = dynamic(
      () => import("@/components/banners/NoResultsBanner"),
      { loading: () => null }
    );

    return (
      <NoResultsBanner
        title="Matching Could Not Be Found"
        description="Matching between clip and video cannot be found"
      />
    );
  }

  // Render matching
  return (
    <MatchingVideoPlayersProvider matchingMoments={matching.matchingMoments}>
      <div className="p-3 md:p-10 h-full !pb-[10rem] scrollbar-hide overflow-y-scroll">
        <div className="flex items-center sm:items-start gap-[3em] sm:gap-5 flex-col sm:flex-row ">
          {/** Clip Details */}
          <ClipDetails className="flex-1" clip={matching.clip} />
          {/**?  */}
          <ArrowLeftRightIcon className="sm:mt-[12em] text-textColors-primary" />
          {/** Video Details */}
          <VideoDetails
            className="flex-1"
            video={matching.video}
            matchingMoments={matching.matchingMoments}
          />
        </div>
      </div>
    </MatchingVideoPlayersProvider>
  );
};

export default Matching;
