//import { currentUser } from "@clerk/nextjs/server";

import { Clip, Video } from "@prisma/client";
import { getUserClips } from "@/lib/(user)/get-user-clips";
// Next
import dynamic from "next/dynamic";
import { ColumnsOrderEnum, ColumnsOrderType } from "@/types";
import { getMatchingVideos } from "@/lib/(matching)/get-matching-videos";
import { getAllVideos } from "@/lib/(matching)/get-all-videos";
import { getMatchingClips } from "@/lib/(matching)/get-matching-clips";
// Components

const MainContent = dynamic(() => import("@/components/main/MainContent"));

export type HomePageProps = {
  params: {};
  searchParams: {
    selectedClipId?: string;
    selectedVideoId?: string;
    q?: string;
    sortBy?: string;
    sortDirection?: "asc" | "desc";
    columnsOrder: ColumnsOrderType;
  };
};

export const getData = async function (
  searchParams: HomePageProps["searchParams"]
) {
  // 1) Get clips
  let clips: Clip[] = [];

  // 2) If the user has selected one of the clips, retrieve matching videos.
  let videos: Video[] = [];

  // Default value
  searchParams.columnsOrder =
    searchParams.columnsOrder || ColumnsOrderEnum.CLIP_VIDEO;

  searchParams.sortDirection = searchParams.sortDirection || "desc";

  // If columns order is -> CLIP - VIDEO
  if (searchParams.columnsOrder === ColumnsOrderEnum.CLIP_VIDEO) {
    // Retrieve user clips
    clips = await getUserClips({
      q: searchParams.q,
      sortDirection: searchParams.sortDirection,
    });

    // Find videos that matches with user's selected clip
    if (searchParams.selectedClipId) {
      videos = await getMatchingVideos({
        clipId: searchParams.selectedClipId,
      });
    }
  }

  // If columns order is -> VIDEO - CLIP
  if (searchParams.columnsOrder === ColumnsOrderEnum.VIDEO_CLIP) {
    // Set all videos
    videos = await getAllVideos({
      q: searchParams.q,
    });

    // If user selected one of the videos, find clips that matches with that video
    if (searchParams.selectedVideoId) {
      clips = await getMatchingClips({
        videoId: searchParams.selectedVideoId,
      });
    }
  }

  return {
    clips,
    videos,
  };
};

export default async function HomePage({ searchParams }: HomePageProps) {
  const { clips, videos } = await getData(searchParams);

  return (
    <main className="h-full w-full overflow-hidden">
      <MainContent clips={clips} videos={videos} searchParams={searchParams} />
    </main>
  );
}
