"use client";
import React from "react";
import { CheckCheckIcon, XIcon } from "lucide-react";

// Props
interface FilePreviewProps {
  className?: string;
  file: File;
  onDelete: () => void;
}

const FilePreview = ({
  className = "",
  file,
  onDelete = () => {},
}: FilePreviewProps) => {
  return (
    <div
      className={`flex items-center relative cursor-pointer max-w-fit mx-auto justify-center flex-col space-y-3 ${className}`}
    >
      <CheckCheckIcon size={55} className="text-[limegreen]" />
      <span className="text-[14px] text-textColors-label">Uploaded file:</span>
      <p className="text-textColors-primary text-md">{file?.name}</p>
      <button
        onClick={onDelete}
        className="absolute top-[-15px] right-[-15px] text-[red]"
        title="Delete"
      >
        <XIcon size={25} />
      </button>
    </div>
  );
};

export default FilePreview;
