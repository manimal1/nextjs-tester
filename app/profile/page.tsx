// import { ProtectedRoute } from '@/app/components';
// import { CreatePostForm } from './components/CreatPostForm';
import { ProfileHeader } from './components/ProfileHeader';

export default async function ProfileRoute() {
  return (
    <>
      <ProfileHeader />
      <div className="border border-black rounded divide-y-2 my-6" />
      <h2 className="title-lg my-8">Create a new post</h2>
      {/* <CreatePostForm /> */}
    </>
  );
}
