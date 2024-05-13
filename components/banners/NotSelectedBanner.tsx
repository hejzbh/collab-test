import React from "react";
// Icons
import { CornerUpLeftIcon } from "lucide-react";

// Props
interface NotSelectedBannerProps {
  title: string;
  description: string;
}

const NotSelectedBanner = ({
  title = "",
  description,
}: NotSelectedBannerProps) => {
  return (
    <div className="p-10 flex flex-col items-center justify-center space-y-2 text-center  text-textColors-primary">
      <CornerUpLeftIcon size={70} className="drop-shadow-xl" />
      <h2 className="text-xl">{title}</h2>
      <p className="text-textColors-label">{description}</p>
    </div>
  );
};

export default NotSelectedBanner;
