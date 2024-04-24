import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <div className={(styles.container, `w-full md:w-[48%] lg:w-[32%]`)}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src="/png/noavatar.png" alt="" fill className={styles.img} />
        </div>

        {/* <span className={styles.date}>
          {post.createdAt?.toString().slice(4, 16)}
        </span> */}
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>This is a title</h1>
        <p className={styles.desc}>lorem ipsum dolor sitamet</p>
        <Link className={styles.link} href={"/blog/post"}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
