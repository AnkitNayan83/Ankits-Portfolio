"use client";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useClientAuth } from "@/hooks/useClientAuth";
import { api } from "@/trpc/react";
import { blogsCommentSchema } from "@/zodSchemas/blogs-comment.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { type z } from "zod";

interface CommentFormProps {
  blogId: number;
}

export const CommentForm = ({ blogId }: CommentFormProps) => {
  const session = useClientAuth();
  const utils = api.useUtils();
  const form = useForm<z.infer<typeof blogsCommentSchema>>({
    resolver: zodResolver(blogsCommentSchema),
    defaultValues: {
      blogId: blogId,
      content: "",
    },
  });

  const createCommentMutation = api.blog.commentOnBlog.useMutation({
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: () => {
      void utils.blog.getComments.invalidate({ blogId });
      form.reset();
    },
  });

  const onSubmit = (data: z.infer<typeof blogsCommentSchema>) => {
    if (!session?.user) {
      return toast.error("You need to login to comment");
    }
    createCommentMutation.mutate(data);
  };

  console.log(session);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col space-y-2"
      >
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  className="h-[150px] w-full"
                  {...field}
                  placeholder="share your thaughts 💭"
                />
              </FormControl>
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="self-end bg-green-800 hover:bg-green-600"
        >
          Comment
        </Button>
      </form>
    </Form>
  );
};
