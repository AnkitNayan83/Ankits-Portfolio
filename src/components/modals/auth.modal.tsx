"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

interface AuthModalProps {
  toggleAuthModal: () => void;
}

export const AuthModal = ({ toggleAuthModal }: AuthModalProps) => {
  const handleGoogleSignIn = async () => {
    await signIn("google", {
      callbackUrl: "/blogs",
    });
  };

  return (
    <div
      onClick={toggleAuthModal}
      className="fixed inset-0 flex items-center justify-center bg-black/50"
    >
      <div
        className="relative rounded bg-white p-8 text-center shadow-md"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={toggleAuthModal}
          className="absolute right-2 top-2 text-gray-500 hover:text-gray-800"
        >
          ×
        </button>
        <h2 className="mb-4 text-xl font-semibold">
          Log in to react to this blog
        </h2>
        <Button onClick={handleGoogleSignIn}>Sign in with Google</Button>
      </div>
    </div>
  );
};
