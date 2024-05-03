import { auth } from "@/lib/auth";
import { handleGitHubLogin, login } from "@/lib/action";
import React from "react";

const LoginPage = async () => {
  const session = await auth();

  // console.log(session);

  return (
    <div>
      <form action={handleGitHubLogin}>
        <button>Login with github</button>
      </form>
      <form action={login} className="text-black">
        <input type="text" placeholder="username" name="username" />
        <input type="password" placeholder="password" name="password" />
        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
