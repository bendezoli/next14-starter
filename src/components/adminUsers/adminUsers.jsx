import React from "react";
import styles from "./adminUsers.module.css";
import { getUsers } from "@/lib/data";
import Image from "next/image";
import { deleteUser } from "@/lib/action";

const AdminUsers = async () => {
  const users = await getUsers();
  const defaulIMG = "/png/noavatar.png";
  // console.log(users);

  return (
    <div className={styles.container}>
      <h1>Users</h1>
      {users.map((user) => (
        <div className={styles.user} key={user.id}>
          <div className={styles.detail}>
            <div className="relative w-[50px] h-[50px]">
              <Image
                src={user.img ? user.img : defaulIMG}
                alt=""
                fill
                className={(styles.img, "object-cover")}
              />
            </div>
            <span>{user.username}</span>
          </div>
          <form action={deleteUser}>
            <input type="hidden" name="id" value={user.id} />
            <button className={styles.userButton}>Delete</button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default AdminUsers;
