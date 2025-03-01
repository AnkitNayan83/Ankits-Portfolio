"use client";

import { BlogComments } from "@/app/_components/blog-comments";
import { CommentForm } from "@/app/_components/comment-form";
import { Button } from "@/components/ui/button";
import { useClientAuth } from "@/hooks/useClientAuth";
import { api } from "@/trpc/react";
import { ArrowLeft } from "lucide-react";
import Head from "next/head";
import { useParams, useRouter } from "next/navigation";
import ReactMarkDown from "react-markdown";
import remarkGfm from "remark-gfm";

const SingleBlogPage = () => {
  const router = useRouter();
  const params = useParams();
  const session = useClientAuth();

  const id = parseInt((params?.id as string) || "");

  const { data, error, isLoading } = api.blog.getBlog.useQuery(
    { id },
    {
      enabled: !!id,
    },
  );

  if (!id) {
    router.push("/blogs");
    return;
  }

  if (error) {
    return (
      <div className="flex items-center justify-center text-white">
        <div className="w-full max-w-[1024px]">
          <h1>Server down 📉😓</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center text-white">
      <Head>
        <title>{data?.title}</title>
        <meta name="description" content={data?.content || ""} />
        <meta property="og:title" content={data?.title || ""} />
        <meta property="og:description" content={data?.content || ""} />
      </Head>
      <div className="w-full max-w-[1024px] py-4">
        {isLoading ? (
          <div className="h-[calc(100vh_-_200px)] w-full animate-pulse rounded-lg bg-gray-700 p-4">
            <div className="mb-3 h-6 w-3/4 rounded bg-gray-600"></div>
            <div className="mb-2 h-[90%] w-full rounded bg-gray-600"></div>
          </div>
        ) : (
          <div className="flex flex-col space-y-4 pt-4">
            <div
              className="flex cursor-pointer items-center gap-x-3"
              onClick={() => router.push("/blogs")}
            >
              <ArrowLeft className="h-6 w-6" />
              <strong>All Blogs</strong>
            </div>
            <div className="prose prose-lg prose-invert max-w-none">
              <ReactMarkDown>{data?.title}</ReactMarkDown>
            </div>
            <div className="prose prose-lg prose-invert max-w-none">
              <ReactMarkDown remarkPlugins={[remarkGfm]}>
                {data?.content}
              </ReactMarkDown>
            </div>
            {session && session?.user?.role === "admin" && (
              <Button
                onClick={() => router.push(`/blogs/update/${data?.id}`)}
                className="w-[25%] bg-green-800 hover:bg-green-500"
              >
                Edit
              </Button>
            )}

            <div className="flex flex-col py-4">
              <CommentForm blogId={id} />
              <BlogComments blogId={id} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleBlogPage;
