"use client";
import { clsx } from "@/utils/clsx";
import React, { useEffect, useRef, useState } from "react";

type Props = {
  className?: string;
  tabs: string[];
  children: React.ReactNode;
};

const Tabs = ({ className = "", tabs, children }: Props) => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0]);
  const childrenRef: any = useRef();

  useEffect(() => {
    if (!activeTab) {
      childrenRef.current.style.display = "none";
    }

    Array.from(childrenRef.current.children)?.map((child: any) => {
      const childTab = child.getAttribute("data-tab");

      if (childTab === activeTab) {
        child.style.display = "block";
      } else {
        child.style.display = "none";
      }
    });
  }, [activeTab]);

  return (
    <div className={`${className}`}>
      <div className="bg-bgColors-tabs p-2 rounded-md shadow-sm flex items-center space-x-3">
        {tabs?.map((tab, idx) => (
          <button
            onClick={() => setActiveTab(tab)}
            title={tab}
            key={idx}
            className={clsx(
              "p-2 rounded-md flex-1 text-lg hover:bg-bgColors-tab transition dark:text-white/70",
              {
                "bg-bgColors-tab font-semibold text-black dark:!text-white ":
                  activeTab === tab,
              }
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      <main ref={childrenRef}>{children}</main>
    </div>
  );
};

export default Tabs;
