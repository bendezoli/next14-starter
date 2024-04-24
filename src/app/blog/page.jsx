import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";

const BlogPage = async () => {
  // { params, searchParams }
  // console.log(params);
  // console.log(searchParams);

  const getData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
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
