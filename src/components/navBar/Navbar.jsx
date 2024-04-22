import React from "react";
import Links from "./Links";
import Link from "next/link";
import Image from "next/image";

const navbar = () => {
  return (
    <div className="nav-wrapper container h-[60px] flex items-center fixed left-0 top-0 w-full">
      <div className="logo">
        <Link href="/">
          <Image
            src="/png/logo.png"
            width={60}
            height={60}
            alt="Picture of the author"
          />
        </Link>
      </div>
      <Links className={`ml-auto`} />
    </div>
  );
};

export default navbar;
