import React from "react";
// Icons
import { FileUpIcon } from "lucide-react";

// Props
interface DropzoneProps {
  className?: string;
}

const Dropzone = ({}: DropzoneProps) => {
  return (
    <div className="bg-bgColors-input rounded-xl shadow-sm border-[2px] border-dashed border-white/40 p-5 flex flex-col jusityf-center items-center">
      <FileUpIcon size={50} className="text-textColors-secondary mb-3" />
      <h2 className="font-semibold text-[1rem] text-textColors-primary text-center">
        DROP FILE HERE
        <span className="block font-[500]">
          or{" "}
          <span className="text-red underline cursor-pointer ml-1">CLICK</span>
        </span>
      </h2>
    </div>
  );
};

export default Dropzone;
