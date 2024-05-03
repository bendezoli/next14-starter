import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { connectToDb } from "./utils";
import { User } from "./models";
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      //   console.log(profile, "profile ");
      if (account.provider === "github") {
        connectToDb();

        try {
          const existingUser = await User.findOne({
            email: profile.email,
          });

          if (!existingUser) {
            const newUser = await User.create({
              username: profile.login,
              email: profile.email,
              image: profile.avatar_url,
            });

            await newUser.save();
          }
        } catch (err) {
          console.log(err);
        }
      }
      return true;
    },
  },
});
