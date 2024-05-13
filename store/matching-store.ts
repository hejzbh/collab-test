/**import { Clip, Video } from "@prisma/client";
import { create } from "zustand";

interface MatchingStore {
  selectedClip: Clip | null;
  selectedVideo: Video | null;
  setSelectedClip: (clip: Clip) => void; //eslint-disable-line
  setSelectedVideo: (clip: Clip) => void; //eslint-disable-line
}

export const useMatching = create<MatchingStore>((set, _, store) => ({
  selectedClip: null,
  selectedVideo: null,
  setSelectedClip: () => {},
  setSelectedVideo: () => {},
}));
 */
