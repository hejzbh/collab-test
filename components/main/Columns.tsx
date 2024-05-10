import React from "react";
import dynamic from "next/dynamic";
// Components
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/Resizable";
const Clips = dynamic(() => import("./Clips"));
const Videos = dynamic(() => import("./Videos"));
const Matching = dynamic(() => import("./Matching"));

const Columns = () => {
  return (
    <ResizablePanelGroup direction="horizontal">
      {/** Clips */}
      <ResizablePanel>
        <Clips />
      </ResizablePanel>

      {/** - */}
      <ResizableHandle withHandle />

      {/** Videos */}
      <ResizablePanel>
        <Videos />
      </ResizablePanel>

      {/** - */}
      <ResizableHandle withHandle />

      {/** Matching */}
      <ResizablePanel>
        <Matching />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default Columns;
