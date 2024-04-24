import React, { Suspense } from "react";
import Image from "next/image";
import PostUser from "@/components/postUser/postUser";

const SinglePostPage = async ({ params }) => {
  // taking out params { params }
  console.log(params.slug, "slug");

  // const { slug } = params;

  const singlePost = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${params.slug}`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      throw new Error("Something went wrong");
    }

    return res.json();
  };

  const detailPost = await singlePost();

  console.log(detailPost);

  return (
    <div
      className={"flex flex-col lg:flex-row-reverse gap-20 pt-[40px] h-screen "}
    >
      <div className={"flex-1 flex flex-col justify-center"}>
        <h2 className={"text-6xl mb-10"}>Blog detail page</h2>
        <h1 className={"text-4xl mb-10"}>{detailPost.title}</h1>
        <p className={""}>{detailPost.body}</p>

        <div className="author-wrapper mt-10 flex just-start items-center gap-10">
          <div className="author-img-wrapper w-[100px] h-[100px] rounded-full relative">
            <Image
              src="https://images.pexels.com/photos/19664604/pexels-photo-19664604/free-photo-of-portrait-of-man-playing-on-guitar-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="About Image"
              fill
              className="object-cover rounded-full"
            />
          </div>
          <pre>{JSON.stringify(detailPost.userId, null, 2)}</pre>
          <pre>{JSON.stringify(detailPost.id, null, 2)}</pre>

          <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={detailPost.id} />
          </Suspense>

          <div className="author-name flex gap-10">
            <div>
              <p>Author:</p>
              <p className="uppercase">Lorem ipsum</p>
            </div>

            <div>
              <p>Published:</p>
              <p className="uppercase">11.02.2024</p>
            </div>
          </div>
        </div>
      </div>

      <div className={"flex-1 self-center"}>
        <div className="img aspect-square max-w-[700px]  relative ml-auto">
          <Image src="/png/about.png" alt="About Image" fill />
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
