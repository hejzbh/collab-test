"use client";

import React from "react";
import MatchingBadge from "@/components/ui/MatchingBadge";
import { useMatchingVideoPlayers } from "@/components/providers/MatchingVideoPlayersProvider";
import ReactPlayer from "react-player";

// Props
interface ClipPlayerProps {}

const ClipPlayer = ({}: ClipPlayerProps) => {
  const {
    clipPlayerRef,
    isMatchingMomentInClip,
    handleClipProgress,
    playing,
    setPlaying,
  } = useMatchingVideoPlayers();

  return (
    <div className="relative z-[1] h-[350px]">
      {/** Matching moment */}
      {isMatchingMomentInClip && (
        <MatchingBadge className="absolute bottom-14 left-10" />
      )}
      {/** Player */}
      <ReactPlayer
        controls
        ref={clipPlayerRef}
        width={"100%"}
        playing={playing.clip}
        onPause={() =>
          setPlaying((playingData: { video: boolean; clip: boolean }) => ({
            ...playingData,
            clip: false,
          }))
        }
        onPlay={() =>
          setPlaying((playingData: { video: boolean; clip: boolean }) => ({
            ...playingData,
            clip: true,
          }))
        }
        height={"100%"}
        style={{ zIndex: "-1", objectFit: "cover" }}
        url={
          "https://videos.pexels.com/video-files/6646525/6646525-uhd_3840_2160_25fps.mp4"
        }
        onProgress={handleClipProgress}
      />
    </div>
  );
};

export default ClipPlayer;
