// import { getPostById } from "@queries";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import PostById from "./PostById";
// import axios from "axios";

// async function getPostById(id: string) {
//   const { data } = await axios.get(`${process.env.NEXTAUTH_URL}/api/posts`);

//   if (!data) {
//     throw new Error("Failed to fetch post");
//   }

//   return data;
// }

async function getPostById(id: string) {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts/${id}`);

  if (!res.ok) {
    throw new Error("Error fetching Post!");
  }

  return res.json();
}

export default async function PostByIdPage({ params: { id } }: { params: { id: string } }) {
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
