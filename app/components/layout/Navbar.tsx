import { AuthButton } from "@app/components";
import { Link, PageLayout } from "@ui";
import Image from "next/image";

export function Navbar() {
  return (
    <PageLayout className="shadow bg-base-200">
      <ul className="flex items-center justify-between">
        <li>
          <Link href="/">
            <Image
              src="/pirate-icon.png"
              alt="Logo"
              width={48}
              height={48}
              priority
              className="rounded-lg"
            />
          </Link>
        </li>
        <li>
          <Link href="/profile">Profile</Link>
        </li>
        <li>
          <Link href="/posts">Posts</Link>
        </li>
        <li>
          <AuthButton />
        </li>
      </ul>
    </PageLayout>
  );
}
