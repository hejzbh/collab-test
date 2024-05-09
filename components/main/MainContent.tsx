import React from "react";
import dynamic from "next/dynamic";
import { Clip, Video } from "@prisma/client";
// Components
const Toolbar = dynamic(() => import("@/components/main/Toolbar"));

// Props
interface MainContentProps {
  clips: Clip[];
  matchingVideos?: Video[];
}

const MainContent = ({}: MainContentProps) => {
  return (
    <div>
      <Toolbar />
    </div>
  );
};

export default MainContent;
