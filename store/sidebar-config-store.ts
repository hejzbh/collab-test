import { create } from "zustand";

export interface SidebarConfigData {}

interface SidebarConfigStore {
  data?: SidebarConfigData;
  isSidebarExpanded: boolean;
  toggleSidebarExpandStatus: (status?: boolean) => void;
}

export const useSidebarConfig = create<SidebarConfigStore>((set) => ({
  data: undefined,
  isSidebarExpanded: true,
  toggleSidebarExpandStatus: (status?: boolean) => {
    set((previousState) => ({
      ...previousState,
      isSidebarExpanded: status || !previousState.isSidebarExpanded,
    }));
  },
}));
