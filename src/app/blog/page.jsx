import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";
import { getPosts } from "../../lib/data";

export const metadata = {
  title: "Blog",
  description: "blog page",
};

const BlogPage = async () => {
  // { params, searchParams }
  // console.log(params);
  // console.log(searchParams);

  // FETCH DATA WITH API
  const getData = async () => {
    const res = await fetch("http://localhost:3000/api/blog", {
      next: { revalidate: 3600 }, // 60 minutes
    });
    // const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    //   cache: "no-store",
    // });

    if (!res.ok) {
      throw new Error("Something went wrong");
    }

    return res.json();
  };

  const posts = await getData();

  // FETCH DATA WITHOUT API
  // const posts = await getPosts();
  console.log(posts);

  return (
    <div className={styles.container}>
      <div className={"w-full flex flex-wrap gap-4"}>
        {posts.map((post, index) => (
          <PostCard post={post} key={index} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
