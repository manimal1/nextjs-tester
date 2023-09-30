import prisma from '@/prisma';

export async function getUserByEmail(userEmail: string) {
  return await prisma.user.findUnique({
    where: { email: userEmail },
  });
}
