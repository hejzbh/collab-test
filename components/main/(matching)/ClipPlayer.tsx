"use client";

import React from "react";
import { useMatchingVideoPlayers } from "@/components/providers/MatchingVideoPlayersProvider";
import ReactPlayer from "react-player";

// Props
interface ClipPlayerProps {
  url: string;
}

const ClipPlayer = ({ url }: ClipPlayerProps) => {
  const { clipPlayerRef, handleClipProgress, playing, setPlaying } =
    useMatchingVideoPlayers();

  return (
    <div className="relative z-[1] h-[350px]">
      {/** Matching moment */}

      {/** Player */}
      <ReactPlayer
        controls
        ref={clipPlayerRef}
        width={"100%"}
        muted
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
        url={url}
        onProgress={handleClipProgress}
      />
    </div>
  );
};

export default ClipPlayer;
