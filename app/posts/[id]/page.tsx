import dayjs from 'dayjs';
import Image from 'next/image';
import { HiArrowLeft } from 'react-icons/hi2';
import { getPostById, getUserById } from '@/queries';
import { Container, Link } from '@/ui';

export default async function Post({ params: { id } }: { params: { id: string } }) {
  const post = await getPostById(id);

  if (!post) {
    return null;
  }

  const user = await getUserById(post.authorId);

  const authorName = post.author ? post.author.name : 'Unknown author';
  const publicationDate = dayjs(post.createdAt).format('DD/MM/YYYY');

  return (
    <>
      <Link href="/posts" className="relative">
        <HiArrowLeft
          alt="post-link"
          className="text-secondary h-4 w-4 absolute top-1 left-0 right-auto"
        />
        <p className="text-secondary ml-4">Back to posts</p>
      </Link>
      <section className="bg-base-300 rounded-lg mt-4">
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
    </>
  );
}
