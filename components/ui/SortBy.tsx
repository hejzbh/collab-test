"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
// Icons
import { MoveUpIcon, MoveDownIcon } from "lucide-react";
import { sortOptions } from "@/constants/sortOptions";
// Components
const ClickExpandable = dynamic(
  () => import("@/components/ui/ClickExpandable")
);

// Props
interface SortByProps {
  className?: string;
}

const SortBy = ({}: SortByProps) => {
  const [direction, setDirection] = useState<"asc" | "desc">("asc");

  return (
    <ClickExpandable
      className="text-textColors-primary"
      TrigerElement={
        <div className="flex items-center space-x-2">
          <div className="border-[1px] border-borderColors-primary p-2 px-3 rounded-xl text-[12px] md:text-[14px] flex items-center">
            <span className="text-[11px] md:text-[13px] mr-2">Sort by:</span>
            <p className="!text-activeColors-sidebarLink">Upload date</p>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();

              setDirection((direction) =>
                direction === "asc" ? "desc" : "asc"
              );
            }}
            title="Sort Direction"
            className="flex items-center"
          >
            <MoveUpIcon
              className={`p-0 w-[17px] md:w-[21px] ${
                direction === "asc" && "text-activeColors-sidebarLink"
              }`}
            />
            <MoveDownIcon
              className={`p-0 w-[17px] md:w-[21px] ${
                direction === "desc" && "text-activeColors-sidebarLink"
              }`}
            />
          </button>
        </div>
      }
    >
      <ul className="bg-white dark:bg-black text-textColors-primary rounded-xl">
        {sortOptions?.map((option, idx) => (
          <li
            className="flex items-center space-x-2 p-2 cursor-pointer"
            key={idx}
          >
            <p className="text-[13px]">{option.title}</p>
          </li>
        ))}
      </ul>
    </ClickExpandable>
  );
};

export default SortBy;
