//import { currentUser } from "@clerk/nextjs/server";
import { Clip } from "@prisma/client";
// Next
import dynamic from "next/dynamic";
// Components
const NoClipsUploaded = dynamic(
  () => import("@/components/ui/NoClipsUploaded")
);
const MainContent = dynamic(() => import("@/components/main/MainContent"));

type HomePageProps = {
  params: {};
  searchParams: {
    selectedClipId?: string;
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
  const clips: Clip[] = [];

  // 3) If the user has selected one of the clips, retrieve matching videos.
  if (searchParams.selectedClipId) {
    // Fetch matching videos
    console.log(searchParams);
  }

  return {
    clips: clips,
    matchingVideos: [],
  };
};

export default async function HomePage({ searchParams }: HomePageProps) {
  const { clips, matchingVideos } = await getData(searchParams);

  const userHasNoClips = false; // !clips || !clips?.length

  return (
    <main className="h-full w-full text-3xl text-white font-semibold">
      {userHasNoClips ? (
        <NoClipsUploaded />
      ) : (
        <MainContent clips={clips} matchingVideos={matchingVideos} />
      )}
    </main>
  );
}
