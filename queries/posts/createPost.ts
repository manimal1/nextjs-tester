import prisma from "@prisma";

export async function createPost({
  title,
  content,
  authorId,
}: {
  title: string;
  content: string;
  authorId: string;
}) {
  await prisma.post.create({
    data: {
      title,
      content,
      published: true,
      authorId,
    },
  });

  const posts = await prisma.post.findMany();

  return posts;
}
