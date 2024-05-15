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
    // Clear previous notification, if it exists.
    if (store.getState().notification) {
      set({ notification: null });
    }

    // Set new one
    set({ notification });

    // Clear notification after
    if (clearPopupTimeout) clearTimeout(clearPopupTimeout);

    clearPopupTimeout = setTimeout(
      () => {
        set({ notification: null });
      },
      notification?.variant === "error" ? 6000 : 3000
    );
  },
}));
