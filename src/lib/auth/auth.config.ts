import { env } from "@/env";
import { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";
import { logger } from "../logger";
import { db } from "../prisma/db";

export default {
  providers: [
    Google({
      clientId: env.AUTH_GOOGLE_ID,
      clientSecret: env.AUTH_GOOGLE_SECRET,
      allowDangerousEmailAccountLinking: true,
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized: async ({ request, auth }) => {
      if (request.nextUrl.pathname === "/") return true;
      return !!auth;
    },
    signIn: async ({ user }) => {
      const email = user?.email;
      if (!email) {
        logger.error("SignIn callback: User email not found");
        return "/";
      }
      const dbUser = await db.user.findUnique({
        where: { email },
      });
      if (!dbUser) {
        logger.error("SignIn callback: User not found in database");
        return "/";
      }
      return true;
    },
    jwt: async ({ token }) => {
      try {
        const email = token.email;
        if (!email) {
          logger.error("JWT callback: User email not found");
          return null;
        }

        const dbUser = await db.user.findUnique({
          where: { email },
        });

        if (!dbUser) {
          logger.error(`JWT callback: User with email: ${email} not found in database`);
          return null;
        }

        logger.info(`JWT callback: User with email: ${email} found in database`);

        return { ...token, id: dbUser.id };
      } catch (error) {
        logger.error(`Error during jwt callback: ${error}`);
        return null;
      }
    },
  },
} satisfies NextAuthConfig;
