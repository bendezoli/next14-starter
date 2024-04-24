"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
// import { useEffect, useState } from "react";
// import HydrationTest from "../../components/hydrationTest";

// export const metadata = {
//   title: "Contact Page",
//   description: "Contact description",
// };

// const HydrationTestNoSSr = dynamic(
//   () => import("../../components/hydrationTest"),
//   {
//     ssr: false,
//   }
// );

const ContactPage = () => {
  // const [isClient, setIsClient] = useState(false);

  // useEffect(() => {
  //   setIsClient(true);
  // }, []);

  const a = Math.random(); //the value is different on client and server side: to fix we have 3 solutions: useEffect, disabling ssr on specific components(HydrationTestNoSSr) and with suppressHydrationWarning
  console.log(a);

  console.log("where it works");

  return (
    <div className={"flex flex-col lg:flex-row gap-20 pt-[40px] h-screen"}>
      {/* {isClient && a} */}
      {/* <HydrationTestNoSSr /> */}
      <div suppressHydrationWarning>{a}</div>
      <div className="flex-1 self-center">
        <div className={"relative aspect-square max-w-[500px] "}>
          <Image src="/png/contact.png" alt="" fill className={""} />
        </div>
      </div>
      <div className={"flex-1 self-center"}>
        <form action="" className={"form flex flex-col gap-5"}>
          <input type="text" placeholder="Name and Surname" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number (Optional)" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
