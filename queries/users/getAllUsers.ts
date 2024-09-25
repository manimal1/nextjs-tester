import prisma from "@prisma";

export async function getAllUsers() {
  return await prisma.user.findMany();
}
