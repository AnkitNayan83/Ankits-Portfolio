"use client";

import { AuthModal } from "@/components/modals/auth.modal";
import { useEffect, useState } from "react";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <>
      <AuthModal />
    </>
  );
};
