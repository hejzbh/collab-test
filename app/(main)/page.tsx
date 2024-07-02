//import { currentUser } from "@clerk/nextjs/server";
import { dummyClips } from "@/constants/clips";
import { matchingsDummy } from "@/constants/matchings";
import { Clip, Video } from "@prisma/client";
import { ColumnsOrderType, ColumnsOrderEnum } from "@/types";
// Next
import dynamic from "next/dynamic";
import { dummyVideos } from "@/constants/videos";
// Components
const NoClipsUploaded = dynamic(
  () => import("@/components/ui/NoClipsUploaded")
);
const MainContent = dynamic(() => import("@/components/main/MainContent"));

export type HomePageProps = {
  params: {};
  searchParams: {
    selectedClipId?: string;
    selectedVideoId?: string;
    searchQuery?: string;
    sortBy?: any;
    columnsOrder: ColumnsOrderType;
  };
};

export const getData = async function (
  searchParams: HomePageProps["searchParams"]
) {
  // 2) Get user's clips
  let clips: Clip[] = [];

  // 3) If the user has selected one of the clips, retrieve matching videos.
  let videos: Video[] = [];

  // Default value
  searchParams.columnsOrder =
    searchParams.columnsOrder || ColumnsOrderEnum.CLIP_VIDEO;

  if (searchParams.columnsOrder === ColumnsOrderEnum.CLIP_VIDEO) {
    clips = dummyClips;

    if (searchParams.selectedClipId) {
      // Fetch matching videos
      videos = matchingsDummy
        .filter((matching) => matching.clipId === searchParams.selectedClipId)
        ?.map((matching) => matching.video);
    }
  } else {
    videos = dummyVideos;
    if (searchParams.selectedVideoId) {
      // Fetch matching videos

      clips = matchingsDummy
        .filter((matching) => matching.videoId === searchParams.selectedVideoId)
        ?.map((matching) => matching.clip);
    }
  }

  return {
    clips,
    videos,
  };
};

export default async function HomePage({ searchParams }: HomePageProps) {
  const { clips, videos } = await getData(searchParams);

  const userHasNoClips =
    searchParams?.columnsOrder === ColumnsOrderEnum.CLIP_VIDEO &&
    (!clips || !clips?.length);

  return (
    <main className="h-full w-full overflow-hidden">
      {userHasNoClips ? (
        <NoClipsUploaded />
      ) : (
        <MainContent
          clips={clips}
          videos={videos}
          searchParams={searchParams}
        />
      )}
    </main>
  );
}
