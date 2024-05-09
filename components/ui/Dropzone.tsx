"use client";

import React, { useRef, useState } from "react";
// Icons
import { FileUpIcon } from "lucide-react";

// Props
interface DropzoneProps {
  className?: string;
  onChange: (file?: File) => void; // eslint-disable-line
}

const Dropzone = ({ onChange, className = "" }: DropzoneProps) => {
  const [dragging, setDragging] = useState<boolean>(false);
  const [file, setFile] = useState<File>();
  const inputRef: any = useRef();

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
    const file = files[0];
    setFile(file);
    onChange(file);
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
          <span className="text-red underline cursor-pointer ml-1">CLICK</span>
        </span>
      </h2>

      {/** If file exists */}
      {file && <p>{file?.name}</p>}

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
