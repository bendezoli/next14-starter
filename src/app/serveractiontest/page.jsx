import React from "react";
import { addPost, deletePost } from "../../lib/action";

const ServerActionPage = () => {
  return (
    <div>
      <form action={addPost} className="flex flex-col w-fit gap-6 text-black">
        <input type="text" placeholder="title" name="title" />
        <input type="text" placeholder="desc" name="desc" />
        <input type="text" placeholder="slug" name="slug" />
        <input type="text" placeholder="userId" name="userId" />
        <button>Create</button>
      </form>

      <form action={deletePost} className="text-black">
        <input type="text" placeholder="postId" name="id" />
        <button>Delete item</button>
      </form>
    </div>
  );
};

export default ServerActionPage;
