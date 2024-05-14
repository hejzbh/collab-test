"use client";

import React from "react";
import dynamic from "next/dynamic";
import { HomePageProps } from "@/app/(main)/page";

// Components
const Search = dynamic(() => import("@/components/ui/Search"));
const SortBy = dynamic(() => import("@/components/ui/SortBy"));

// Props
interface ToolbarProps {
  className?: string;
  searchParams: HomePageProps["searchParams"];
}

const Toolbar = ({ className = "", searchParams }: ToolbarProps) => {
  return (
    <div className={`flex items-center space-x-5 justify-between ${className}`}>
      <Search className="flex-1" searchParams={searchParams} />
      <SortBy />
    </div>
  );
};

export default Toolbar;
