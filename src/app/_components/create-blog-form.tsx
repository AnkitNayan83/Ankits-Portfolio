"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { BlogTable } from "@/server/db";
import { api } from "@/trpc/react";
import { createBlogSchema } from "@/zodSchemas/create-blog.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import MDEditor from "@uiw/react-md-editor";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { type z } from "zod";

interface CreateBlogFormProps {
  type: "create" | "update";
  blog?: BlogTable;
}

export const CreateBlogForm = ({ type, blog }: CreateBlogFormProps) => {
  const router = useRouter();
  const utils = api.useUtils();

  const form = useForm<z.infer<typeof createBlogSchema>>({
    resolver: zodResolver(createBlogSchema),
    defaultValues: {
      title: blog?.title ?? "",
      content: blog?.content ?? "",
    },
  });

  const createBlogMutation = api.blog.createBlog.useMutation({
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: () => {
      void utils.blog.getBlogs.invalidate();
      router.push("/blogs");
      form.reset();
    },
  });

  const updateBlogMutation = api.blog.updateBlog.useMutation({
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: () => {
      void utils.blog.getBlogs.invalidate();
      void utils.blog.getBlog.invalidate({ id: blog?.id });
      router.push("/blogs");
      form.reset();
    },
  });

  const onSubmit = (data: z.infer<typeof createBlogSchema>) => {
    if (type === "create") {
      createBlogMutation.mutate(data);
    } else if (type === "update") {
      if (blog) updateBlogMutation.mutate({ id: blog?.id, ...data });
    } else {
      return;
    }
  };
  const isLoading = createBlogMutation.isPending;

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-16 space-y-6 text-white"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Title<span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input disabled={isLoading} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Content<span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <MDEditor
                  value={field.value}
                  onChange={(value) => field.onChange(value)}
                  height={500}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="bg-green-800 hover:bg-green-600">
          {isLoading ? "Loading..." : type === "create" ? "Create" : "Update"}
        </Button>
      </form>
    </Form>
  );
};
