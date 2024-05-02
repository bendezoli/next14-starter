"use server";
import error from "@/app/error";
import { connectToDb } from "./utils";
import { Post } from "./models";
import { revalidatePath } from "next/cache";
import { signIn, signOut } from "./auth";

export const addPost = async (formData) => {
  console.log(formData);
  //   const title = formData.get("title");
  //   const desc = formData.get("desc");
  //   const slug = formData.get("slug");

  const { title, desc, slug, userId } = Object.fromEntries(formData);

  try {
    connectToDb();

    const newPOst = new Post({ slug, title, desc, userId });

    await newPOst.save();
    console.log("Post saved");

    revalidatePath("/blog");
  } catch (e) {
    console.log(e);
    return { error: "some error" };
  }
};

export const deletePost = async (formData) => {
  console.log(formData);
  const { id } = Object.fromEntries(formData);
  //   console.log(id);

  try {
    connectToDb();

    await Post.findByIdAndDelete(id);
    console.log("deleted from db");

    revalidatePath("/blog");
  } catch (e) {
    console.log(e);
    return { error: "some error" };
  }
};

export const handleGitHubLogin = async () => {
  "use server";
  await signIn("github");
};

export const handleGitHubLogOut = async () => {
  "use server";
  await signOut("github");
};
