import type { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { Inter } from 'next/font/google';
import { Container } from '@/ui';
import { Navbar } from './components';
import SessionProvider from './components/providers/SessionProvider';
import '@/ui/theme/styles.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next.js + TypeScript + TailwindCSS + NextAuth.js + + Postgres + Prisma + Vercel',
  description: 'Generated by create next app. Configured and updated by Jeremiah McCurdy.',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession();
  console.log({ session });

  return (
    <html lang="en">
      <body className={`${inter.className} bg-base-100 text-base-content antialiased w-full`}>
        <SessionProvider session={session}>
          <Navbar />
          <Container>
            <div className="flex flex-col items-center w-full justify-content mt-4">
              <div className="w-full lg:w-1/2 md:w-2/3">{children}</div>
            </div>
          </Container>
        </SessionProvider>
      </body>
    </html>
  );
}
