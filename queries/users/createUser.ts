import prisma from '@/prisma';

interface User {
  name: string;
  profession?: string;
  email: string;
  image?: string;
}

export async function createUser({ name, profession, email, image }: User) {
  await prisma.user.create({
    data: {
      name,
      profession: profession ?? '',
      email,
      image: image ?? '',
    },
  });

  const users = await prisma.user.findMany();

  return users;
}
