import React from "react";
import dynamic from "next/dynamic";
import { initUser } from "@/lib/(user)/init-user";

// Components
const UserProvider = dynamic(
  () => import("@/components/providers/UserProvider")
);
const Header = dynamic(() => import("@/components/header/Header"));
const Sidebar = dynamic(() => import("@/components/sidebar/Sidebar"));

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  //  Initialize user if not exists
  const user = await initUser();

  if (!user) throw new Error("Unauthorized");

  return (
    <UserProvider user={user}>
      <div>
        {/** Header */}
        <Header className="fixed top-0 left-0 w-full h-[4.3rem]" />
        {/** Sidebar & Main */}
        <div className="flex ">
          <Sidebar className="sticky left-0 top-0 h-screen pt-[4.3rem]" />
          <main className="pt-[4.2rem] w-full">{children}</main>
        </div>
      </div>
    </UserProvider>
  );
};

export default MainLayout;
