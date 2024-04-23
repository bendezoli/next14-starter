// "use client";
import Image from "next/image";

export const metadata = {
  title: "Contact Page",
  description: "Contact description",
};

const ContactPage = () => {
  return (
    <div className={"flex flex-col lg:flex-row gap-20 pt-[40px] h-screen"}>
      <div className="flex-1 self-center">
        <div className={"relative aspect-square max-w-[500px] "}>
          <Image src="/png/contact.png" alt="" fill className={""} />
        </div>
      </div>
      <div className={"flex-1 self-center"}>
        <form action="" className={"flex flex-col gap-5"}>
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
