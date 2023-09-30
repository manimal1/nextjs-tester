'use server';

import { createPost } from '@/queries';
import { revalidatePath } from 'next/cache';

export async function createPostAction({
  title,
  content,
  authorId,
  path,
}: {
  title: string;
  content: string;
  authorId?: string | null;
  path: string;
}) {
  if (!authorId) {
    throw new Error('No authorId provided');
  }

  await createPost({ title, content, authorId });
  revalidatePath(path);
}
