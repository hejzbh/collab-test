"use client";

import React, { useEffect, useState } from "react";
// Icons
import { SearchIcon, XIcon } from "lucide-react";
import { HomePageProps } from "@/app/(main)/page";
import { generateNewQuery } from "@/utils/generate-new-query";
import { useRouter } from "next/navigation";

// Props
interface SearchProps {
  className?: string;
  searchParams: HomePageProps["searchParams"];
}

let debounceTimeout: any = null;

const Search = ({ className, searchParams }: SearchProps) => {
  const [value, setValue] = useState<string>("");
  const [debouncedValue, setDebouncedValue] = useState<string>();
  const [mounted, setMounted] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    debounceTimeout = setTimeout(() => {
      setDebouncedValue(value);
    }, 200);

    return () => clearTimeout(debounceTimeout);
  }, [value]);

  useEffect(() => {
    if (!mounted) {
      setMounted(true);
      return;
    }

    router.push(
      `/?${generateNewQuery({
        searchParams,
        newSearchParams: {
          q: debouncedValue,
        },
      })}`
    );
  }, [debouncedValue]); // eslint-disable-line

  return (
    <form className={`relative  ${className}`}>
      <SearchIcon className="absolute top-[50%] translate-y-[-50%] left-3 text-textColors-primary w-6 h-6 " />
      <input
        placeholder="Search here..."
        className="w-full  outline-none   text-[14px]  md:text-[15px] bg-bgColors-primary border-[1px] border-borderColors-primary  rounded-2xl p-3 text-textColors-primary px-5 pl-[3rem] font-[500]"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      {value && (
        <XIcon
          className="absolute top-[50%] translate-y-[-50%] right-3 w-6 h-6 text-textColors-label cursor-pointer"
          onClick={() => setValue("")}
        />
      )}
    </form>
  );
};

export default Search;
