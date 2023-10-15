import NextAuth, { Session, User } from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import prisma from '@/prisma';

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID ?? '',
      clientSecret: process.env.GITHUB_SECRET ?? '',
    }),
  ],
  callbacks: {
    async signIn({ user }: { user: User }) {
      const currentUser = await prisma.user.findUnique({ where: { email: user.email ?? '' } });
      
      if (!currentUser) {
        await prisma.user.create({
          data: {
            email: user.email ?? '',
            name: user.name ?? '',
            image: user.image ?? '',
          },
        });
      }

      return true;
    },
    async redirect({ baseUrl }: { baseUrl: string }) {
      return baseUrl;
    },
    async session({ session }: { session: Session }) {
      const currentUser = await prisma.user.findUnique({ where: { email: session?.user?.email ?? '' } });

      return {
      ...session,
      user: {
        ...session.user,
        id: currentUser?.id ?? '',
        profession: currentUser?.profession ?? '',
      },
    }},
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
