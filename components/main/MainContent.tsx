import React from "react";
import dynamic from "next/dynamic";
import { Clip, Video } from "@prisma/client";
// Components
const Toolbar = dynamic(() => import("@/components/main/Toolbar"));
const Columns = dynamic(() => import("@/components/main/Columns"));

// Props
interface MainContentProps {
  clips: Clip[];
  matchingVideos?: Video[];
}

const MainContent = ({}: MainContentProps) => {
  return (
    <div className="h-full">
      <Toolbar className="bg-black/[0.05] dark:bg-black/20 border-b-[1px] border-borderColors-primary px-2 py-4 md:px-5 md:py-8" />
      <Columns />
    </div>
  );
};

export default MainContent;
