import React from "react";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href='/' className='text-2xl font-bold no-underline'>
      <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-500'>
        Meet
      </span>
      <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500'>
        ual
      </span>
    </Link>
  );
};

export default Logo;
