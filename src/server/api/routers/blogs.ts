import {
  blogs,
  comments,
  likes,
  replies,
  Role,
  users,
} from "@/server/db/schema";
import {
  blogsCommentSchema,
  commentReplySchema,
  deleteCommentSchema,
  deleteReplySchema,
  editCommentSchema,
  editReplySchema,
} from "@/zodSchemas/blogs-comment.schema";
import {
  createBlogSchema,
  updateBlogSchema,
} from "@/zodSchemas/create-blog.schema";
import { and, desc, eq } from "drizzle-orm";
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
      if (ctx.session.user.role !== Role.ADMIN) {
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
      if (ctx.session.user.role !== Role.ADMIN) {
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

  likeBlog: protectedProcedure
    .input(
      z.object({
        blogId: z.number(),
        type: z.enum(["like", "unlike"]),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      if (input.type === "like") {
        ctx.db.insert(likes).values({
          blogId: input.blogId,
          userId: ctx.session.user.id,
        });
        return {
          success: true,
          message: "Blog liked",
        };
      } else if (input.type === "unlike") {
        ctx.db
          .delete(likes)
          .where(
            and(
              eq(likes.blogId, input.blogId),
              eq(likes.userId, ctx.session.user.id),
            ),
          );
        return {
          success: true,
          message: "Blog unliked",
        };
      } else {
        return {
          success: false,
          message: "Invalid type",
        };
      }
    }),

  commentOnBlog: protectedProcedure
    .input(blogsCommentSchema)
    .mutation(async ({ ctx, input }) => {
      await ctx.db.insert(comments).values({
        blogId: input.blogId,
        userId: ctx.session.user.id,
        content: input.content,
      });

      return {
        success: true,
        message: "Comment added",
      };
    }),

  getComments: publicProcedure
    .input(z.object({ blogId: z.number() }))
    .query(async ({ ctx, input }) => {
      const blogComments = await ctx.db
        .select({
          comment: comments,
          user: {
            name: users.name,
            id: users.id,
            image: users.image,
          },
        })
        .from(comments)
        .innerJoin(users, eq(users.id, comments.userId))
        .where(eq(comments.blogId, input.blogId))
        .orderBy(desc(comments.createdAt))
        .execute();

      const commentsWithUser = blogComments.map((comment) => ({
        ...comment.comment,
        user: comment.user,
      }));

      return commentsWithUser ?? null;
    }),

  editComment: protectedProcedure
    .input(editCommentSchema)
    .mutation(async ({ ctx, input }) => {
      await ctx.db
        .update(comments)
        .set({
          content: input.content,
        })
        .where(
          and(
            eq(comments.id, input.commentId),
            eq(comments.userId, ctx.session.user.id),
          ),
        );

      return {
        success: true,
        message: "Comment updated",
      };
    }),

  deleteComment: protectedProcedure
    .input(deleteCommentSchema)
    .mutation(async ({ ctx, input }) => {
      await ctx.db
        .delete(comments)
        .where(
          and(
            eq(comments.id, input.commentId),
            eq(comments.userId, ctx.session.user.id),
          ),
        );

      return {
        success: true,
        message: "Comment deleted",
      };
    }),

  replyOnComment: protectedProcedure
    .input(commentReplySchema)
    .mutation(async ({ ctx, input }) => {
      await ctx.db.insert(replies).values({
        commentId: input.commentId,
        userId: ctx.session.user.id,
        content: input.content,
      });

      return {
        success: true,
        message: "Reply added",
      };
    }),
  getRepliesOnComments: publicProcedure
    .input(z.object({ commentId: z.number() }))
    .query(async ({ ctx, input }) => {
      const commentReplies = await ctx.db
        .select({
          reply: replies,
          user: {
            name: users.name,
            id: users.id,
            image: users.image,
          },
        })
        .from(replies)
        .innerJoin(users, eq(users.id, replies.userId))
        .where(eq(replies.commentId, input.commentId))
        .orderBy(desc(replies.createdAt))
        .execute();

      const commentRepliesWithUser = commentReplies.map((reply) => ({
        ...reply.reply,
        user: reply.user,
      }));

      return commentRepliesWithUser ?? null;
    }),

  editCommentReply: protectedProcedure
    .input(editReplySchema)
    .mutation(async ({ ctx, input }) => {
      await ctx.db
        .update(replies)
        .set({
          content: input.content,
        })
        .where(
          and(
            eq(replies.id, input.replyId),
            eq(replies.userId, ctx.session.user.id),
          ),
        );

      return {
        success: true,
        message: "Reply updated",
      };
    }),

  deleteCommentReply: protectedProcedure
    .input(deleteReplySchema)
    .mutation(async ({ ctx, input }) => {
      await ctx.db
        .delete(replies)
        .where(
          and(
            eq(replies.id, input.replyId),
            eq(replies.userId, ctx.session.user.id),
          ),
        );

      return {
        success: true,
        message: "Reply deleted",
      };
    }),
});
