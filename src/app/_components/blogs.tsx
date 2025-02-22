"use client";

import { AuthModal } from "@/components/modals/auth.modal";
import { useClientAuth } from "@/hooks/useClientAuth";
import { useState } from "react";

export const Blogs = () => {
  const session = useClientAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);

  const toggleAuthModal = () => setShowAuthModal((prev) => !prev);

  return (
    <div className="flex justify-center">
      <div
        onClick={toggleAuthModal}
        className="mt-6 w-full max-w-[848px] rounded-lg border-2 border-white"
      >
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ea
          eaque aspernatur asperiores eos pariatur libero non aperiam molestiae
          repudiandae soluta in hic ipsa, aliquam animi molestias ipsum delectus
          maiores!
        </p>
      </div>
      {showAuthModal && <AuthModal toggleAuthModal={toggleAuthModal} />}
    </div>
  );
};
