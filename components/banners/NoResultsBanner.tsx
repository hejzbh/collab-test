"use client";

import React from "react";
// Icons
import { FrownIcon } from "lucide-react";

// Props
interface NoResultsBannerProps {
  title: string;
  description: string;
}

const NoResultsBanner = ({ title = "", description }: NoResultsBannerProps) => {
  return (
    <div className="p-10 flex flex-col items-center justify-center space-y-2 text-center  text-textColors-primary">
      <FrownIcon size={70} className="drop-shadow-xl" />
      <h2 className="text-xl">{title}</h2>
      <p className="text-textColors-label">{description}</p>
    </div>
  );
};

export default NoResultsBanner;
