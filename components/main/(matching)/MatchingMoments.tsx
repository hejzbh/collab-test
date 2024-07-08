import { MatchingMoment } from "@/types";
import React from "react";

type Props = {
  className?: string;
  matchingMoments: MatchingMoment[];
  playMatchingMoment: (moment: MatchingMoment) => void; // eslint-disable-line
};

const MatchingMoments = ({
  className = "",
  matchingMoments = [],
  playMatchingMoment,
}: Props) => {
  return (
    <div className={`flex flex-col ${className}`}>
      {" "}
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
    </div>
  );
};

export default MatchingMoments;
