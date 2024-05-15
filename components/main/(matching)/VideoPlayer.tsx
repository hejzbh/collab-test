"use client";

import { useMatchingVideoPlayers } from "@/components/providers/MatchingVideoPlayersProvider";
import React from "react";
import ReactPlayer from "react-player";

// Props
interface VideoPlayerProps {}

const VideoPlayer = ({}: VideoPlayerProps) => {
  const {
    videoPlayerRef,
    isMatchingMomentInVideo,

    handleVideoProgress,
    playing,
    setPlaying,
  } = useMatchingVideoPlayers();

  return (
    <div className="relative z-[1] h-[350px]">
      {/** Matching moment */}
      {isMatchingMomentInVideo && (
        <span className="bg-bgColors-blue shadow-xl z-10 absolute bottom-14 left-10 min-w-[80px] p-1 px-2 rounded-lg  text-center text-white">
          MATCHING
        </span>
      )}
      {/** Player */}
      <ReactPlayer
        controls
        ref={videoPlayerRef}
        width={"100%"}
        playing={playing.video}
        onPause={() =>
          setPlaying((playingData: { video: boolean; clip: boolean }) => ({
            clip: playingData.clip,
            video: false,
          }))
        }
        onPlay={() =>
          setPlaying((playingData: { video: boolean; clip: boolean }) => ({
            clip: playingData.clip,
            video: true,
          }))
        }
        height={"100%"}
        style={{ zIndex: "-1" }}
        url={"https://www.youtube.com/watch?v=XnitQYkYYcw&ab_channel=FailArmy"}
        onProgress={handleVideoProgress}
      />
    </div>
  );
};

export default VideoPlayer;
