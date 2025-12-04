"use client";

import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { useModal } from "@/hooks/useModal";
import { api } from "@/trpc/react";
import { editCommentSchema } from "@/zodSchemas/blogs-comment.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { X } from "lucide-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { type z } from "zod";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

export const EditCommentModal = () => {
  const { onClose, data, type, isOpen } = useModal();
  const utils = api.useUtils();

  const form = useForm<z.infer<typeof editCommentSchema>>({
    resolver: zodResolver(editCommentSchema),
    defaultValues: {
      content: data?.comment?.content ?? "",
      commentId: data?.comment?.id ?? undefined,
    },
  });

  useEffect(() => {
    if (data?.comment) {
      form.reset({
        content: data.comment.content,
        commentId: data.comment.id,
      });
    }
  }, [data?.comment, form.reset]);

  const editCommentMutation = api.blog.editComment.useMutation({
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: () => {
      void utils.blog.getComments.invalidate({
        blogId: data?.comment?.blogId ?? undefined,
      });
      onClose();
    },
  });

  const onSubmit = (data: z.infer<typeof editCommentSchema>) => {
    editCommentMutation.mutate(data);
  };

  const isPending = editCommentMutation.isPending;

  if (!isOpen || type !== "editComment") return null;

  return (
    <div
      onClick={() => onClose()}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 text-white"
    >
      <div
        className="relative z-[101] w-full max-w-[500px] rounded bg-gray-900 p-8 text-center shadow-md"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => onClose()}
          className="absolute right-2 top-2 text-gray-400 hover:text-white transition-colors"
        >
          <X className="h-6 w-6" />
        </button>
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
                    <Textarea className="h-[150px] w-full" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="self-end bg-green-800 hover:bg-green-600"
              disabled={isPending}
            >
              {isPending ? "Editing..." : "Edit"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};
