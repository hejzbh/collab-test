import React from "react";
import { LoaderIcon } from "lucide-react";

// Props
interface LoaderProps {
  className?: string;
  size?: number;
}

const Loader = ({ className = "", size = 30 }: LoaderProps) => {
  return (
    <LoaderIcon
      className={`animate-spin duration-1000 ${className}`}
      size={size}
    />
  );
};

export default Loader;
