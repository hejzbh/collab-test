//import { currentUser } from "@clerk/nextjs/server";
import { dummyClips } from "@/constants/clips";
import { dummyVideos } from "@/constants/videos";
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
  // 1) Get user
  // const user = await currentUser();

  // 2) Get user's clips
  const clips: Clip[] = dummyClips;

  // 3) If the user has selected one of the clips, retrieve matching videos.
  let matchingVideos: Video[] = [];

  if (searchParams.selectedClipId) {
    // Fetch matching videos
    matchingVideos = dummyVideos;
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
