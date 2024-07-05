"use client";
import React from "react";
import dynamic from "next/dynamic";
import { useMatchingVideoPlayers } from "@/components/providers/MatchingVideoPlayersProvider";
import { MatchingMoment, Video } from "@prisma/client";
import Link from "next/link";
import { Youtube } from "lucide-react";
import Indicators from "./Indicators";

const VideoPlayer = dynamic(() => import("./VideoPlayer"));

// Props
interface VideoDetailsProps {
  className?: string;
  matchingMoments: MatchingMoment[];
  video: Video;
}

const VideoDetails = ({
  className = "",
  matchingMoments,
  video,
}: VideoDetailsProps) => {
  const { playMatchingMoment } = useMatchingVideoPlayers();

  return (
    <div className={`${className}`}>
      {/** Player */}
      <VideoPlayer url={video.awsUrl as string} />
      <Indicators
        startTimeKey="startVideoTime"
        endTimeKey="endVideoTime"
        matchingMoments={matchingMoments}
        totalVideoDuration={video.duration}
        playMatchingMoment={playMatchingMoment}
      />

      {/** Title And Description (Details) */}
      <div className="text-left mt-7">
        <h2 className="text-black dark:text-white uppercase text-lg mt-2">
          {video.title}
        </h2>
        <Link
          title={`Go to Youtube`}
          href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
          className="text-black/60 dark:text-white/60 text-[15px] hover:text-[red] uppercase mt-2 underline flex items-center "
        >
          <Youtube className=" mr-2 text-[red]" />
          Youtube Link
        </Link>
        {/**  <div className="flex flex-col">
          {matchingMoments?.map((moment, idx) => (
            <button
              key={idx}
              title="Time when your clip start"
              onClick={() => playMatchingMoment(moment)}
              className="text-textColors-blue underline mt-5 text-md uppercase font-[500] text-left w-fit"
            >
              Play matching moment {idx + 1}
            </button>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default VideoDetails;
