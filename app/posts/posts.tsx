"use client";
import { LoadingPage } from "@app/components";
import { Post as PostType, User } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import { Link } from "@ui";
import axios from "axios";
import dayjs from "dayjs";
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
    queryFn: () => axios.get("/api/posts"),
  });

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error) {
    console.error({ error });
    return <div className="text-error">Error fetching posts</div>;
  }

  const posts: PostWithAuthor[] | undefined = res?.data;

  if (!posts || posts.length === 0) {
    return false;
  }

  const postsSortedByDate = posts.sort((prev, next) =>
    dayjs(prev.createdAt).isAfter(dayjs(next.createdAt)) ? 1 : -1
  );

  return (
    <section className="flex flex-col">
      <h1 className="heading">Posts</h1>
      <div className="flex flex-col space-y-6">
        {postsSortedByDate.map((post) => (
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
