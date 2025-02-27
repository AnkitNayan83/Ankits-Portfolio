import { z } from "zod";

export const blogsCommentSchema = z.object({
  blogId: z.string().uuid(),
  userId: z.string().uuid(),
  content: z.string().min(1),
});
