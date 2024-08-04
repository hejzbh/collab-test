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
  console.log(matchingMoments);
  return (
    <div className={`${className}`}>
      {/** Player */}
      <VideoPlayer url={video.awsVideoUrl} />
      {video?.duration && (
        <Indicators
          startTimeKey="startVideoTime"
          endTimeKey="endVideoTime"
          matchingMoments={matchingMoments}
          totalVideoDuration={Math.round(video.duration)}
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

      <div className="flex flex-col space-y-4 items-start mt-5">
        {matchingMoments?.map((moment, idx) => (
          <button
            key={idx}
            title={`Play matching moment`}
            className="text-[15px] text-textColors-blue underline"
            onClick={() => playMatchingMoment(moment)}
          >
            Play matching moment {idx + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default VideoDetails;
