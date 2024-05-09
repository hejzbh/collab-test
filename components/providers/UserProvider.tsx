"use client";

import React, { createContext, useContext, useMemo } from "react";
import { User } from "@prisma/client";

const UserContext = createContext({});

const UserProvider = ({
  children,
  user,
}: {
  children: React.ReactNode;
  user: User;
}) => {
  const value: { user: User } = useMemo(() => {
    return { user };
  }, [user]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUserDetails = () => useContext(UserContext) as { user: User };

export default UserProvider;
