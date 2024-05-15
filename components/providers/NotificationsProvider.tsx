"use client";

// Components
import {
  Notification,
  NotificationDescription,
  NotificationTitle,
} from "../ui/Notification";
import { useNotifications } from "@/store/notifications-store";
// Lib
import { clsx } from "@/utils/clsx";

// Props
const NotificationsProvider = () => {
  const { notification } = useNotifications();

  return (
    <div
      className={clsx(
        "!fixed top-2 right-2 !z-[10000] transition-all duration-300 ease-in-out ",
        notification
          ? "!opacity-100 !translate-y-0"
          : "opacity-0 translate-y-[-50%]"
      )}
    >
      <Notification variant={notification?.variant as any}>
        <NotificationTitle>{notification?.title}</NotificationTitle>
        <NotificationDescription>
          {notification?.message}
        </NotificationDescription>
      </Notification>
    </div>
  );
};

export default NotificationsProvider;
