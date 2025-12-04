import { CreateBlogForm } from "@/app/_components/create-blog-form";
import { auth } from "@/server/auth";
import { Role } from "@/server/db/schema";

const CreateBlog = async () => {
  const session = await auth();
  if (session?.user?.role !== Role.ADMIN) {
    return <div className="text-red-500">Unauthorized</div>;
  }
  return (
    <div className="flex w-full justify-center min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white">
      <div className="w-full max-w-[848px] p-4">
        <CreateBlogForm type="create" />
      </div>
    </div>
  );
};

export default CreateBlog;
