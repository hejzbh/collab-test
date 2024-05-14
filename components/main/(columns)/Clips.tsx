import { Clip } from "@prisma/client";
import React from "react";
import dynamic from "next/dynamic";
import { HomePageProps } from "@/app/(main)/page";
// Components
const ClipCard = dynamic(() => import("@/components/main/(columns)/ClipCard"));

// Props
interface ClipsProps {
  clips: Clip[];
  searchParams: HomePageProps["searchParams"];
}

const Clips = ({ clips = [], searchParams }: ClipsProps) => {
  return (
    <div className="p-3 md:p-10  !pb-[10rem] scrollbar-hide space-y-5 h-full overflow-y-scroll">
      {clips?.map((clip) => (
        <ClipCard searchParams={searchParams} key={clip.id} clip={clip} />
      ))}
    </div>
  );
};

export default Clips;
