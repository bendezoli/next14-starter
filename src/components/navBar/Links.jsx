"use client";
import Link from "next/link";
import React, { useState } from "react";
import classNames from "classnames";
import { usePathname } from "next/navigation";

const Links = ({ className }) => {
  // const [isActive, setActive] = useState(0);
  const path = usePathname();

  console.log(path);

  const links = [
    {
      title: "Homepage",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];

  // const activeLink = (index) => {
  //   setActive(index);
  // };

  return (
    <div className={classNames(className, "link-wrapper, flex gap-6")}>
      {links.map((link, index) => (
        <Link
          href={link.path}
          key={index}
          // className={`${isActive === index ? "bg-white" : "inactive"}`}
          className={classNames(
            path === link.path
              ? "bg-white text-secondary"
              : "bg-transparent text-white",
            "rounded-xl p-4 transition-all duration-700"
          )}
          // onClick={() => activeLink(index)}
        >
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default Links;
