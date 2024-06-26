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
  matchingMoments: MatchingMoment[];
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
  playMatchingMoment: (moment: MatchingMoment) => void; // eslint-disable-line
  handleClipProgress: (params: { playedSeconds: number }) => void; // eslint-disable-line
  handleVideoProgress: (params: { playedSeconds: number }) => void; // eslint-disable-line
};

const MatchingVideoPlayersContext = createContext({});

const MatchingVideoPlayersProvider = ({
  children,
  matchingMoments,
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
    setIsMatchingMomentInClip(
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
    ] // eslint-disable-line
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
