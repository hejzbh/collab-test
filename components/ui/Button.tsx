import React from "react";
import { IconType } from "@/types";

// Props
interface ButtonProps {
  className?: string;
  title: string;
  Icon?: IconType;
  type?: "button" | "submit";
  disabled?: boolean;
}

const Button = ({
  className = "",
  title = "",
  type = "button",
  disabled,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      title={title}
      type={type}
      className={`bg-red px-4 py-2 rounded-3xl text-white   text-[1rem] border-2 border-red transition-all duration-300 ease-in-out hover:bg-transparent hover:text-red ${className}`}
    >
      {title}
    </button>
  );
};

export default Button;
