import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { Inter } from "next/font/google";
import { PageLayout } from "@/ui";
import { Navbar } from "./components";
import SessionProvider from "./components/providers/SessionProvider";
import "@/ui/theme/styles.css";
import { authOptions } from "./api";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Next.js + TypeScript + TailwindCSS + NextAuth.js + Postgres + Prisma + React-hook-form + Zod + Playwright + Vercel",
  description: "Test app created to learn new skills with Next.js and TypeScript",
  authors: [{ name: "Jeremiah Mccurdy" }],
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={`${inter.className} bg-base-100 text-base-content antialiased w-full`}>
        <SessionProvider session={session}>
          <Navbar />
          <PageLayout className="mt-6">{children}</PageLayout>
        </SessionProvider>
      </body>
    </html>
  );
}
