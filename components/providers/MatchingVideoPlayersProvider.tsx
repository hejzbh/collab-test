"use client";
import { MatchingMoment } from "@prisma/client";
import React, {
  createContext,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react";

// Props
interface MatchingVideoPlayersProviderProps {
  children: React.ReactNode;
}

export type MatchingVideoPlayersValue = {
  clipPlayerRef: any;
  videoPlayerRef: any;
  isMatchingMomentInVideo: boolean;
  isMatchingMomentInClip: boolean;
  playing: {
    clip: boolean;
    video: boolean;
  };
  setPlaying: React.SetStateAction<any>;
  playMatchingMoment: (moment: MatchingMoment) => void;
  handleClipProgress: (params: { playedSeconds: number }) => void; // eslint-disable-line
  handleVideoProgress: (params: { playedSeconds: number }) => void; // eslint-disable-line
};

// TODO: Remove later
export const matchingMoments: MatchingMoment[] = [
  {
    startVideoTime: 1,
    endVideoTime: 3,
    startClipTime: 1,
    endClipTime: 3,
    id: "214512",
  } as MatchingMoment,
  {
    startVideoTime: 6,
    endVideoTime: 8,
    startClipTime: 6,
    endClipTime: 8,
    id: "125125",
  } as MatchingMoment,
  {
    startVideoTime: 10,
    endVideoTime: 12,
    startClipTime: 10,
    endClipTime: 12,
    id: "52151",
  } as MatchingMoment,
  {
    startVideoTime: 14,
    endVideoTime: 17,
    startClipTime: 14,
    endClipTime: 17,
    id: "2152152151",
  } as MatchingMoment,
];

const MatchingVideoPlayersContext = createContext({});

const MatchingVideoPlayersProvider = ({
  children,
}: MatchingVideoPlayersProviderProps) => {
  const clipPlayerRef: any = useRef();
  const videoPlayerRef: any = useRef();

  const [isMatchingMomentInVideo, setIsMatchingMomentInVideo] =
    useState<boolean>(false);
  const [isMatchingMomentInClip, setIsMatchingMomentInClip] =
    useState<boolean>(false);

  const [playing, setPlaying] = useState({
    clip: false,
    video: false,
  });

  const handleVideoProgress = ({ playedSeconds }: any) => {
    setIsMatchingMomentInVideo(
      matchingMoments?.some(
        (matchingMoment) =>
          playedSeconds >= matchingMoment.startVideoTime &&
          playedSeconds <= matchingMoment.endVideoTime
      )
    );
  };

  const handleClipProgress = ({ playedSeconds }: any) => {
    setIsMatchingMomentInVideo(
      matchingMoments?.some(
        (matchingMoment) =>
          playedSeconds >= matchingMoment.startClipTime &&
          playedSeconds <= matchingMoment.endClipTime
      )
    );
  };

  function playMatchingMoment(moment: MatchingMoment) {
    clipPlayerRef?.current?.seekTo(moment.startClipTime, "seconds");
    videoPlayerRef?.current?.seekTo(moment.startVideoTime, "seconds");
    setPlaying({ video: true, clip: true });
  }

  const value: MatchingVideoPlayersValue = useMemo(
    () => ({
      handleClipProgress,
      handleVideoProgress,
      playMatchingMoment,
      setPlaying,
      playing,
      isMatchingMomentInVideo,
      isMatchingMomentInClip,
      videoPlayerRef,
      clipPlayerRef,
    }),
    [
      isMatchingMomentInVideo,
      clipPlayerRef,
      videoPlayerRef,
      playing,
      isMatchingMomentInClip,
    ]
  );

  return (
    <MatchingVideoPlayersContext.Provider value={value}>
      {children}
    </MatchingVideoPlayersContext.Provider>
  );
};

export const useMatchingVideoPlayers = () =>
  useContext(MatchingVideoPlayersContext) as MatchingVideoPlayersValue;

export default MatchingVideoPlayersProvider;
