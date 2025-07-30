import React from "react";
import Image from "next/image";
import SignInFormClient from "@/features/auth/components/signin-form-client";

const SignInPage = () => {
  return (
    <>
      <div className="space-y-6 flex flex-col items-center justify-center h-full">
        <Image src={"/logo.svg"} alt="Logo" height={300} width={300} />
        <SignInFormClient />
      </div>
    </>
  );
};

export default SignInPage;
