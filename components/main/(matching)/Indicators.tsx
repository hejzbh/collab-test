import { MatchingMoment } from "@/types";
import React from "react";

type Props = {
  matchingMoments: MatchingMoment[];
  totalVideoDuration: number;
  playMatchingMoment?: (moment: MatchingMoment) => void; // eslint-disable-line
  endTimeKey: "endClipTime" | "endVideoTime";
  startTimeKey: "startClipTime" | "startVideoTime";
};

const Indicators = ({
  matchingMoments,
  totalVideoDuration,
  endTimeKey,
  startTimeKey,
  playMatchingMoment = () => {},
}: Props) => {
  return (
    <div className="bg-gray-400 rounded-3xl px-1 mt-[3px] mb-5">
      <div className="h-6 relative rounded-3xl overflow-hidden">
        {matchingMoments?.map((moment, index) => {
          const clipInVideoDuration = moment[endTimeKey] - moment[startTimeKey];
          let indicatorWidth = (clipInVideoDuration / totalVideoDuration) * 100;
          indicatorWidth = indicatorWidth <= 5 ? 10 : indicatorWidth;

          return (
            <div
              onClick={() => playMatchingMoment(moment)}
              title={`Play Matching Moment`}
              key={index}
              className=" bg-red/80 hover:bg-red  absolute transition top-1 bottom-1 rounded-3xl cursor-pointer"
              style={{
                left: `${(moment[startTimeKey] / totalVideoDuration) * 100}%`,
                width: `${indicatorWidth}%`,
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Indicators;
