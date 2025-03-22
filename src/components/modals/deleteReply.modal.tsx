"use client";

import { useModal } from "@/hooks/useModal";

export const DeleteReplyModal = () => {
  const { isOpen, type } = useModal();

  if (!isOpen || type !== "deleteReply") return null;

  return (
    <div>
      <h1>test</h1>
    </div>
  );
};
