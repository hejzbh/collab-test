"use client";

import React from "react";
import dynamic from "next/dynamic";
// Components
import { UserButton } from "@clerk/nextjs";
import Button from "@/components/ui/Button";
// Icons
import { UploadIcon } from "lucide-react";
// Store
import { useModal } from "@/store/modal-store";

const ThemeToggler = dynamic(
  () => import("@/components/togglers/ThemeToggler")
);
const FlexGroup = dynamic(() => import("@/components/ui/FlexGroup"));

// Props
interface HeaderActionsProps {}

const HeaderActions = ({}: HeaderActionsProps) => {
  const { openModal } = useModal();

  return (
    <FlexGroup>
      <Button
        onClick={() => openModal("upload")}
        title="Upload Clip"
        Icon={UploadIcon}
        className="flex flex-row-reverse items-center"
        iconProps={{ size: 20, className: "mr-2" }}
      />
      <ThemeToggler />
      <UserButton
        appearance={{
          elements: {
            avatarBox: {
              width: 40,
              height: 40,
            },
          },
        }}
      />
    </FlexGroup>
  );
};

export default HeaderActions;
