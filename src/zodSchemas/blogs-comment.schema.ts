import { z } from "zod";

export const blogsCommentSchema = z.object({
  blogId: z.number(),
  content: z.string().min(1),
});

export const commentReplySchema = z.object({
  commentId: z.number(),
  content: z.string().min(1),
});

export const editCommentSchema = z.object({
  commentId: z.number(),
  content: z.string().min(1),
});

export const deleteCommentSchema = z.object({
  commentId: z.number(),
});

export const editReplySchema = z.object({
  replyId: z.number(),
  content: z.string().min(1),
});

export const deleteReplySchema = z.object({
  replyId: z.number(),
});
