import Image from "next/image";

export default function App() {
  const iconClasses = "rounded-lg";

  return (
    <main>
      <header className="flex items-center justify-center w-full">
        <div className="flex flex-col flex-wrap items-end space-x-6 w=[260px]">
          <Image src="/next-icon.svg" alt="Next.js Logo" width={200} height={40} className="h-[40px] w-[200px]" />
          <h1 className="heading">Test App</h1>
        </div>
      </header>
      <div className="flex items-center justify-center w-full my-8">
        <div className="border border-black rounded divide-y-2 my-6 w-2/3" />
      </div>
      <h2 className="text-center heading-sm mb-6">Technologies Deployed</h2>
      <div className="flex justify-center">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Image src="/typescript-icon.png" alt="TypeScript Logo" width={80} height={80} className={`${iconClasses}`} />
          <Image src="/react-icon.jpeg" alt="React Logo" width={80} height={80} className={iconClasses} />
          <div className="h-[80px] w-[80px] bg-gray-100 rounded-lg flex items-center justify-center">
            <Image src="/vercel-icon.svg" alt="Vercel Logo" width={80} height={80} className={`${iconClasses} p-1`} />
          </div>
          <Image src="/tailwind-icon.png" alt="Tailwind Logo" width={80} height={80} className={iconClasses} />
          <Image src="/rhf-icon.png" alt="React-Hook-Form Logo" width={80} height={80} className={iconClasses} />
          <Image src="/zod-icon.png" alt="Zod Logo" width={80} height={80} className={iconClasses} />
          <Image src="/playwright-icon.png" alt="Playwright Logo" width={80} height={80} className={iconClasses} />
          <Image src="/prisma-icon.jpeg" alt="Prisma Logo" width={80} height={80} className={iconClasses} />
          <div className="h-[80px] w-[80px] bg-gray-100 rounded-lg flex items-center justify-center">
            <Image
              src="/nextauth-icon.png"
              alt="Next Auth Logo"
              width={80}
              height={80}
              className={`${iconClasses} p-2`}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
