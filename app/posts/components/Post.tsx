import dayjs from "dayjs";
import Image from "next/image";
import { getUserById } from "@/queries";
import { Container } from "@/ui";

export async function Post({ post }: any) {
  if (!post) {
    return null;
  }

  const user = await getUserById(post.authorId);

  const authorName = post.author ? post.author.name : "Unknown author";
  const publicationDate = dayjs(post.createdAt).format("DD/MM/YYYY");

  return (
    <section className="bg-base-300 rounded-lg">
      <Container>
        <div className="flex flex-col space-y-2">
          <h2 className="heading">{post?.title}</h2>
          <div className="flex items-center space-x-4">
            <Image src={user?.image ?? ""} className="rounded-full w-8 h-8" width={32} height={32} alt="avatar" />
            <div className="flex flex-col">
              <p className="text-sm text-secondary">By {authorName}</p>
              <p className="text-sm">{`published: ${publicationDate}`}</p>
            </div>
          </div>
        </div>
        <p className="mt-12 hover:text-base-content">{post.content}</p>
      </Container>
    </section>
  );
}
