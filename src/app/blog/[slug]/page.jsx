import React from "react";
import Image from "next/image";

const SinglePostPage = ({ params }) => {
  // taking out params
  console.log(params);
  return (
    <div
      className={"flex flex-col lg:flex-row-reverse gap-20 pt-[40px] h-screen "}
    >
      <div className={"flex-1 flex flex-col justify-center"}>
        <h2 className={"text-6xl mb-10"}>Blog detail page</h2>
        <h1 className={""}>
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p className={""}>
          We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas flexibility and precission We’re world’s Our
          Special Team best consulting & finance solution provider. Wide range
          of web and software development services. We create digital ideas that
          are bigger, bolder, braver and better. We believe in good ideas
          flexibility and precission We’re world’s Our Special Team best
          consulting & finance solution provider. Wide range of web and software
          development services. We create digital ideas that are bigger, bolder,
          braver and better. We believe in good ideas flexibility and precission
          We’re world’s Our Special Team best consulting & finance solution
          provider. Wide range of web and software development services.
        </p>

        <div className="author-wrapper mt-10 flex just-start items-center gap-10">
          <div className="author-img-wrapper w-[100px] h-[100px] rounded-full relative">
            <Image
              src="https://images.pexels.com/photos/19664604/pexels-photo-19664604/free-photo-of-portrait-of-man-playing-on-guitar-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="About Image"
              fill
              className="object-cover rounded-full"
            />
          </div>

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
