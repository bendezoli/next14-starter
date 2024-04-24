"use client";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const NavigationTestpage = () => {
  // client side navigation
  const router = useRouter();

  console.log(router);

  const path = usePathname();

  console.log(path);

  const searchParams = useSearchParams();

  const q = searchParams.get("q");
  const sort = searchParams.get("sort");

  console.log(q);
  console.log(sort);
  //this was the link: http://localhost:3000/navigationtest?q=ljvh%3BLWHVWEALNVW&sort=descritpion

  //   end of client side navigation

  const handleClick = () => {
    console.log("clicked");
    router.push("/");
    // router.replace("/"); // with replace it will not add a new wntry into the browser history stack
  };
  return (
    <div className="flex gap-10">
      <Link href="/" prefetch={false}>
        Click to this
      </Link>

      <button onClick={handleClick}>click button</button>
    </div>
  );
};

export default NavigationTestpage;
