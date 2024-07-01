"use client";

import React from "react";
import { useMatchingVideoPlayers } from "@/components/providers/MatchingVideoPlayersProvider";
import MatchingBadge from "@/components/ui/MatchingBadge";
import ReactPlayer from "react-player";

// Props
interface VideoPlayerProps {
  url: string;
}

const VideoPlayer = ({ url }: VideoPlayerProps) => {
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
        <MatchingBadge className="absolute bottom-14 left-10" />
      )}

      {/** Player */}
      <ReactPlayer
        controls
        ref={videoPlayerRef}
        muted
        width={"100%"}
        playing={playing.video}
        onPause={() =>
          setPlaying((playingData: { video: boolean; clip: boolean }) => ({
            ...playingData,
            video: false,
          }))
        }
        onPlay={() =>
          setPlaying((playingData: { video: boolean; clip: boolean }) => ({
            ...playingData,
            video: true,
          }))
        }
        height={"100%"}
        style={{ zIndex: "-1" }}
        url={url}
        onProgress={handleVideoProgress}
      />
    </div>
  );
};

export default VideoPlayer;
