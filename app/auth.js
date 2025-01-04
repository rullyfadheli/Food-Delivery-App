import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      session.supabaseAccessToken = token.supabaseAccessToken;
      return session;
    },
    async jwt({ token, account }) {
      if (account) {
        token.supabaseAccessToken = account.id_token;
      }
      return token;
    },
  },
  pages: {
    signIn: "/login",
    signOut: "/profile",
    error: "/auth/error", // Custom error page
  },
});
