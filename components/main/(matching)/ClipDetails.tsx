"use client";
import React from "react";
import dynamic from "next/dynamic";
import { Clip, MatchingMoment } from "@prisma/client";
// Components
const ClipPlayer = dynamic(() => import("./ClipPlayer"));
import Indicators from "./Indicators";

// Props
interface ClipDetailsProps {
  className?: string;
  clip: Clip;
  matchingMoments: MatchingMoment[];
}

const ClipDetails = ({
  className = "",
  clip,
  matchingMoments,
}: ClipDetailsProps) => {
  console.log(matchingMoments);
  return (
    <div className={`${className}`}>
      {/** Player */}
      <ClipPlayer url={clip.awsUrl as string} />
      <Indicators
        endTimeKey="endClipTime"
        startTimeKey="startClipTime"
        matchingMoments={matchingMoments}
        totalVideoDuration={clip.duration}
      />

      {/** Title And Description (Details) */}
      <div className="mt-7">
        <h2 className="text-black dark:text-white uppercase text-lg mt-2">
          {clip?.title}
        </h2>
        <p className="text-black/60 dark:text-white/60 text-[15px]">
          {clip?.description}
        </p>
      </div>
    </div>
  );
};

export default ClipDetails;
