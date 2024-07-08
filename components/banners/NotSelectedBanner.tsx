import React from "react";
// Icons
import { CornerUpLeftIcon } from "lucide-react";

// Props
interface NotSelectedBannerProps {
  title: string;
  description: string;
  secondDescription?: string;
}

const NotSelectedBanner = ({
  title = "",
  description,
  secondDescription,
}: NotSelectedBannerProps) => {
  return (
    <div className="p-10 flex flex-col items-center justify-center space-y-2 text-center  text-textColors-primary">
      <CornerUpLeftIcon size={70} className="drop-shadow-xl" />
      <h2 className="text-xl">{title}</h2>
      <p className="text-textColors-label">{description}</p>
      {secondDescription && (
        <p className="text-textColors-label mt-3 text-[14px]">
          {secondDescription}
        </p>
      )}
    </div>
  );
};

export default NotSelectedBanner;
