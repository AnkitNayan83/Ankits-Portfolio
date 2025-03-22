"use client";

import { AuthModal } from "@/components/modals/auth.modal";
import { DeleteCommentModal } from "@/components/modals/deleteComment.modal";
import { DeleteReplyModal } from "@/components/modals/deleteReply.modal";
import { EditCommentModal } from "@/components/modals/editComment.modal";
import { EditReplyModal } from "@/components/modals/editReply.modal";
import { useEffect, useState } from "react";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <AuthModal />
      <EditCommentModal />
      <EditReplyModal />
      <DeleteCommentModal />
      <DeleteReplyModal />
    </>
  );
};
