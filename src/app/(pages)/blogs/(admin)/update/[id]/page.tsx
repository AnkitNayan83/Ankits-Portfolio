import { CreateBlogForm } from "@/app/_components/create-blog-form";
import { api } from "@/trpc/server";

interface UpdatePageProps {
  params: Promise<{ id: string }>;
}

const UpdatePage = async ({ params }: UpdatePageProps) => {
  const blogId = parseInt((await params).id);
  const blog = await api.blog.getBlog({ id: blogId });

  if (!blog) return <span>Blog not found</span>;
  return (
    <div className="flex justify-center min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white">
      <div className="w-full max-w-[1024px] p-4">
        <CreateBlogForm type="update" blog={blog} />
      </div>
    </div>
  );
};

export default UpdatePage;
