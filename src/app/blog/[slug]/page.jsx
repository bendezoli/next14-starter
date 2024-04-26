import React, { Suspense } from "react";
import Image from "next/image";
import PostUser from "@/components/postUser/postUser";
import { getPost } from "../../../lib/data";

export const generateMetadata = async ({ params }) => {
  const { slug } = params;
  const detailPost = await getPost(slug);

  return {
    title: detailPost.title,
    description: detailPost.desc,
  };
};

const SinglePostPage = async ({ params }) => {
  // taking out params { params }
  // console.log(params.slug, "slug");
  // console.log(typeof params.slug, "slug");

  const { slug } = params;

  // FETCH DATA WITH API
  const getData = async () => {
    const res = await fetch(
      `http://localhost:3000/api/blog/${slug}`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      throw new Error("Something went wrong");
    }

    return res.json();
  };

  const detailPost = await getData();

  // FETCH DATA WITHOUT API
  // const detailPost = await getPost(slug);

  // console.log(detailPost, "detailblog");

  return (
    <div
      className={"flex flex-col lg:flex-row-reverse gap-20 pt-[40px] h-screen "}
    >
      <div className={"flex-1 flex flex-col justify-center"}>
        <h2 className={"text-6xl mb-10"}>Blog detail page</h2>
        <h1 className={"text-4xl mb-10"}>{detailPost?.title}</h1>
        <p className={""}>{detailPost?.desc}</p>

        <div className="author-wrapper mt-10 flex just-start items-center gap-10">
          {/* <pre>{JSON.stringify(detailPost.userId, null, 2)}</pre> */}
          {/* <pre>{JSON.stringify(detailPost.id, null, 2)}</pre> */}

          {detailPost && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={detailPost.userId} />
            </Suspense>
          )}

          <div className="date-wrpper">
            <p>{detailPost.createdAt.toString().slice(4, 16)}</p>
          </div>
        </div>
      </div>

      <div className={"flex-1 self-center"}>
        <div className="img aspect-square max-w-[700px]  relative ml-auto">
          <Image
            src={detailPost.img}
            alt="About Image"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
