"use client";

import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { useModal } from "@/hooks/useModal";
import { api } from "@/trpc/react";
import { editReplySchema } from "@/zodSchemas/blogs-comment.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Textarea from "node_modules/@uiw/react-md-editor/esm/components/TextArea/Textarea";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { type z } from "zod";
import { Button } from "../ui/button";

export const EditReplyModal = () => {
  const { onClose, data, type, isOpen } = useModal();
  const utils = api.useUtils();

  const form = useForm<z.infer<typeof editReplySchema>>({
    resolver: zodResolver(editReplySchema),
    defaultValues: {
      content: data?.reply?.content ?? "",
      replyId: data?.reply?.id ?? undefined,
    },
  });

  const editReplyMutation = api.blog.editCommentReply.useMutation({
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: () => {
      void utils.blog.getRepliesOnComments.invalidate({
        commentId: data?.reply?.commentId ?? undefined,
      });
      onClose();
    },
  });

  const onSubmit = (data: z.infer<typeof editReplySchema>) => {
    editReplyMutation.mutate(data);
  };

  const isPending = editReplyMutation.isPending;

  if (!isOpen || type !== "editReply") return null;

  return (
    <div
      onClick={() => onClose()}
      className="fixed inset-0 flex items-center justify-center bg-black/50 text-white"
    >
      <div
        className="relative rounded bg-gray-900 p-8 text-center shadow-md"
        onClick={(e) => e.stopPropagation()}
      >
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
              disabled={isPending}
            >
              {isPending ? "Posting..." : "Post"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};
