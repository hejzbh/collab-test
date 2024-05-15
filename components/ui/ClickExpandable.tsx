import { clsx } from "@/utils/clsx";
import React, { useState } from "react";

// Props
interface ClickExpandableProps {
  className?: string;
  TrigerElement: any;
  children: React.ReactNode;
}

const ClickExpandable = ({
  className = "",
  TrigerElement,
  children,
}: ClickExpandableProps) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <div className={`relative ${className}`}>
      <div
        onClick={() => setExpanded((expanded) => !expanded)}
        title="Click"
        className="cursor-pointer"
      >
        {TrigerElement}
      </div>
      <div
        className={clsx(
          "absolute top-[10%%] right-0 w-ful min-w-[180px] sm:min-w-[200px] transition-all duration-200 ease-in-out",
          {
            "translate-y-0 opacity-100 shadow-md": expanded,
            "translate-y-[-15%] opacity-0 z-[-100]": !expanded,
          }
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default ClickExpandable;
