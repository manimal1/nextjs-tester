import { getServerSession } from 'next-auth';

export async function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const session = await getServerSession();

  if (!session || !session.user) {
    return (
      <>
        <h1 className="heading mb-4">Access Denied</h1>
        <p className="title-lg">
          this is a protected route. You need to{' '}
          <a href="/api/auth/signin" className="text-primary">
            Login to continue
          </a>
        </p>
      </>
    );
  }

  return <>{children}</>;
}
