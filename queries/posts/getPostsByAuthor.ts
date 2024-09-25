import prisma from "@prisma";

export async function getPostsByAuthor({
  authorId,
  isPublished = true,
}: {
  authorId: string;
  isPublished?: boolean;
}) {
  return await prisma.post.findMany({
    where: { published: isPublished, authorId },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
}
