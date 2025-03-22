"use client";

import { Button } from "@/components/ui/button";
import { useModal } from "@/hooks/useModal";
import { signIn } from "next-auth/react";

export const AuthModal = () => {
  const { isOpen, type, onClose, data } = useModal();
  const handleGoogleSignIn = async () => {
    await signIn("google", {
      callbackUrl: data?.callBackUrl ?? "/blogs",
    });
  };

  if (!isOpen || type !== "auth") return null;

  return (
    <div
      onClick={() => onClose()}
      className="fixed inset-0 z-10 flex items-center justify-center bg-black/50 text-white"
    >
      <div
        className="relative rounded bg-gray-900 p-8 text-center shadow-md"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => onClose()}
          className="absolute right-2 top-2 text-gray-500 hover:text-gray-800"
        >
          ×
        </button>
        <h2 className="mb-4 text-xl font-semibold">
          Log in to interact with the blogs
        </h2>
        <Button
          className="bg-white text-black hover:bg-white"
          onClick={handleGoogleSignIn}
        >
          Sign in with Google
        </Button>
      </div>
    </div>
  );
};
