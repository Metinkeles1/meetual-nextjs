import React from "react";
import Logo from "@/components/Logo";

const AuthLayout = ({ children }) => {
  return (
    <div className='flex-center h-screen '>
      <div className='w-full flex-center flex-col gap-y-4'>
        <Logo />
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
