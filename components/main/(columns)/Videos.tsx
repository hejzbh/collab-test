import { Video } from "@prisma/client";
import React from "react";
import dynamic from "next/dynamic";
import { HomePageProps } from "@/app/(main)/page";
// Components
const VideoCard = dynamic(
  () => import("@/components/main/(columns)/VideoCard")
);

// Props
interface VideosProps {
  videos: Video[];
  searchParams: HomePageProps["searchParams"];
}

const Videos = ({ videos = [], searchParams }: VideosProps) => {
  // 1) User didnt select clip
  if (!searchParams.selectedClipId) {
    const NotSelectedBanner = dynamic(
      () => import("@/components/banners/NotSelectedBanner"),
      { loading: () => null }
    );

    return (
      <NotSelectedBanner
        title="Please choose one of the clips"
        description="Here will appear all the videos that match with your clips"
      />
    );
  }

  // 2) User has selected clip, but clip have no matching videos
  if (!searchParams.selectedClipId) {
    return <h1>There is no matching videos</h1>;
  }

  return (
    <div className="p-3 md:p-10 !pb-[10rem] scrollbar-hide space-y-5 h-full overflow-y-scroll">
      {videos?.map((video) => (
        <VideoCard key={video.id} video={video} searchParams={searchParams} />
      ))}
    </div>
  );
};

export default Videos;
