import { blogs } from "@/server/db/schema";
import { eq } from "drizzle-orm";
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const blogRouter = createTRPCRouter({
  getBlogs: publicProcedure.query(async ({ ctx }) => {
    const blogs = await ctx.db.query.blogs.findMany({
      orderBy: (blogs, { desc }) => [desc(blogs.createdAt)],
    });

    return blogs ?? null;
  }),

  getBlog: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ ctx, input }) => {
      const blog = await ctx.db.query.blogs.findFirst({
        where: eq(blogs.id, input.id),
      });

      return blog ?? null;
    }),
});
