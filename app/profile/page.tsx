import { ProtectedRoute } from "@/app/components";
import { Container } from "@/ui";
import { CreatePostForm } from "./components/CreatePostForm";
import { ProfileHeader } from "./components/ProfileHeader";

export default async function ProfileRoute() {
  return (
    <ProtectedRoute>
      <ProfileHeader />
      <div className="border border-black rounded divide-y-2 my-8" />
      <Container className="bg-base-300 rounded-lg">
        <h2 className="title-lg mb-8">Create a new post</h2>
        <CreatePostForm />
      </Container>
    </ProtectedRoute>
  );
}
