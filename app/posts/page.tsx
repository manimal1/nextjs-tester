import { getAllPosts } from "@queries";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import Posts from "./posts";
// import axios from "axios";

// async function getAllPosts() {
//   const { data } = await axios.get("/api/posts");

//   if (!data) {
//     throw new Error("Failed to fetch posts");
//   }

//   return data;
// }

export default async function PostsPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["posts"],
    queryFn: getAllPosts,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Posts />
    </HydrationBoundary>
  );
}
