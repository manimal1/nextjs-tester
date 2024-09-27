import prisma from "@/prisma";

export async function deletePost(postId: string) {
  await prisma.post.delete({
    where: { id: postId },
  });

  const posts = await prisma.post.findMany();

  return posts;
}
