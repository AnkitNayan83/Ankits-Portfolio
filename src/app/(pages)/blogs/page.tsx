import { Blogs } from "@/app/_components/blogs";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Ankit Nayan | Blogs",
  description:
    "Browse all blogs on Ankit's blogs covering all the technology related stuffs. Find expert insights, actionable tips, and the latest trends to stay informed and inspired. Read now!",
};

const BlogPage = () => {
  return (
    <>
      <Blogs />
    </>
  );
};

export default BlogPage;
