import { CreateBlogForm } from "@/app/_components/create-blog-form";
import { auth } from "@/server/auth";

const CreateBlog = async () => {
  const session = await auth();
  if (session?.user?.role !== "admin") {
    return <div className="text-red-500">Unauthorized</div>;
  }
  return (
    <div className="flex w-full justify-center">
      <div className="w-full max-w-[848px]">
        <CreateBlogForm type="create" />
      </div>
    </div>
  );
};

export default CreateBlog;
