"use client";

import { Button } from "@/components/ui/button";
import { CommentTable, ReplyTable } from "@/server/db";
import { api } from "@/trpc/react";
import { useState } from "react";

export const BlogComments = ({ blogId }: { blogId: number }) => {
  const {
    data: commentData,
    isLoading: commentLoading,
    error: commentError,
  } = api.blog.getComments.useQuery({ blogId }, { enabled: !!blogId });
  const [expandedComments, setExpandedComments] = useState<number[]>([]);

  const toggleCommentExpansion = (commentId: number) => {
    setExpandedComments((prev) =>
      prev.includes(commentId)
        ? prev.filter((id) => id !== commentId)
        : [...prev, commentId],
    );
  };

  const useCommentReplies = (commentId: number, isExpanded: boolean) => {
    const {
      data: replyData,
      isLoading: replyLoading,
      error: replyError,
    } = api.blog.getRepliesOnComments.useQuery(
      { commentId },
      { enabled: isExpanded },
    );

    return { replyData, replyLoading, replyError };
  };

  const CommentItem = ({ comment }: { comment: CommentTable }) => {
    const isExpanded = expandedComments.includes(comment.id);
    const { replyData, replyLoading, replyError } = useCommentReplies(
      comment.id,
      isExpanded,
    );

    return (
      <div className="mb-4 rounded-md border p-4">
        <div className="flex items-start justify-between">
          <div>
            <h4 className="font-semibold">{comment.userId}</h4>
            <p className="text-sm text-gray-500">
              {new Date(comment.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>

        <p className="my-2">{comment.content}</p>

        <Button
          variant="ghost"
          size="sm"
          onClick={() => toggleCommentExpansion(comment.id)}
          className="text-sm text-gray-600"
        >
          {isExpanded ? "Hide replies" : "Show replies"}
        </Button>

        {isExpanded && (
          <div className="ml-6 mt-4 border-l-2 border-gray-200 pl-4">
            {replyLoading && <p className="text-sm">Loading replies...</p>}
            {replyError && (
              <p className="text-sm text-red-500">Error loading replies</p>
            )}

            {replyData && replyData.length === 0 && (
              <p className="text-sm text-gray-500">No replies yet</p>
            )}

            {replyData && replyData.length > 0 && (
              <div className="space-y-3">
                {replyData.map((reply: ReplyTable) => (
                  <div key={reply.id} className="border-b pb-2 last:border-b-0">
                    <div className="flex items-start justify-between">
                      <h5 className="font-medium">{reply.userId}</h5>
                      <p className="text-xs text-gray-500">
                        {new Date(reply.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                    <p className="mt-1 text-sm">{reply.content}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="mt-8">
      <h3 className="mb-4 text-xl font-bold">Comments</h3>

      {commentLoading && <p>Loading comments...</p>}
      {commentError && <p className="text-red-500">Error loading comments</p>}

      {commentData && commentData.length === 0 && (
        <p className="text-gray-500">
          No comments yet. Be the first to comment!
        </p>
      )}

      {commentData && commentData.length > 0 && (
        <div className="space-y-4">
          {commentData.map((comment: CommentTable) => (
            <CommentItem key={comment.id} comment={comment} />
          ))}
        </div>
      )}
    </div>
  );
};
