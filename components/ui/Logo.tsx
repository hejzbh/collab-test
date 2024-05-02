import React from "react";
import Image from "next/image";

// Props
interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

const sizeClassName = {
  sm: "",
  md: "w-[100px] md:w-[110px]",
  lg: "w-[130px] sm:w-[150px] md:w-[200px]",
  xl: "",
};

const Logo = ({ className = "", size = "lg" }: LogoProps) => {
  return (
    <Image
      src="/images/logo.png"
      loading="lazy"
      title="Page Name"
      width={200}
      height={250}
      alt="Logo"
      className={`${sizeClassName[size]} ${className}`}
    />
  );
};

export default Logo;
