import React, { useMemo } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
// Utils
import { clsx } from "@/utils/clsx";

// Props & TS
import { SidebarLinkType } from "@/types";
interface SidebarLinkProps {
  link: SidebarLinkType;
  expanded: boolean;
}

const SidebarLink = ({ link, expanded }: SidebarLinkProps) => {
  const pathname = usePathname();
  const isActive = useMemo(() => pathname === link.href, [pathname, link.href]);
  const Icon = link.Icon;

  return (
    <Link
      title={link.title}
      href={link.href}
      className={clsx(
        "flex items-center rounded-xl py-2 group transition-all duration-200 ease-in-out",
        {
          "bg-[#3B3B3B]/10 dark:bg-[#1F1F1F]": isActive && expanded,
          "p-3 space-x-3": expanded,
        }
      )}
    >
      <Icon
        className={`${
          isActive
            ? "text-activeColors-sidebarLink"
            : "text-iconColors-primary group-hover:text-activeColors-sidebarLink group-hover:opacity-90 transition"
        }  `}
      />
      {expanded && (
        <p
          className={`${
            isActive
              ? "text-activeColors-sidebarLink"
              : "text-textColors-primary group-hover:text-activeColors-sidebarLink group-hover:opacity-90 transitiony"
          } font-semibold text-[1rem] `}
        >
          {link.title}
        </p>
      )}
    </Link>
  );
};

export default SidebarLink;
