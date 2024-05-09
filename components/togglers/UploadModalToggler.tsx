"use client";

import dynamic from "next/dynamic";
// Components
const Shortcut = dynamic(() => import("@/components/ui/Shortcut"));
// Icons
import { UploadIcon } from "lucide-react";
// Store
import { useModal } from "@/store/modal-store";

// Props
interface UploadModalTogglerProps {
  className?: string;
  expanded: boolean;
}

const UploadModalToggler = ({ expanded }: UploadModalTogglerProps) => {
  const { openModal, toggleModal } = useModal();

  return (
    <button
      onClick={() => openModal("upload")}
      title="Upload Video"
      className={
        expanded
          ? "bg-[#3B3B3B]/10 dark:bg-[#1F1F1F] rounded-xl shadow-md p-2 flex flex-col justify-center items-center transition-all duration-300 ease-in-out hover:bg-[#101010]/15 hover:dark:bg-[#101010]"
          : "flex items-center justify-center"
      }
    >
      {expanded && (
        <h3 className="text-textColors-primary font-semibold text-[1.2rem]">
          Upload Clip
        </h3>
      )}
      <span className="bg-red p-2 rounded-full my-4">
        <UploadIcon className="text-white" size={22} />
      </span>

      <Shortcut
        className={expanded ? "hidden" : ""}
        keys={["CTRL", "s"]}
        onShortcutPress={() => {
          toggleModal("upload");
        }}
      />
    </button>
  );
};

export default UploadModalToggler;
