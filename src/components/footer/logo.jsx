"use client";
import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-sm mr-4  text-black px-2 py-1  relative z-20"
    >
      <Image
        src="/logo_original.svg"
        alt="logo"
        width={30}
        height={30}
      />
      <span className="font-medium text-black dark:text-white">FROZEN</span>
    </Link>
  );
};
