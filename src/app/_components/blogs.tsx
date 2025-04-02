"use client";

import { BlogCard } from "@/components/blog/blog-card";
import { api } from "@/trpc/react";

export const Blogs = () => {
  const { data, error, isLoading } = api.blog.getBlogs.useQuery();

  if (error) {
    return (
      <div className="flex h-[90vh] w-full items-center justify-center">
        <span className="text-2xl font-bold text-white">Server Down 📉😓</span>
      </div>
    );
  }

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-[848px] overflow-y-auto p-4">
        {isLoading ? (
          // Skeleton Loader
          <div className="space-y-6">
            {Array.from({ length: 3 }, (_, i) => (
              <div
                key={i}
                className="h-[200px] w-full animate-pulse rounded-lg bg-gray-700 p-4"
              >
                <div className="mb-3 h-6 w-3/4 rounded bg-gray-600"></div>
                <div className="mb-2 h-4 w-full rounded bg-gray-600"></div>
                <div className="mb-2 h-4 w-5/6 rounded bg-gray-600"></div>
                <div className="h-4 w-2/3 rounded bg-gray-600"></div>
              </div>
            ))}
          </div>
        ) : (
          // Blog Cards
          <div className="flex flex-col gap-y-4">
            {data?.map((blog) => <BlogCard key={blog.id} blog={blog} />)}
          </div>
        )}
      </div>
    </div>
  );
};
