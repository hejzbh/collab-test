"use client";

import { useMatchingVideoPlayers } from "@/components/providers/MatchingVideoPlayersProvider";
import React from "react";
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
  console.log(playing.clip);
  return (
    <div className="relative z-[1] h-[350px]">
      {/** Matching moment */}
      {isMatchingMomentInClip && (
        <span className="bg-bgColors-blue shadow-xl z-10 absolute bottom-14 left-10 min-w-[80px] p-1 px-2 rounded-lg  text-center text-white">
          MATCHING
        </span>
      )}
      {/** Player */}
      <ReactPlayer
        controls
        ref={clipPlayerRef}
        width={"100%"}
        playing={playing.clip}
        onPause={() =>
          setPlaying((playingData: { video: boolean; clip: boolean }) => ({
            video: playingData.video,
            clip: false,
          }))
        }
        onPlay={() =>
          setPlaying((playingData: { video: boolean; clip: boolean }) => ({
            video: playingData.video,
            clip: true,
          }))
        }
        height={"100%"}
        style={{ zIndex: "-1" }}
        url={"https://www.youtube.com/watch?v=XnitQYkYYcw&ab_channel=FailArmy"}
        onProgress={handleClipProgress}
      />
    </div>
  );
};

export default ClipPlayer;
