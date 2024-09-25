import prisma from "@prisma";

export async function getPostById(postId: string) {
  return await prisma.post.findUnique({
    where: { id: postId },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
}
