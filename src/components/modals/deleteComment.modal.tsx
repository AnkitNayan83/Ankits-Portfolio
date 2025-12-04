"use client";

import { useModal } from "@/hooks/useModal";
import { api } from "@/trpc/react";
import { deleteCommentSchema } from "@/zodSchemas/blogs-comment.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { X } from "lucide-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { type z } from "zod";
import { Button } from "../ui/button";
import { Form } from "../ui/form";

export const DeleteCommentModal = () => {
  const { onClose, data, type, isOpen } = useModal();
  const utils = api.useUtils();

  const form = useForm<z.infer<typeof deleteCommentSchema>>({
    resolver: zodResolver(deleteCommentSchema),
    defaultValues: {
      commentId: data?.comment?.id ?? undefined,
    },
  });

  useEffect(() => {
    if (data?.comment) {
      form.reset({
        commentId: data.comment.id,
      });
    }
  }, [data?.comment, form]);

  const deleteCommentMutation = api.blog.deleteComment.useMutation({
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

  const onSubmit = (data: z.infer<typeof deleteCommentSchema>) => {
    deleteCommentMutation.mutate(data);
  };

  const isPending = deleteCommentMutation.isPending;

  if (!isOpen || type !== "deleteComment") return null;

  return (
    <div
      onClick={() => onClose()}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 text-white"
    >
      <div
        className="relative z-[101] rounded bg-gray-900 p-8 text-center shadow-md"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => onClose()}
          className="absolute right-2 top-2 text-gray-400 transition-colors hover:text-white"
        >
          <X className="h-6 w-6" />
        </button>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex items-center justify-between gap-x-3"
          >
            <h1>Are you sure you want to delete this comment?</h1>

            <Button
              type="submit"
              className="self-end bg-red-800 hover:bg-red-600"
              disabled={isPending}
            >
              {isPending ? "deleting..." : "Delete"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};
