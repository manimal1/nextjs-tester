"use client";

import { PostWithAuthor } from "@app/posts/posts";
import { Container } from "@ui";
import dayjs from "dayjs";
import Image from "next/image";

interface PostProps {
  post: PostWithAuthor;
}

export function Post({ post }: PostProps) {
  if (!post) {
    return false;
  }

  const authorName = post.author.name;
  const publicationDate = dayjs(post.createdAt).format("DD/MM/YYYY");

  return (
    <section className="bg-base-300 rounded-lg">
      <Container>
        <div className="flex flex-col space-y-2">
          <h2 className="heading">{post?.title}</h2>
          <div className="flex items-center space-x-4">
            <Image
              src={post.author.image ?? ""}
              className="rounded-full w-8 h-8"
              width={32}
              height={32}
              alt="avatar"
            />
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
