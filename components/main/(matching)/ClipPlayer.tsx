"use client";

import React from "react";
import { useMatchingVideoPlayers } from "@/components/providers/MatchingVideoPlayersProvider";
import ReactPlayer from "react-player";

// Props
interface ClipPlayerProps {
  url: string;
}

const ClipPlayer = ({ url = "" }: ClipPlayerProps) => {
  const { clipPlayerRef, handleClipProgress, playing, setPlaying } =
    useMatchingVideoPlayers();

  return (
    <div className="relative z-[1] h-[350px] overflow-hidden">
      {/** Player */}
      <ReactPlayer
        controls
        muted
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
        style={{ zIndex: "-1", objectFit: "cover", borderRadius: "0.35rem" }}
        url={url}
        onProgress={handleClipProgress}
      />
    </div>
  );
};

export default ClipPlayer;
