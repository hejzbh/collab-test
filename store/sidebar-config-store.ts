import { create } from "zustand";

export interface SidebarConfigData {}

interface ModalStore {
  data?: SidebarConfigData;
  isSidebarExpanded: boolean;
  toggleSidebarExpandStatus: (status?: boolean) => void;
}

export const useSidebarConfig = create<ModalStore>((set) => ({
  data: undefined,
  isSidebarExpanded: true,
  toggleSidebarExpandStatus: (status?: boolean) => {
    set((previousState) => ({
      ...previousState,
      isSidebarExpanded: status || !previousState.isSidebarExpanded,
    }));
  },
}));
