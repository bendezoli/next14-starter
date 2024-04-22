import Link from "next/link";
import React from "react";

const links = () => {
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

  return (
    <div className="link-wrapper ">
      {links.map((link, index) => (
        <Link href={link.path} key={index}>
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default links;
