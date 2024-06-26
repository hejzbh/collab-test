//import { currentUser } from "@clerk/nextjs/server";
import { dummyClips } from "@/constants/clips";
import { matchingsDummy } from "@/constants/matchings";
import { Clip, Video } from "@prisma/client";
// Next
import dynamic from "next/dynamic";
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
  };
};

export const getData = async function (
  searchParams: HomePageProps["searchParams"]
) {
  // 2) Get user's clips
  const clips: Clip[] = dummyClips;

  // 3) If the user has selected one of the clips, retrieve matching videos.
  let matchingVideos: Video[] = [];

  if (searchParams.selectedClipId) {
    // Fetch matching videos
    matchingVideos = matchingsDummy
      .filter((matching) => matching.clipId === searchParams.selectedClipId)
      ?.map((matching) => matching.video);
  }

  return {
    clips,
    matchingVideos,
  };
};

export default async function HomePage({ searchParams }: HomePageProps) {
  const { clips, matchingVideos } = await getData(searchParams);

  const userHasNoClips = !clips || !clips?.length;

  return (
    <main className="h-full w-full overflow-hidden">
      {userHasNoClips ? (
        <NoClipsUploaded />
      ) : (
        <MainContent
          clips={clips}
          matchingVideos={matchingVideos}
          searchParams={searchParams}
        />
      )}
    </main>
  );
}
