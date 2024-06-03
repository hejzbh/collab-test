"use client";
import React from "react";
import dynamic from "next/dynamic";
import { useMatchingVideoPlayers } from "@/components/providers/MatchingVideoPlayersProvider";
const VideoPlayer = dynamic(() => import("./VideoPlayer"));

// Props
interface VideoDetailsProps {
  className?: string;
}

import { matchingMoments } from "@/components/providers/MatchingVideoPlayersProvider";

const VideoDetails = ({ className = "" }: VideoDetailsProps) => {
  const { playMatchingMoment } = useMatchingVideoPlayers();

  return (
    <div className={`${className}`}>
      {/** Player */}
      <VideoPlayer />

      {/** Title And Description (Details) */}
      <div className="text-left">
        <h2 className="text-black dark:text-white uppercase text-lg mt-2">
          Video Name
        </h2>
        <p className="text-black/60 dark:text-white/60 text-[15px]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam tenetur
          minima consectetur? Obcaecati.
        </p>
        <div className="flex flex-col">
          {matchingMoments?.map((moment, idx) => (
            <button
              key={idx}
              title="Time when your clip start"
              onClick={() => playMatchingMoment(moment)}
              className="text-textColors-blue underline mt-5 text-md uppercase font-[500] text-left w-fit"
            >
              Play matching moment {idx + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
