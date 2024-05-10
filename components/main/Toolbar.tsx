"use client";

import React from "react";
import dynamic from "next/dynamic";

// Components
const Search = dynamic(() => import("@/components/ui/Search"));
const SortBy = dynamic(() => import("@/components/ui/SortBy"));

// Props
interface ToolbarProps {
  className?: string;
}

const Toolbar = ({ className = "" }: ToolbarProps) => {
  return (
    <div className={`flex items-center space-x-5 justify-between ${className}`}>
      <Search className="flex-1" />
      <SortBy />
    </div>
  );
};

export default Toolbar;
