import { ProtectedRoute } from "@/app/components";
import { CreatePostForm } from "./components/CreatePostForm";
import { ProfileHeader } from "./components/ProfileHeader";

export default async function ProfileRoute() {
  return (
    <ProtectedRoute>
      <ProfileHeader />
      <div className="border border-black rounded divide-y-2 my-8" />
      <CreatePostForm />
    </ProtectedRoute>
  );
}
