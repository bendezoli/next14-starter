import React from "react";
import Links from "./Links";

const navbar = () => {
  return (
    <div className="nav-wrapper flex bg-slate-500">
      <div className="logo">logo</div>
      <Links />
    </div>
  );
};

export default navbar;
