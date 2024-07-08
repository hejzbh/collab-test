"use client";
import React from "react";
import dynamic from "next/dynamic";
import { useMatchingVideoPlayers } from "@/components/providers/MatchingVideoPlayersProvider";

import { VideoWithAWSData } from "@/types";
const VideoPlayer = dynamic(() => import("./VideoPlayer"));
const Indicators = dynamic(() => import("./Indicators"));
const MatchingMoments = dynamic(() => import("./MatchingMoments"));

// Props
interface VideoDetailsProps {
  className?: string;
  video: VideoWithAWSData;
}

const VideoDetails = ({ className = "", video }: VideoDetailsProps) => {
  const { playMatchingMoment, matchingMoments } = useMatchingVideoPlayers();

  return (
    <div className={`${className}`}>
      {/** Player */}
      <VideoPlayer url={video.awsVideoUrl} />
      {video?.duration && (
        <Indicators
          startTimeKey="startVideoTime"
          endTimeKey="endVideoTime"
          matchingMoments={matchingMoments}
          totalVideoDuration={Math.round(video.duration - 1)}
          playMatchingMoment={playMatchingMoment}
        />
      )}

      {/** Title & Matching Moments */}
      <div className="text-left">
        <h2 className="text-black dark:text-white uppercase text-lg mt-2">
          {video?.title}
        </h2>
        {!video.duration && (
          <MatchingMoments
            matchingMoments={matchingMoments}
            playMatchingMoment={playMatchingMoment}
          />
        )}
      </div>
    </div>
  );
};

export default VideoDetails;
