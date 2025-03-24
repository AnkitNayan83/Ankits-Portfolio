import { SingleBlog } from "@/app/_components/single-blog";
import { api } from "@/trpc/server";
import { type Metadata } from "next";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const id = parseInt(resolvedParams.id) || 0;

  const blog = await api.blog.getBlog({ id });

  if (!blog) {
    return {
      title: "Blog not found",
    };
  }

  const description = blog.content
    ? blog.content.substring(0, 160).replace(/[#*_`]/g, "")
    : "Blog post";
  const title = blog.title?.replace(/[#*_`]/g, "") ?? "Blog Post";

  return {
    title,
    description: description,
    openGraph: {
      title,
      description: description,
      type: "article",
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/blogs/${id}`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: description,
      images: ["https://www.ankitnaya.tech/logo.png"],
    },
  };
}

export default async function SingleBlogPage({ params }: Props) {
  const resolvedParams = await params;
  const id = parseInt(resolvedParams.id) || 0;
  const blog = await api.blog.getBlog({ id });
  return <SingleBlog blog={blog} />;
}
