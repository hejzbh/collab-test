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
import { ColumnsOrderEnum } from "@/types";
const ColumnsOrderToggler = dynamic(() => import("./ColumnsOrderToggler"));
const Clips = dynamic(() => import("./Clips"));
const Videos = dynamic(() => import("./Videos"));
const Matching = dynamic(() => import("../(matching)/Matching"));

// Props
interface ColumnsProps {
  clips: Clip[];
  videos: Video[];
  searchParams: HomePageProps["searchParams"];
}

const Columns = ({ clips = [], videos, searchParams }: ColumnsProps) => {
  return (
    <ResizablePanelGroup direction="horizontal">
      {/** Clips */}
      <ResizablePanel defaultSize={22}>
        <ColumnsOrderToggler searchParams={searchParams} />
        {searchParams?.columnsOrder === ColumnsOrderEnum.VIDEO_CLIP ? (
          <Videos videos={videos} searchParams={searchParams} />
        ) : (
          <Clips clips={clips} searchParams={searchParams} />
        )}
      </ResizablePanel>

      {/** Resize */}
      <ResizableHandle withHandle />

      {/** Videos */}
      <ResizablePanel defaultSize={22}>
        {searchParams?.columnsOrder === ColumnsOrderEnum.VIDEO_CLIP ? (
          <Clips clips={clips} searchParams={searchParams} />
        ) : (
          <Videos videos={videos} searchParams={searchParams} />
        )}
      </ResizablePanel>

      {/** Resize */}
      <ResizableHandle withHandle />

      {/** Matching */}
      <ResizablePanel className="!overflow-y-scroll scrollbar-hide">
        <Matching searchParams={searchParams} />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default Columns;
