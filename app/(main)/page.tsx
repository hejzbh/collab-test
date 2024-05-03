//
// Components

import {
  ResizablePanelGroup,
  ResizableHandle,
  ResizablePanel,
} from "@/components/ui/Resizable";

export default async function HomePage() {
  return (
    <main className="h-full w-full text-3xl text-white font-semibold">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel>Clips</ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel>Videos</ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel>Matching</ResizablePanel>
      </ResizablePanelGroup>
    </main>
  );
}
