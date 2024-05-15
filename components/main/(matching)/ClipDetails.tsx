"use client";
import React from "react";
import dynamic from "next/dynamic";
// Components
const ClipPlayer = dynamic(() => import("./ClipPlayer"));

// Props
interface ClipDetailsProps {
  className?: string;
}

const ClipDetails = ({ className = "" }: ClipDetailsProps) => {
  return (
    <div className={`${className}`}>
      {/** Player */}
      <ClipPlayer />
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
