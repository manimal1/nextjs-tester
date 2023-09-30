// 'use client';


// import { createPostAction, getUserByEmailAction } from '@/app/actions';
// import { useSession } from 'next-auth/react';
// import { z } from 'zod';

// const schema = z.object({
//   title: z.string().refine((value) => !!value, 'Title is required'),
//   content: z.string().refine((value) => !!value, 'Content is required'),
// });

// export function CreatePostForm() {
//   const { data: session } = useSession();

//   const form = useForm({
//     defaultValues: {
//       title: '',
//       content: '',
//     },
//     onSubmit: async (values, helpers) => {
//       try {
//         const user = await getUserByEmailAction('/profile', session?.user?.email);

//         if (!user) {
//           throw new Error('User not found');
//         }

//         await createPostAction({
//           title: values.title,
//           content: values.content,
//           authorId: user?.id,
//           path: '/profile',
//         });

//         helpers.reset();
//       } catch (error) {
//         return helpers.setError('form', { message: `${error}` });
//       }
//     },
//     schema,
//   });

//   const { formState } = form;
//   const isDisabled = formState.isSubmitting || formState.isValidating;

//   return (
//     <Form form={form}>
//       <Input name="title" label="Post Title" placeholder="title" />
//       <Textarea name="content" label="Post Content" placeholder="Post content" />
//       <FormErrorMessage />
//       <SubmitButton disabled={isDisabled} appearance="primary">
//         Create Post
//       </SubmitButton>
//     </Form>
//   );
// }
