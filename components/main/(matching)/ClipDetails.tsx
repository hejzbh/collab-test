"use client";
import React from "react";
import dynamic from "next/dynamic";
import { ClipWithAWSData } from "@/types";
import { useMatchingVideoPlayers } from "@/components/providers/MatchingVideoPlayersProvider";
// Components
const ClipPlayer = dynamic(() => import("./ClipPlayer"));
const Indicators = dynamic(() => import("./Indicators"));
const MatchingMoments = dynamic(() => import("./MatchingMoments"));

// Props
interface ClipDetailsProps {
  className?: string;
  clip: ClipWithAWSData;
}

const ClipDetails = ({ className = "", clip }: ClipDetailsProps) => {
  const { matchingMoments, playMatchingMoment } = useMatchingVideoPlayers();

  return (
    <div className={`${className}`}>
      {/** Player */}
      <ClipPlayer url={clip?.awsClipUrl} />
      {clip?.duration && (
        <Indicators
          startTimeKey="startClipTime"
          endTimeKey="endClipTime"
          matchingMoments={matchingMoments}
          totalVideoDuration={Math.round(clip.duration)}
          playMatchingMoment={playMatchingMoment}
        />
      )}

      {/** Title, Description & Matching Moments*/}
      <div>
        <h2 className="text-black dark:text-white uppercase text-lg mt-2">
          {clip?.title}
        </h2>
        {clip?.description && (
          <p className="text-black/60 dark:text-white/60 text-[15px]">
            {clip?.description}
          </p>
        )}
        {!clip?.duration && (
          <MatchingMoments
            matchingMoments={matchingMoments}
            playMatchingMoment={playMatchingMoment}
          />
        )}
      </div>
    </div>
  );
};

export default ClipDetails;
