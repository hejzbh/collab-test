import React from "react";
import { IconType } from "@/types";

// Props
interface ButtonProps {
  className?: string;
  title: string;
  Icon?: IconType;
  type?: "button" | "submit";
  disabled?: boolean;
  iconProps?: any;
  onClick?: () => void;
}

const Button = ({
  className = "",
  title = "",
  type = "button",
  disabled,
  Icon,
  iconProps = {},
  onClick = () => {},
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      title={title}
      onClick={onClick}
      type={type}
      className={`bg-red px-2 py-1 md:px-4 md:py-2 rounded-3xl text-white   text-[.8rem] md:text-[1rem] border-2 border-red transition-all duration-300 ease-in-out hover:bg-transparent hover:text-red ${className}`}
    >
      {title}
      {Icon && <Icon {...iconProps} />}
    </button>
  );
};

export default Button;
