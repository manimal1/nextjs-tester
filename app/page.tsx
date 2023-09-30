import Image from 'next/image';

export default function App() {
  return (
    <main>
      <header className="flex items-center justify-center w-full">
        <div className="flex flex-col flex-wrap items-end space-x-6 w=[260px]">
          <Image src="/next-icon.svg" alt="Next.js Logo" width={200} height={200} />
          <h1 className="heading">Test App</h1>
        </div>
      </header>
      <div className="flex items-center justify-center w-full my-8">
        <div className="border border-black rounded divide-y-2 my-6 w-2/3" />
      </div>
      <h2 className="text-center heading-sm">Technologies Deployed</h2>
      <div className="flex items-center justify-center flex-wrap w-full space-x-8 space-y-8">
        <Image
          src="/typescript-icon.png"
          alt="TypeScript Logo"
          width={80}
          height={80}
          className="rounded-lg mt-7"
        />
        <Image
          src="/react-icon.jpeg"
          alt="React Logo"
          width={80}
          height={80}
          className="rounded-lg"
        />
        <div className="h-[80px] w-[80px] bg-gray-100 rounded-lg flex items-center justify-center">
          <Image
            src="/vercel-icon.svg"
            alt="Vercel Logo"
            width={50}
            height={50}
            className="rounded-lg"
          />
        </div>
        <Image
          src="/tailwind-icon.png"
          alt="Tailwind Logo"
          width={80}
          height={80}
          className="rounded-lg"
        />
        <Image
          src="/rhf-icon.png"
          alt="React-Hook-Form Logo"
          width={80}
          height={80}
          className="rounded-lg"
        />
        <Image src="/zod-icon.png" alt="Zod Logo" width={80} height={80} className="rounded-lg" />
        <Image
          src="/playwright-icon.png"
          alt="Playwright Logo"
          width={80}
          height={80}
          className="rounded-lg"
        />
        <Image
          src="/prisma-icon.jpeg"
          alt="Prisma Logo"
          width={80}
          height={80}
          className="rounded-lg"
        />
        <div className="h-[80px] w-[80px] bg-gray-100 rounded-lg flex items-center justify-center">
          <Image
            src="/nextauth-icon.png"
            alt="Next Auth Logo"
            width={50}
            height={50}
            className="rounded-lg"
          />
        </div>
      </div>
    </main>
  );
}
