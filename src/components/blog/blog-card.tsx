"use client";

import { BlogTable } from "@/server/db";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface BlogCardProps {
  blog: BlogTable;
}

export const BlogCard = ({ blog }: BlogCardProps) => {
  return (
    <Link href={`/blogs/${blog.id}`}>
      <div className="relative w-full cursor-pointer overflow-hidden rounded-t-xl border-l-[1px] border-r-[1px] border-t-[1px] border-gray-200 p-4 text-white">
        <div className="mb-4 text-2xl font-semibold">
          <ReactMarkdown>{blog.title}</ReactMarkdown>
        </div>

        <div className="relative max-h-[200px] overflow-hidden md:max-h-[200px]">
          <div className="prose prose-lg prose-invert max-w-none">
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
    </Link>
  );
};
