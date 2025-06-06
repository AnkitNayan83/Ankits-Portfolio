"use client";

import { type BlogTable } from "@/server/db";
import { useRouter } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface BlogCardProps {
  blog: BlogTable;
}

export const BlogCard = ({ blog }: BlogCardProps) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/blogs/${blog.id}`)}
      className="relative mb-5 w-full cursor-pointer overflow-hidden rounded-t-xl bg-gradient-to-br from-[#151d2f] to-[#1f2937] p-0 text-white"
    >
      <div className="mb-4 p-3 text-2xl font-semibold">
        <ReactMarkdown>{blog.title}</ReactMarkdown>
      </div>

      <div className="relative max-h-[200px] overflow-hidden md:max-h-[200px]">
        <div className="prose prose-lg prose-invert max-w-none px-3">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {blog.content}
          </ReactMarkdown>
        </div>

        <div className="absolute bottom-0 h-16 w-full bg-gradient-to-t from-[#111827] to-transparent"></div>
      </div>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
        <span className="rounded-lg bg-transparent px-4 py-2 font-extrabold text-white hover:underline">
          Click here to view more
        </span>
      </div>
    </div>
  );
};
