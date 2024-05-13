import * as React from "react";

import { clsx } from "@/utils/clsx";

const classes = {
  default: "p-3 rounded-md max-w-[280px] md:max-w-[320px] min-w-[280px]",
  success: "bg-[limegreen]",
  error: "bg-[red]",
};

export const Notification = ({
  variant,
  children,
}: {
  variant: "error" | "success";
  children: React.ReactNode;
}) => {
  return (
    <div className={clsx(classes.default, classes[variant])}>{children}</div>
  );
};

export const NotificationTitle = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <h2 className="text-lg font-semibold text-white">
      <h2>{children}</h2>
    </h2>
  );
};

export const NotificationDescription = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <p className="text-[1.1rem] text-gray-200">{children}</p>;
};
