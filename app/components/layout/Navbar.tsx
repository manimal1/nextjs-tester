import Image from 'next/image';
import { AuthButton } from '@/app/components';
import { Container, Link } from '@/ui';

export function Navbar() {
  return (
    <Container className="shadow bg-base-200">
      <div className="flex flex-col items-center w-full justify-content">
        <div className="w-full lg:w-1/2 md:w-2/3">
          <ul className="flex items-center justify-between">
            <li className="pr-6">
              <Link href="/">
                <Image
                  src="/pirate_coder.png"
                  alt="Logo"
                  width={48}
                  height={48}
                  priority
                  className="rounded-lg"
                />
              </Link>
            </li>
            <li className="px-6">
              <Link href="/profile">Profile</Link>
            </li>
            <li className="px-6">
              <Link href="/post">Posts</Link>
            </li>
            <li className="px-6">
              <AuthButton />
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
}
