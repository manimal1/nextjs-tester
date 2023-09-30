'use server';

import { getUserByEmail } from '@/queries';
import { revalidatePath } from 'next/cache';

export async function getUserByEmailAction(path: string, userEmail?: string | null) {
  if (!userEmail) {
    throw new Error('No email provided');
  }

  const user = await getUserByEmail(userEmail);
  revalidatePath(path);

  return user;
}
