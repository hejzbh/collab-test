import React from "react";
import dynamic from "next/dynamic";
// Components
import { UserButton } from "@clerk/nextjs";
const ThemeToggler = dynamic(
  () => import("@/components/togglers/ThemeToggler")
);
const FlexGroup = dynamic(() => import("@/components/ui/FlexGroup"));

// Props
interface HeaderActionsProps {}

const HeaderActions = ({}: HeaderActionsProps) => {
  return (
    <FlexGroup>
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
