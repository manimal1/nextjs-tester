import NextAuth, { User } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from 'next-auth/providers/github';
import prisma from '@/prisma';

const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID ?? '',
      clientSecret: process.env.GITHUB_SECRET ?? '',
    }),
  ],
  callbacks: {
    async jwt({ token }: { token: any }) {
      console.log('jwt callback', { token });
      return token;
    },
    async session({ session, token }: { session: any; token: any }) {
      const user = await prisma.user.findUnique({ where: { email: session.user.email } });
      console.log({ user, session, token });
      session.user.id = user?.id ?? null;

      return session;
    },
    async signIn({ user }: { user: User }) {
      return true;
    },
    async redirect({ baseUrl }: { baseUrl: string }) {
      return baseUrl;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
