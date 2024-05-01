import React from "react";
// Clerk Components
import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <SignIn
      appearance={{
        elements: {
          formButtonPrimary: {
            background: "#f7323f",
            outlineColor: "#f7323f",
            borderColor: "#f7323f",
            boxShadow: "none",
            border: "0px !important",
          },
        },
      }}
    />
  );
};

export default SignInPage;
