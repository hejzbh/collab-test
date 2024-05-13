import React from "react";
import dynamic from "next/dynamic";
// Components
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/Resizable";
import { Clip, Video } from "@prisma/client";
import { HomePageProps } from "@/app/(main)/page";
const Clips = dynamic(() => import("./Clips"));
const Videos = dynamic(() => import("./Videos"));
const Matching = dynamic(() => import("./Matching"));

// Props
interface ColumnsProps {
  clips: Clip[];
  matchingVideos: Video[];
  searchParams: HomePageProps["searchParams"];
}

const Columns = ({
  clips = [],
  matchingVideos,
  searchParams,
}: ColumnsProps) => {
  return (
    <ResizablePanelGroup direction="horizontal">
      {/** Clips */}
      <ResizablePanel defaultSize={22}>
        <Clips clips={clips} />
      </ResizablePanel>

      {/** - */}
      <ResizableHandle withHandle />

      {/** Videos */}
      <ResizablePanel defaultSize={22}>
        <Videos videos={matchingVideos} searchParams={searchParams} />
      </ResizablePanel>

      {/** - */}
      <ResizableHandle withHandle />

      {/** Matching */}
      <ResizablePanel>
        <Matching searchParams={searchParams} />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default Columns;
