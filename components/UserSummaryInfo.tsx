import React from "react";
import { UserButton, useUser } from "@clerk/nextjs";

// Props
interface UserSummaryInfoProps {
  className?: string;
  expanded?: boolean;
}

const UserSummaryInfo = async ({
  className = "",
  expanded = true,
}: UserSummaryInfoProps) => {
  const { user } = useUser();

  if (!user) return null;

  return (
    <div
      className={`flex items-center justify-center flex-col space-y-4 ${className}`}
    >
      <UserButton
        appearance={{
          elements: {
            avatarBox: {
              width: expanded ? 100 : 45,
              height: expanded ? 100 : 45,
            },
          },
        }}
      />
      {expanded && (
        <div className="text-center">
          <h2 className="text-textColors-primary font-semibold text-[1.2rem]">
            Your Account
          </h2>
          <p className="text-[.9rem] text-textColors-secondary">
            {user?.primaryEmailAddress?.toString()}
          </p>
        </div>
      )}
    </div>
  );
};

export default UserSummaryInfo;
