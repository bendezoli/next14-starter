import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const PostCard = ({ post }) => {
  const defaulIMG = "/png/noavatar.png";
  // console.log(post);
  return (
    <div className={(styles.container, `w-full md:w-[48%] lg:w-[32%]`)}>
      {/* <pre>{JSON.stringify(post.img, null, 2)}</pre> */}
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src={post.img ? post.img : defaulIMG}
            alt=""
            fill
            className={(styles.img, "object-cover")}
          />
        </div>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title.toUpperCase()}</h1>
        <p className={styles.desc}>{post.desc}</p>

        <Link className={styles.link} href={`/blog/${post.slug}`}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
