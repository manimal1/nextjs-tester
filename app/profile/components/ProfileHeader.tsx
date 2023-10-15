import { authOptions } from "@/app/api";
import { getServerSession } from "next-auth";
import Image from "next/image";

export async function ProfileHeader() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return <p>Sorry, you are not registered!</p>;
  }

  const { image, name, profession } = session.user;

  return (
    <>
      <div className="flex items-center space-x-4">
        <Image src={image ?? ""} className="rounded-full w-24 h-24" width={48} height={48} alt="avatar" />
        <div className="flex flex-col items-start">
          <h1 className="heading xl:heading-lg">{name}</h1>
          <p className="title-lg text-secondary">{profession}</p>
        </div>
      </div>
    </>
  );
}
