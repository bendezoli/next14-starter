import React from "react";
import styles from "./adminPosts.module.css";
import { getPosts } from "@/lib/data";
import Image from "next/image";
import { deletePost } from "@/lib/action";

const AdminPosts = async () => {
  const posts = await getPosts();
  const defaulIMG = "/png/noavatar.png";

  return (
    <div className={styles.container}>
      <h1>Posts</h1>

      {posts.map((post, postIndex) => (
        <div className={styles.post} key={postIndex}>
          <div className={styles.detail}>
            <div className="w-[50px] h-[50px] relative">
              <Image
                src={post.img ? post.img : defaulIMG}
                alt=""
                fill
                className={(styles.img, "object-cover")}
              />
            </div>

            <span className={styles.postTitle}>{post.title}</span>
          </div>
          <form action={deletePost}>
            <input type="hidden" name="id" value={post.id} />
            <button className={styles.postButton}>Delete</button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default AdminPosts;
