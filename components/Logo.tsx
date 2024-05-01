import React from "react";
import Image from "next/image";

// Props
interface LogoProps {
  className?: string;
}

const Logo = ({ className = "" }: LogoProps) => {
  return (
    <Image
      src="/images/logo.svg"
      loading="lazy"
      title="Page Name"
      width={200}
      height={250}
      alt="Logo"
      className={`w-[130px] sm:w-[150px] md:w-[200px] ${className}`}
    />
  );
};

export default Logo;
