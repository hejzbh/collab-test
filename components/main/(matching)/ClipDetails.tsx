"use client";
import React from "react";
import ReactPlayer from "react-player";

// Props
interface ClipDetailsProps {
  className?: string;
}

const ClipDetails = ({ className = "" }: ClipDetailsProps) => {
  return (
    <div className={`${className}`}>
      {/** Player */}
      <div className="relative z-[1] h-[350px]">
        <ReactPlayer
          width={"100%"}
          height={"100%"}
          controls
          url={
            "https://www.youtube.com/watch?v=Ji_ymeikdUY&ab_channel=TheFunnyFails"
          }
        />
      </div>
      {/** Title And Description (Details) */}

      <div>
        <h2 className="text-black dark:text-white uppercase text-lg mt-2">
          Clip Name
        </h2>
        <p className="text-black/60 dark:text-white/60 text-[15px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
          harum eius rem excepturi deserunt cumque.
        </p>
      </div>
    </div>
  );
};

export default ClipDetails;
