import { HiArrowTopRightOnSquare } from 'react-icons/hi2';
import { getAllPosts } from '@/queries';
import { Link } from '@/ui';
import { Post } from './components/Post';
import dayjs from 'dayjs';

export default async function Page() {
  const posts = await getAllPosts();

  if (!posts || posts.length === 0) {
    return null;
  }

  const postsSortedByDate = posts.sort((prev, next) =>
    dayjs(prev.createdAt).isAfter(dayjs(next.createdAt)) ? 1 : -1,
  );

  return (
    <section className="flex flex-col">
      <div className="flex flex-col space-y-6">
        {postsSortedByDate.map((post) => (
          <div className="relative" key={post.id}>
            <Link href={`/post/${post.id}`} className="inline-block">
              <HiArrowTopRightOnSquare className="text-secondary h-6 w-6 absolute top-8 right-2 lefat-auto" />
            </Link>
            <Post post={post} />
          </div>
        ))}
      </div>
    </section>
  );
}
