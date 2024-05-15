import React from "react";
import { LoaderIcon } from "lucide-react";

// Props
interface LoaderProps {
  className?: string;
  size?: number;
}

const Loader = ({ className = "", size = 70 }: LoaderProps) => {
  return (
    <LoaderIcon
      className={`animate-spin duration-1000 text-textColors-blue ${className}`}
      size={size}
    />
  );
};

export default Loader;
