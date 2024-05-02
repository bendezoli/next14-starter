import { auth, signIn } from "@/lib/auth";
import { handleGitHubLogin } from "@/lib/action";
import React from "react";

const LoginPage = async () => {
  const session = await auth();

  console.log(session);

  return (
    <div>
      <form action={handleGitHubLogin}>
        <button>Login with github</button>
      </form>
    </div>
  );
};

export default LoginPage;
