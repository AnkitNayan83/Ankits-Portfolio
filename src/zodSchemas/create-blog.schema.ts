import { z } from "zod";

export const createBlogSchema = z.object({
  title: z.string().min(3).max(255),
  content: z.string().min(3),
});

export const updateBlogSchema = z.object({
  id: z.number(),
  title: z.string().min(3).max(255),
  content: z.string().min(3),
});
