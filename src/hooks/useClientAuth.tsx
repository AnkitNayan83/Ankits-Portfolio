"use client";

import { useSession } from "next-auth/react";

export const useClientAuth = () => {
  const { data: session } = useSession();

  return session;
};
