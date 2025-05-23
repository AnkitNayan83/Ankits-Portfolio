import { type CommentTable, type ReplyTable } from "@/server/db";
import { create } from "zustand";

export type ModalType =
  | "auth"
  | "editComment"
  | "deleteComment"
  | "deleteReply"
  | "editReply";

interface ModalData {
  callBackUrl?: string;
  comment?: CommentTable;
  reply?: ReplyTable;
}

interface ModalStore {
  type: ModalType | null;
  data: ModalData;
  isOpen: boolean;
  onOpen: (type: ModalType, data: ModalData) => void;
  onClose: () => void;
}

export const useModal = create<ModalStore>((set) => ({
  type: null,
  data: {},
  isOpen: false,
  onOpen: (type, data = {}) => set({ type, isOpen: true, data }),
  onClose: () => set({ type: null, isOpen: false }),
}));
