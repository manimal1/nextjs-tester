import { getUserByEmail } from '@/queries';
import { getServerSession } from 'next-auth';
import Image from 'next/image';

export async function ProfileHeader() {
  const session = await getServerSession();
  const user = await getUserByEmail(session?.user?.email ?? '');

  if (!session || !user) {
    return <p>Sorry, you are not registered!</p>;
  }

  return (
    <>
      <div className="flex items-center space-x-4">
        <Image
          src={user.image ?? ''}
          className="rounded-full w-24 h-24"
          width={48}
          height={48}
          alt="avatar"
        />
        <div className="flex flex-col items-start">
          <h1 className="heading xl:heading-lg">{user.name}</h1>
          <p className="title-lg text-secondary">{user.profession}</p>
        </div>
      </div>
    </>
  );
}
