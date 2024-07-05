import { MatchingMoment } from "@prisma/client";
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
    <div className="bg-gray-400 rounded-3xl px-1">
      <div className="h-6 relative rounded-3xl">
        {matchingMoments.map((moment, index) => {
          const videoDuration = moment[endTimeKey] - moment[startTimeKey];
          let indicatorWidth = (videoDuration / totalVideoDuration) * 100;
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
