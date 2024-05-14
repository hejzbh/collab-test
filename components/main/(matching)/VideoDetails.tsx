"use client";

import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";

// Props
interface VideoDetailsProps {
  className?: string;
}

// TODO: Remove later
const clipStartTime = 5;
const clipEndTime = 13;

const VideoDetails = ({ className = "" }: VideoDetailsProps) => {
  const playerRef: any = useRef();

  const [matchingMoment, setMatchingMoment] = useState<boolean>(false);
  const [playing, setPlaying] = useState<boolean>(false);

  const handleProgress = ({ playedSeconds }: any) => {
    setMatchingMoment(
      playedSeconds >= clipStartTime && playedSeconds <= clipEndTime
    );
  };

  function playMatchingMoment() {
    playerRef.current.seekTo(clipStartTime, "seconds");
    setPlaying(true);
  }

  return (
    <div className={`${className}`}>
      {/** Player */}
      <div className="relative z-[1] h-[350px]">
        {/** Matching moment */}
        {matchingMoment && (
          <span className="bg-bgColors-blue shadow-xl z-10 absolute bottom-14 left-10 min-w-[80px] p-1 px-2 rounded-lg  text-center text-white">
            MATCHING
          </span>
        )}
        <ReactPlayer
          controls
          ref={playerRef}
          width={"100%"}
          playing={playing}
          onPlay={() => setPlaying(true)}
          height={"100%"}
          style={{ zIndex: "-1" }}
          url={
            "https://www.youtube.com/watch?v=XnitQYkYYcw&ab_channel=FailArmy"
          }
          onProgress={handleProgress}
        />
      </div>

      {/** Title And Description (Details) */}
      <div className="text-left">
        <h2 className="text-black dark:text-white uppercase text-lg mt-2">
          Video Name
        </h2>
        <p className="text-black/60 dark:text-white/60 text-[15px]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam tenetur
          minima consectetur? Obcaecati.
        </p>
        <button
          title="Time when your clip start"
          onClick={playMatchingMoment}
          className="text-textColors-blue underline mt-5 text-md uppercase font-[500] text-left w-fit"
        >
          Play matching moment
        </button>
      </div>
    </div>
  );
};

export default VideoDetails;
