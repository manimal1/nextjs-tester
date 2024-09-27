"use client";
import { LoadingPage } from "@app/components";
import { Post as PostType, User } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import { Link } from "@ui";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import { Post } from "./components/Post";

export interface PostWithAuthor extends PostType {
  author: Pick<User, "name" | "image">;
}

export default function Posts() {
  const {
    data: res,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => (await fetch("/api/posts")).json(),
  });

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error) {
    console.error({ error });
    return <div className="text-error">Error fetching posts</div>;
  }

  const posts: PostWithAuthor[] | undefined = res || [];

  if (!posts || posts.length === 0) {
    return false;
  }

  return (
    <section className="flex flex-col">
      <h1 className="heading">Posts</h1>
      <div className="flex flex-col space-y-6">
        {posts.map((post) => (
          <div className="relative" key={post.id}>
            <Link href={`/posts/${post.id}`} className="inline-block">
              <span className="sr-only">{post.title}</span>
              <HiArrowTopRightOnSquare
                data-testid="post-link"
                className="text-secondary h-6 w-6 absolute top-8 right-2"
              />
            </Link>
            <Post post={post} />
          </div>
        ))}
      </div>
    </section>
  );
}
