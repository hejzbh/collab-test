import { create } from "zustand";

export interface SidebarConfigData {}

interface SidebarConfigStore {
  data?: SidebarConfigData;
  isSidebarExpanded: boolean;
  toggleSidebarExpandStatus: (status?: boolean) => void;
}

export const useSidebarConfig = create<SidebarConfigStore>((set) => ({
  data: undefined,
  isSidebarExpanded: window?.innerWidth > 768,
  toggleSidebarExpandStatus: (status?: boolean) => {
    set((previousState) => ({
      ...previousState,
      isSidebarExpanded: status ?? !previousState.isSidebarExpanded, // Set provided opened status, or if it doesnt exists just toggle previous status value.
    }));
  },
}));
