"use client";

import { LoadingPage } from "@app/components";
import { Post as PostBase } from "@app/posts/components/Post";
import { PostWithAuthor } from "@app/posts/posts";
import { useQuery } from "@tanstack/react-query";
import { Link } from "@ui";
import { HiArrowLeft } from "react-icons/hi2";

export default function PostById({ id }: { id: string }) {
  const {
    data: res,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["post-by-id", id],
    queryFn: async () => (await fetch(`/api/posts/${id}`)).json(),
    enabled: !!id,
  });

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error) {
    console.error({ error });
    return <div className="text-error">Error fetching posts</div>;
  }

  const post: PostWithAuthor | undefined = res;

  if (!post) {
    return null;
  }

  return (
    <>
      <Link href="/posts" className="relative">
        <HiArrowLeft data-testid="back-link" className="text-secondary h-4 w-4 absolute top-1 left-0 right-auto" />
        <p className="text-secondary ml-4 mb-4">Back to posts</p>
      </Link>
      <PostBase post={post} />
    </>
  );
}
