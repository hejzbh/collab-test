import { create } from "zustand";

export type NotificationType = {
  title?: string;
  message: string;
  variant: "error" | "success";
} | null;
interface NotificationsStore {
  notification?: NotificationType;
  showNotification: (popup: NotificationType) => void; // eslint-disable-line
}

let clearPopupTimeout: any = null;

export const useNotifications = create<NotificationsStore>((set, _, store) => ({
  notification: null,
  showNotification: (notification) => {
    if (store.getState().notification) {
      set({ notification: null });
    }

    set({ notification });

    if (clearPopupTimeout) clearTimeout(clearPopupTimeout);

    clearPopupTimeout = setTimeout(() => {
      set({ notification: null });
    }, 3000);
  },
}));
