"use client";
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
  playMatchingMoment: () => void;
  handleClipProgress: (params: { playedSeconds: number }) => void; // eslint-disable-line
  handleVideoProgress: (params: { playedSeconds: number }) => void; // eslint-disable-line
};

// TODO: Remove later
const startVideoTime = 5;
const endVideoTime = 14;
const startClipTime = 6;
const endClipTime = 15;

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
      playedSeconds >= startVideoTime && playedSeconds <= endVideoTime
    );
  };

  const handleClipProgress = ({ playedSeconds }: any) => {
    setIsMatchingMomentInClip(
      playedSeconds >= startClipTime && playedSeconds <= endClipTime
    );
  };

  function playMatchingMoment() {
    clipPlayerRef?.current?.seekTo(startClipTime, "seconds");
    videoPlayerRef?.current?.seekTo(startVideoTime, "seconds");
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
