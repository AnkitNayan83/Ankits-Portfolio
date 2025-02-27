import { blogs } from "@/server/db/schema";
import {
  createBlogSchema,
  updateBlogSchema,
} from "@/zodSchemas/create-blog.schema";
import { eq } from "drizzle-orm";
import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

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

  createBlog: protectedProcedure
    .input(createBlogSchema)
    .mutation(async ({ ctx, input }) => {
      if (ctx.session.user.role !== "admin") {
        return {
          success: false,
          message: "Unauthorized",
        };
      }
      try {
        await ctx.db.insert(blogs).values({
          title: input.title,
          content: input.content,
        });

        return {
          success: true,
          message: "Blog created successfully",
        };
      } catch (error) {
        let errMesg = "Error creating blog";

        if (error instanceof Error) {
          errMesg = error.message;
        }

        return {
          success: false,
          message: errMesg,
        };
      }
    }),

  updateBlog: protectedProcedure
    .input(updateBlogSchema)
    .mutation(async ({ ctx, input }) => {
      if (ctx.session.user.role !== "admin") {
        return {
          success: false,
          message: "Unauthorized",
        };
      }

      try {
        await ctx.db
          .update(blogs)
          .set({
            title: input.title,
            content: input.content,
          })
          .where(eq(blogs.id, input.id));

        return {
          success: true,
          message: "Blog updated successfully",
        };
      } catch (error) {
        let errMesg = "Error creating blog";

        if (error instanceof Error) {
          errMesg = error.message;
        }

        return {
          success: false,
          message: errMesg,
        };
      }
    }),
});
