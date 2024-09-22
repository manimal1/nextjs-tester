"use client";
import { createPostAction } from "@/app/actions";
import { Input, TextArea } from "@/hook-form";
import { Button, Container } from "@/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  title: z.string().refine((value) => !!value, { message: "Title is required", path: ["title"] }),
  content: z.string().refine((value) => !!value, { message: "Content is required", path: ["content"] }),
});

type FormSchema = z.infer<typeof schema>;

export function CreatePostForm() {
  const { data: session } = useSession();

  const methods = useForm<FormSchema>({
    defaultValues: {
      title: "",
      content: "",
    },
    resolver: zodResolver(schema),
  });

  const {
    handleSubmit,
    formState: { isSubmitting, isValidating, isValid },
    reset,
  } = methods;

  const onSubmit: SubmitHandler<FormSchema> = async (data) => {
    try {
      schema.parse(data);

      if (!session?.user) {
        throw new Error("User not found");
      }

      await createPostAction({
        title: data.title,
        content: data.content,
        authorId: session.user.id,
        path: "/profile",
      });

      reset();
    } catch (error) {
      console.error("Form data validation failed:", error);
    }
  };

  const isLoading = isSubmitting || isValidating;
  const isDisabled = isLoading || !isValid;

  return (
    <Container className="bg-base-300 rounded-lg">
      <h2 className="title-lg mb-8">Create a new post</h2>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input name="title" label="Post Title" placeholder="title" />
          <TextArea name="content" label="Post Content" placeholder="Post content" />
          <div className="flex justify-end mt-6 w-full">
            <Button type="submit" disabled={isDisabled} appearance="primary" loading={isLoading}>
              Create Post
            </Button>
          </div>
        </form>
      </FormProvider>
    </Container>
  );
}
