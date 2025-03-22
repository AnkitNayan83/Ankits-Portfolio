"use client";

import { Button } from "@/components/ui/button";
import { type CommentWithUser } from "@/server/db";
import { api } from "@/trpc/react";
import { Loader2, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { ReplyForm } from "./reply-form";

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
      refetch,
    } = api.blog.getRepliesOnComments.useQuery(
      { commentId },
      {
        enabled: isExpanded,
        refetchInterval: isExpanded ? 10000 : false,
      },
    );

    return {
      replyData,
      replyLoading,
      replyError,
      refetchReplies: refetch,
    };
  };

  const CommentItem = ({
    comment,
    blogId,
  }: {
    comment: CommentWithUser;
    blogId: number;
  }) => {
    const [showReplyForm, setShowReplyForm] = useState(false);
    const isExpanded = expandedComments.includes(comment.id);
    const { replyData, replyLoading, replyError } = useCommentReplies(
      comment.id,
      isExpanded,
    );

    return (
      <div className="mb-4 w-full rounded-md bg-black/50 p-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center justify-between">
            <div className="flex items-start gap-2">
              <Image
                src={comment.user.image ?? ""}
                alt={`${comment.user.name}'s avatar`}
                width={30}
                height={30}
                className="rounded-full"
              />
              <div className="flex flex-col">
                <h4 className="font-semibold">{comment.user.name}</h4>
                <p className="text-sm text-gray-500">
                  {new Date(comment.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        </div>

        <p className="my-2">{comment.content}</p>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowReplyForm((prev) => !prev)}
            className="text-sm text-gray-600"
          >
            {showReplyForm ? (
              <>
                <X className="mr-1 h-4 w-4" />
                <span>Cancel</span>
              </>
            ) : (
              "Reply"
            )}
          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => toggleCommentExpansion(comment.id)}
            className="text-sm text-gray-600"
          >
            {isExpanded ? "Hide replies" : "Show replies"}
          </Button>
        </div>

        {showReplyForm && (
          <div className="mt-2 w-full">
            <ReplyForm
              commentId={comment.id}
              blogId={blogId}
              onReplySuccess={() => {
                setShowReplyForm(false);
                if (!isExpanded) toggleCommentExpansion(comment.id);
              }}
            />
          </div>
        )}

        {isExpanded && (
          <div className="ml-6 mt-4 border-l-2 border-gray-200 pl-4">
            {replyLoading && (
              <p className="text-sm">
                <Loader2 className="inline-block h-4 w-4 animate-spin" />
              </p>
            )}
            {replyError && (
              <p className="text-sm text-red-500">Error loading replies</p>
            )}

            {replyData && replyData.length === 0 && (
              <p className="text-sm text-gray-500">No replies yet 📪</p>
            )}

            {replyData && replyData.length > 0 && (
              <div className="space-y-3">
                {replyData.map((reply) => (
                  <div key={reply.id} className="border-b pb-2 last:border-b-0">
                    <div className="flex items-start gap-2">
                      {reply.user ? (
                        <>
                          <Image
                            src={reply.user.image ?? "/default-avatar.png"}
                            alt={`${reply.user.name}'s avatar`}
                            width={24}
                            height={24}
                            className="rounded-full"
                          />
                          <div>
                            <div className="flex items-baseline gap-2">
                              <h5 className="font-medium">{reply.user.name}</h5>
                              <p className="text-xs text-gray-500">
                                {new Date(reply.createdAt).toLocaleDateString()}
                              </p>
                            </div>
                            <p className="mt-1 text-sm">{reply.content}</p>
                          </div>
                        </>
                      ) : (
                        <div>
                          <div className="flex items-baseline gap-2">
                            <h5 className="font-medium">User {reply.userId}</h5>
                            <p className="text-xs text-gray-500">
                              {new Date(reply.createdAt).toLocaleDateString()}
                            </p>
                          </div>
                          <p className="mt-1 text-sm">{reply.content}</p>
                        </div>
                      )}
                    </div>
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
          {commentData.map((comment: CommentWithUser) => (
            <CommentItem key={comment.id} comment={comment} blogId={blogId} />
          ))}
        </div>
      )}
    </div>
  );
};
