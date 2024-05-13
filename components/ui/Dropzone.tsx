"use client";

import React, { useRef, useState } from "react";
// Icons
import { FileUpIcon } from "lucide-react";
import dynamic from "next/dynamic";
import { useNotifications } from "@/store/notifications-store";

// Props
interface DropzoneProps {
  className?: string;
  onChange: (file?: File) => void; // eslint-disable-line
  allowedFileExtenstions?: string[];
}

const Dropzone = ({
  onChange,
  className = "",
  allowedFileExtenstions,
}: DropzoneProps) => {
  const [dragging, setDragging] = useState<boolean>(false);
  const [file, setFile] = useState<File>();
  const inputRef: any = useRef();

  const { showNotification } = useNotifications();

  function onClick() {
    if (!inputRef) return;
    inputRef.current.click();
  }

  // handle drag events
  const handleDrag = function (e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    setDragging(true);
  };

  // triggers when file is dropped
  const handleDrop = function (e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files);
    }

    setDragging(false);
  };

  function handleFile(files: FileList) {
    // 1) Get file
    const file = files[0];

    // 2) Get file extenstion
    const fileExtenstion = file.name.split(".").pop() + "";

    // 3) If there are allowed file extenstions, check does this file fits in.
    if (
      allowedFileExtenstions?.length &&
      allowedFileExtenstions?.indexOf(fileExtenstion) === -1
    ) {
      showNotification({
        title: "File Extenstion",
        message: `Please upload ${allowedFileExtenstions.join(" ")} file`,
        variant: "error",
      });
      return;
    }

    // 4)
    setFile(file);
    onChange(file);
  }

  if (file) {
    const FilePreview = dynamic(() => import("@/components/ui/FilePreview"), {
      loading: () => <></>,
    });

    return (
      <FilePreview
        file={file}
        onDelete={() => {
          setFile(undefined);
          onChange(undefined);
        }}
      />
    );
  }

  return (
    <div
      onClick={onClick}
      onDragEnter={handleDrag}
      className={`bg-bgColors-input cursor-pointer rounded-xl relative shadow-sm border-[2px] border-dashed border-white/40 p-5 flex flex-col jusityf-center items-center ${className} ${
        dragging && "opacity-80 animate-pulse"
      }`}
    >
      {/** Main */}
      <FileUpIcon size={50} className="text-textColors-secondary mb-3" />
      <h2 className="font-semibold text-[1rem] text-textColors-primary text-center">
        DROP FILE HERE
        <span className="block font-[500]">
          or{" "}
          <span className="text-textColors-blue underline cursor-pointer ml-1">
            CLICK
          </span>
        </span>
      </h2>

      {/** File input */}
      <input
        type="file"
        aria-multiline="false"
        className="hidden"
        multiple={false}
        ref={inputRef}
        onChange={(e) => {
          if (!e?.target?.files) return;
          handleFile(e.target.files);
        }}
      />

      {/** Dropzone (invisible) */}
      {dragging && (
        <div
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          className="absolute top-0 left-0 w-full h-full"
        ></div>
      )}
    </div>
  );
};

export default Dropzone;
