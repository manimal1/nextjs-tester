import { HiArrowLeft } from 'react-icons/hi2';
import { getPostById, getUserById } from '@/queries';
import { Link } from '@/ui';
import { Post as PostBase } from '../components/Post';

export default async function Post({ params: { id } }: { params: { id: string } }) {
  const post = await getPostById(id);

  if (!post) {
    return null;
  }

  return (
    <>
      <Link href="/posts" className="relative">
        <HiArrowLeft
          alt="post-link"
          className="text-secondary h-4 w-4 absolute top-1 left-0 right-auto"
        />
        <p className="text-secondary ml-4 mb-4">Back to posts</p>
      </Link>
      <PostBase post={post} />
    </>
  );
}
