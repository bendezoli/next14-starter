import React from "react";
import Links from "./Links";
import Link from "next/link";
import Image from "next/image";
import { auth } from "@/lib/auth";

const navbar = async () => {
  const session = await auth();
  // console.log(session, "session");

  return (
    <div className="nav-wrapper container h-[60px] flex items-center fixed left-0 top-0 right-0 bottom-0 w-full">
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
      <Links className={`ml-auto`} session={session} />
    </div>
  );
};

export default navbar;
