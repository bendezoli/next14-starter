import React from "react";
import styles from "./postUser.module.css";
import Image from "next/image";
import { getUser } from "../../lib/data";

const PostUser = async ({ userId }) => {
  // FETCH DATA WITH API
  // const getData = async () => {
  //   const res = await fetch(
  //     `https://jsonplaceholder.typicode.com/users/${userId}`,
  //     {
  //       cache: "no-store",
  //     }
  //   );

  //   if (!res.ok) {
  //     throw new Error("Something went wrong");
  //   }

  //   return res.json();
  // };

  // const user = await getData();

  // FETCH DATA WITHOUT API
  const user = await getUser(userId);
  const defaulIMG = "/png/noavatar.png";

  // console.log(user, "inneruser");
  return (
    <div className={styles.container}>
      {/* <Image
        className={styles.avatar}
        src={user.img ? user.img : "/png/noavatar.png"}
        alt=""
        width={50}
        height={50}
      /> */}
      <div
        className={(styles.texts, "flex justify-center items-center gap-10")}
      >
        <div className="author-img-wrapper w-[100px] h-[100px] rounded-full relative">
          <Image
            src={user.img ? user.img : defaulIMG}
            alt="About Image"
            fill
            className="object-cover rounded-full"
          />
        </div>

        <div>
          <p className={styles.title}>Author:</p>
          <p className={styles.username}>{user?.username.toUpperCase()}</p>
        </div>
      </div>
    </div>
  );
};

export default PostUser;
