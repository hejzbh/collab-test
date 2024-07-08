"use client";

import React from "react";
import dynamic from "next/dynamic";
// Icons
import { MoveUpIcon, MoveDownIcon } from "lucide-react";
import { sortOptions } from "@/constants/sortOptions";
import { SortOptionType } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";
import { generateNewQuery } from "@/utils/generate-new-query";
import { convertQsToObject } from "@/utils/convert-qs-to-object";
// Components
const ClickExpandable = dynamic(
  () => import("@/components/ui/ClickExpandable")
);

// Props
interface SortByProps {
  className?: string;
}

const SortBy = ({}: SortByProps) => {
  const router = useRouter();
  const searchParamsQuery = useSearchParams();

  function selectOption(option: SortOptionType) {
    return option;
  }

  const searchParams: any = convertQsToObject(searchParamsQuery.entries());

  return (
    <ClickExpandable
      className="text-textColors-primary"
      TrigerElement={
        <div className="flex items-center space-x-2">
          <div className="border-[1px] border-borderColors-primary p-2 px-3 rounded-xl text-[12px] md:text-[14px] flex items-center">
            <span className="text-[11px] md:text-[13px] mr-2">Sort by:</span>
            <p className="!text-textColors-blue">Upload date</p>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();

              router.push(
                `/?${generateNewQuery({
                  searchParams,
                  newSearchParams: {
                    sortDirection: searchParams?.sortDirection
                      ? searchParams.sortDirection === "asc"
                        ? "desc"
                        : "asc"
                      : "desc",
                  },
                })}`
              );
            }}
            title="Sort Direction"
            className="flex items-center"
          >
            <MoveUpIcon
              className={`p-0 w-[17px] md:w-[21px] ${
                searchParams?.sortDirection === "asc" && "text-textColors-blue"
              }`}
            />
            <MoveDownIcon
              className={`p-0 w-[17px] md:w-[21px] ${
                (searchParams?.sortDirection === "desc" ||
                  !searchParams?.sortDirection) &&
                "text-textColors-blue"
              }`}
            />
          </button>
        </div>
      }
    >
      <ul className="bg-white dark:bg-black text-textColors-primary rounded-xl">
        {sortOptions?.map((option, idx) => (
          <li
            onClick={() => selectOption(option)}
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
