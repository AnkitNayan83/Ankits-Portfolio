import { CreateBlogForm } from "@/app/_components/create-blog-form";
import { api } from "@/trpc/server";

interface UpdatePageProps {
  params: {
    id: string;
  };
}

const UpdatePage = async ({ params }: UpdatePageProps) => {
  const blogId = parseInt(params.id);
  const blog = await api.blog.getBlog({ id: blogId });

  if (!blog) return <span>Blog not found</span>;
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-[1024px]">
        <CreateBlogForm type="update" blog={blog} />;
      </div>
    </div>
  );
};

export default UpdatePage;
