"use server";
import { connectToDb } from "./utils";
import { Post, User } from "./models";
import { revalidatePath } from "next/cache";
import { signIn, signOut } from "./auth";
import bcrypt from "bcryptjs";

export const addPost = async (previousState, formData) => {
  console.log(formData);
  //   const title = formData.get("title");
  //   const desc = formData.get("desc");
  //   const slug = formData.get("slug");

  const { title, desc, slug, userId } = Object.fromEntries(formData);
  console.log(title);

  try {
    connectToDb();

    const newPOst = new Post({ slug, title, desc, userId });

    await newPOst.save();
    console.log("Post saved");

    revalidatePath("/blog");
    revalidatePath("/admin");
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
    revalidatePath("/admin");
  } catch (e) {
    console.log(e);
    return { error: "some error" };
  }
};

export const addUser = async (previousState, formData) => {
  console.log(formData);

  const { username, email, password, img } = Object.fromEntries(formData);
  // console.log(title);

  try {
    connectToDb();

    const newUser = new User({ username, email, password, img });

    await newUser.save();
    console.log("Post saved");

    revalidatePath("/admin");
  } catch (e) {
    console.log(e);
    return { error: "some error" };
  }
};

export const deleteUser = async (formData) => {
  console.log(formData);
  const { id } = Object.fromEntries(formData);
  //   console.log(id);

  try {
    connectToDb();

    await Post.deleteMany({ userId: id });
    await User.findByIdAndDelete(id);
    console.log("deleted from db");

    revalidatePath("/admin");
  } catch (e) {
    console.log(e);
    return { error: "some error" };
  }
};

export const handleGithubLogin = async () => {
  "use server";
  await signIn("github");
};

export const handleGitHubLogOut = async () => {
  "use server";
  await signOut("github");
};

export const register = async (previousState, formData) => {
  // console.log(formData);
  const { username, email, password, passwordRepeat } =
    Object.fromEntries(formData);

  if (password !== passwordRepeat) {
    // console.log("Passwords do not match");
    return { error: "Passwords do not match" };
  }

  try {
    connectToDb();

    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return { error: "User exist" };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    console.log("User saved");
    return { success: true };
  } catch (e) {
    console.log(e);
    return { error: "Something went wrong" };
  }
};

export const login = async (previousState, formData) => {
  // console.log(formData);
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (e) {
    console.log(e);
    throw e;
  }
};
