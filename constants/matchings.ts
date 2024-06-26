import { Clip, Matching, MatchingMoment, Video } from "@prisma/client";

import { dummyClips } from "./clips";
import { dummyVideos } from "./videos";

type MatchingType = Matching & {
  clip: Clip;
  video: Video;
  matchingMoments: MatchingMoment[];
};

export const matchingsDummy: MatchingType[] = [
  {
    id: "swagasgsagas",
    clipId: dummyClips[0].id,
    clip: dummyClips[0],
    videoId: dummyVideos[0].id,
    video: dummyVideos[0],
    matchingMoments: [
      {
        id: "1",
        startClipTime: 0,
        endClipTime: 4,
        startVideoTime: 18.7,
        endVideoTime: 23,
        matchingId: "swagasgsagas",
      },
    ],
    createdAt: new Date(),
  } as MatchingType,
  {
    id: "4512412421",
    clipId: dummyClips[1].id,
    clip: dummyClips[1],
    videoId: dummyVideos[0].id,
    video: dummyVideos[0],
    matchingMoments: [
      {
        id: "4512412421",
        startClipTime: 0,
        endClipTime: 14,
        startVideoTime: 63,
        endVideoTime: 77,
        matchingId: "safgsaxyyy",
      },
    ],
    createdAt: new Date(),
  } as MatchingType,
  {
    id: "tadsaa",
    clipId: dummyClips[2].id,
    clip: dummyClips[2],
    videoId: dummyVideos[0].id,
    video: dummyVideos[0],
    matchingMoments: [
      {
        id: "xxxx",
        startClipTime: 0,
        endClipTime: 3,
        startVideoTime: 91.5,
        endVideoTime: 95,
        matchingId: "tadsaa",
      },
    ],
    createdAt: new Date(),
  } as MatchingType,
  {
    id: "1444444",
    clipId: dummyClips[3].id,
    clip: dummyClips[3],
    videoId: dummyVideos[1].id,
    video: dummyVideos[1],
    matchingMoments: [
      {
        id: "xxxx",
        startClipTime: 0,
        endClipTime: 5,
        startVideoTime: 13,
        endVideoTime: 18,
        matchingId: "1444444",
      },
    ],
    createdAt: new Date(),
  } as MatchingType,
];
