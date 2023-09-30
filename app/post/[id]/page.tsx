import dayjs from 'dayjs';
import Image from 'next/image';
import { getPostById, getUserById } from '@/queries';
import { Container } from '@/ui';

export default async function Post({ params: { id } }: { params: { id: string } }) {
  const post = await getPostById(id);

  if (!post) {
    return null;
  }

  const user = await getUserById(post.authorId);

  const authorName = post.author ? post.author.name : 'Unknown author';
  const publicationDate = dayjs(post.createdAt).format('DD/MM/YYYY');

  return (
    <section className="bg-base-300 rounded-lg">
      <Container>
        <div className="flex flex-col space-y-2">
          <h2 className="heading">{post?.title}</h2>
          <div className="flex items-center space-x-4">
            <Image
              src={user?.image ?? ''}
              className="rounded-full w-8 h-8"
              width={32}
              height={32}
              alt="avatar"
            />
            <div className="flex flex-col">
              <small className="text-secondary">By {authorName}</small>
              <small>{`published: ${publicationDate}`}</small>
            </div>
          </div>
        </div>
        <p className="mt-12">{post.content}</p>
      </Container>
    </section>
  );
}
