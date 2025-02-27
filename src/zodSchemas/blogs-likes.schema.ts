import { z } from "zod";

export const blogsLikesSchema = z.object({
  blogId: z.string().uuid(),
  userId: z.string().uuid(),
});
