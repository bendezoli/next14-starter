"use client";
import React from "react";

const hydrationTest = () => {
  const a = Math.random(); //the value is different on client and server side: to fix we have 3 solutions: useEffect, disabling ssr on specific components
  console.log(a);
  return (
    <div>
      hydrationTest
      {a}
    </div>
  );
};

export default hydrationTest;
