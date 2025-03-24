"use client";

import { BlogComments } from "@/app/_components/blog-comments";
import { CommentForm } from "@/app/_components/comment-form";
import { Button } from "@/components/ui/button";
import { useClientAuth } from "@/hooks/useClientAuth";
import { type BlogTable } from "@/server/db";
import { Role } from "@/server/db/schema";
import { ArrowLeft } from "lucide-react";
import Head from "next/head";
import { useRouter } from "next/navigation";
import ReactMarkDown from "react-markdown";
import remarkGfm from "remark-gfm";

export const SingleBlog = ({ blog }: { blog: BlogTable | null }) => {
  const router = useRouter();
  const session = useClientAuth();

  if (!blog) {
    router.push("/blogs");
    return;
  }

  return (
    <div className="flex justify-center px-3 text-white">
      <Head>
        <title>{blog?.title}</title>
        <meta name="description" content={blog?.content ?? ""} />
        <meta property="og:title" content={blog?.title ?? ""} />
        <meta property="og:description" content={blog?.content ?? ""} />
      </Head>
      <div className="w-full max-w-[1024px] py-4">
        <div className="flex flex-col space-y-4 pt-4">
          <div
            className="flex cursor-pointer items-center gap-x-3"
            onClick={() => router.push("/blogs")}
          >
            <ArrowLeft className="h-6 w-6" />
            <strong>All Blogs</strong>
          </div>
          <div className="prose prose-lg prose-invert max-w-none">
            <ReactMarkDown>{blog?.title}</ReactMarkDown>
          </div>
          <div className="prose prose-lg prose-invert max-w-none">
            <ReactMarkDown remarkPlugins={[remarkGfm]}>
              {blog?.content}
            </ReactMarkDown>
          </div>
          {session && session?.user?.role === Role.ADMIN && (
            <Button
              onClick={() => router.push(`/blogs/update/${blog.id}`)}
              className="w-[25%] bg-green-800 hover:bg-green-500"
            >
              Edit
            </Button>
          )}

          <div className="flex flex-col py-4">
            <CommentForm blogId={blog.id} />
            <BlogComments blogId={blog.id} />
          </div>
        </div>
      </div>
    </div>
  );
};
