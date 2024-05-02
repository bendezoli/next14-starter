"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import { handleGitHubLogOut } from "@/lib/action";

const Links = ({ className, session }) => {
  const path = usePathname();
  const [open, setOpen] = useState(false);

  // console.log(session);

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

  const isAdmin = true;

  useEffect(() => {
    setOpen(false);
  }, [path]);

  return (
    <>
      <div
        className={classNames(
          className,
          "link-wrapper,  gap-6 relative hidden lg:flex"
        )}
      >
        {links.map((link, index) => (
          <Link
            href={link.path}
            key={index}
            className={classNames(
              path === link.path
                ? "bg-white text-secondary"
                : "bg-transparent text-white",
              "rounded-xl px-4 py-1  transition-all duration-700"
            )}
          >
            {link.title}
          </Link>
        ))}

        {session?.user ? (
          <>
            {session.user?.isAdmin && (
              <Link
                href="/admin"
                className={classNames(
                  path === "/admin"
                    ? "bg-white text-secondary"
                    : "bg-transparent text-white",
                  "rounded-xl px-4 py-1  transition-all duration-700"
                )}
              >
                Admin
              </Link>
            )}

            <form action={handleGitHubLogOut}>
              <button
                className={classNames(
                  path === "/login"
                    ? "bg-white text-secondary"
                    : "bg-transparent text-white",
                  "rounded-xl px-4 py-1  transition-all duration-700"
                )}
              >
                Logout
              </button>
            </form>
          </>
        ) : (
          <Link
            href="/login"
            className={classNames(
              path === "/login"
                ? "bg-white text-secondary"
                : "bg-transparent text-white",
              "rounded-xl px-4 py-1  transition-all duration-700"
            )}
          >
            Login
          </Link>
        )}
      </div>

      <div className="mobile ">
        <button
          className="z-10 lg:hidden"
          onClick={() => {
            setOpen((prev) => !prev);
          }}
        >
          Menu
        </button>

        {open && (
          <div className="lg:hidden flex flex-col gap-6 items-center justify-center fixed h-screen w-1/2 right-0 top-0 bg-secondary z-100">
            {links.map((link, index) => (
              <Link
                href={link.path}
                key={index}
                className={classNames(
                  path === link.path
                    ? "bg-white text-secondary"
                    : "bg-transparent text-white",
                  "rounded-xl px-4 py-1  transition-all duration-700 w-fit"
                )}
              >
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Links;
