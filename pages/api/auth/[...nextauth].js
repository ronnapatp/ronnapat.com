import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github"
import TwitterProvider from "next-auth/providers/twitter"
import EmailProvider from "next-auth/providers/email"

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_ID,
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET,
    }),
    TwitterProvider({
      clientId: process.env.NEXT_PUBLIC_TWITTER_ID,
      clientSecret: process.env.NEXT_PUBLIC_TWITTER_SECRET,
    }),
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
  ],
  // database: {
  //   type: "sqlite",
  //   database: ":memory:",
  //   synchronize: true,
  // },
})