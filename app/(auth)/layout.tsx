"use client";
import React, { useMemo } from "react";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import Image from "next/image";
// Components
const Logo = dynamic(() => import("@/components/Logo"));

const AuthLayout = (props: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const pageType: "sign-in" | "sign-up" = useMemo(
    () => (pathname?.startsWith("/sign-in") ? "sign-in" : "sign-up"),
    [pathname]
  );
  return (
    <div className="flex justify-between items-center flex-col lg:flex-row  md:h-screen">
      {/** Left/Top */}
      <div className="flex-1 h-full relative z-[1] flex items-center justify-center px-2 py-20 md:!p-10">
        {/** Background Behind */}
        <Image
          loading="lazy"
          src="/images/bg-without-waves.webp"
          fill
          alt="BG"
          className=" z-[-5] object-cover "
        />
        <div className="bg-black/60 absolute top-0 left-0 w-full h-full z-[-1]"></div>
        {/** Logo */}
        <Logo className="absolute top-3 left-3 lg:top-10 lg:left-10" />
        {/** Text */}
        <div className="text-center">
          <h1
            className="text-[2.2rem] sm:text-[3.5rem] md:text-[4rem] xl:text-[5.5rem] text-white font-semibold"
            style={{ lineHeight: "1.1" }}
          >
            {pageType === "sign-up"
              ? `Create Your ${process.env.NEXT_PUBLIC_APP_NAME!} Account`
              : "Welcome Back"}
          </h1>
          <p className="text-[.9rem] sm:text-[1rem] md:text-[1.1rem] lg:text-[1.15rem] text-white/80 max-w-[75%] mx-auto mt-3">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonumm. Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
          </p>
        </div>
      </div>

      {/** Right/bottom Children (Sign in/up page) */}
      <main className="flex-1 flex justify-center items-center p-5 lg:p-0">
        {props.children}
      </main>
    </div>
  );
};

export default AuthLayout;
