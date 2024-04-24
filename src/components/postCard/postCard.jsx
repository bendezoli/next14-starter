import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <div className={(styles.container, `w-full md:w-[48%] lg:w-[32%]`)}>
      {/* <pre>{JSON.stringify(post, null, 2)}</pre> */}
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src="/png/noavatar.png" alt="" fill className={styles.img} />
        </div>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title.toUpperCase()}</h1>
        <p className={styles.desc}>{post.body}</p>

        <Link className={styles.link} href={`/blog/${post.id}`}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
