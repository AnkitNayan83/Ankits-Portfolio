import { z } from "zod";

export const blogsCommentSchema = z.object({
  blogId: z.number(),
  content: z.string().min(1),
});

export const commentReplySchema = z.object({
  commentId: z.number(),
  content: z.string().min(1),
});
