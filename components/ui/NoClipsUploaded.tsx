"use client";
import React from "react";
// Next
import dynamic from "next/dynamic";
import Image from "next/image";
// Icons
import { UploadIcon } from "lucide-react";
// Store
import { useModal } from "@/store/modal-store";

// Components
const Button = dynamic(() => import("@/components/ui/Button"));

// Props
interface NoClipsUploadedProps {
  className?: string;
}

const NoClipsUploaded = ({ className = "" }: NoClipsUploadedProps) => {
  const { openModal } = useModal();

  return (
    <div
      className={`flex items-center justify-center text-center flex-col h-full ${className}`}
    >
      <Image
        src={"/images/no-videos.webp"}
        alt="No Clips"
        width={300}
        height={250}
        loading="lazy"
      />
      <h1 className="text-textColors-primary text-xl sm:text-2xl lg:text-3xl">
        You {"don't"} have any uploaded clips
      </h1>
      <Button
        title="Upload Clip"
        onClick={() => openModal("upload")}
        Icon={UploadIcon}
        className="flex flex-row-reverse items-center mt-5"
        iconProps={{ size: 20, className: "mr-2" }}
      />
    </div>
  );
};

export default NoClipsUploaded;
