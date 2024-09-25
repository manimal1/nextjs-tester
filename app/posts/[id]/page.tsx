import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import axios from "axios";
import PostById from "./PostById";

async function getPostById(id: string) {
  const { data } = await axios.get(`/api/posts/${id}`);

  if (!data) {
    throw new Error("Failed to fetch post");
  }

  return data;
}

export default async function PostByIdPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["post-by-id", id],
    queryFn: () => getPostById(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PostById id={id} />
    </HydrationBoundary>
  );
}
