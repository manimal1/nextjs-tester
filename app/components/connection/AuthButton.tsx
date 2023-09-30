'use client';
import { signIn, signOut, useSession } from 'next-auth/react';
import { Button } from '@/ui';

export function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <Button appearance="tertiary" onClick={() => signOut()}>
        Sign Out
      </Button>
    );
  }

  return (
    <Button appearance="primary" onClick={() => signIn()}>
      Sign In
    </Button>
  );
}
