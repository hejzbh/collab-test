import React from "react";
import dynamic from "next/dynamic";
import { Clip, Video } from "@prisma/client";
import { HomePageProps } from "@/app/(main)/page";
// Components
const Toolbar = dynamic(() => import("@/components/main/Toolbar"));
const Columns = dynamic(() => import("@/components/main/(columns)/Columns"));

// Props
interface MainContentProps {
  clips: Clip[];
  matchingVideos?: Video[];
  searchParams: HomePageProps["searchParams"];
}

const MainContent = ({
  clips = [],
  matchingVideos = [],
  searchParams,
}: MainContentProps) => {
  return (
    <div className="h-full">
      <Toolbar
        searchParams={searchParams}
        className="bg-black/[0.05] dark:bg-black/20 border-b-[1px] border-borderColors-primary px-2 py-4 md:px-5 md:py-8"
      />
      <Columns
        clips={clips}
        matchingVideos={matchingVideos}
        searchParams={searchParams}
      />
    </div>
  );
};

export default MainContent;
