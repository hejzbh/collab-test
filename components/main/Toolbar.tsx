import React from "react";
import dynamic from "next/dynamic";

// Components
const Search = dynamic(() => import("@/components/ui/Search"));

// Props
interface ToolbarProps {
  className?: string;
}

const Toolbar = ({ className = "" }: ToolbarProps) => {
  return (
    <div className={`${className}`}>
      <Search />
    </div>
  );
};

export default Toolbar;
