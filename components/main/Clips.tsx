import { Clip } from "@prisma/client";
import React from "react";
import dynamic from "next/dynamic";
// Components
const ClipCard = dynamic(() => import("@/components/main/ClipCard"));

// Props
interface ClipsProps {
  clips: Clip[];
}

const Clips = ({ clips = [] }: ClipsProps) => {
  return (
    <div className="p-10 pb-[10rem] scrollbar-hide space-y-5 h-full overflow-y-scroll">
      {clips?.map((clip) => (
        <ClipCard key={clip.id} clip={clip} />
      ))}
    </div>
  );
};

export default Clips;
