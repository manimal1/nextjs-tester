"use client";
import { Button } from "@/ui";
import { signIn, signOut, useSession } from "next-auth/react";

export function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <Button appearance="secondary" onClick={() => signOut()}>
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
