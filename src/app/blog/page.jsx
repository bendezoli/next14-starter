import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";

const BlogPage = async () => {
  return (
    <div className={styles.container}>
      <div className={"w-full flex flex-wrap gap-4"}>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </div>
  );
};

export default BlogPage;
