"use client";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useClientAuth } from "@/hooks/useClientAuth";
import { useModal } from "@/hooks/useModal";
import { api } from "@/trpc/react";
import { commentReplySchema } from "@/zodSchemas/blogs-comment.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { type z } from "zod";

interface CommentFormProps {
  commentId: number;
  blogId: number;
  onReplySuccess: () => void;
}

export const ReplyForm = ({
  blogId,
  commentId,
  onReplySuccess,
}: CommentFormProps) => {
  const session = useClientAuth();
  const utils = api.useUtils();
  const { onOpen } = useModal();
  const form = useForm<z.infer<typeof commentReplySchema>>({
    resolver: zodResolver(commentReplySchema),
    defaultValues: {
      commentId,
      content: "",
    },
  });

  const createReplyMutation = api.blog.replyOnComment.useMutation({
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: () => {
      void utils.blog.getRepliesOnComments.invalidate({ commentId });
      onReplySuccess();
      form.reset();
    },
  });

  const onSubmit = (data: z.infer<typeof commentReplySchema>) => {
    if (!session?.user) {
      onOpen("auth", { callBackUrl: `/blogs/${blogId}` });
      return;
    }
    createReplyMutation.mutate(data);
  };

  const isPending = createReplyMutation.isPending;

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full items-center gap-4"
      >
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input {...field} placeholder="reply to this comment 🗣️" />
              </FormControl>
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="self-end bg-green-800 hover:bg-green-600"
          disabled={isPending}
        >
          {isPending ? "Replying..." : "Reply"}
        </Button>
      </form>
    </Form>
  );
};
