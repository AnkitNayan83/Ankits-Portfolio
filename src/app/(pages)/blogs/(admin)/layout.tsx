"use client";

import NotFound from "@/app/_components/not-found";
import { useClientAuth } from "@/hooks/useClientAuth";
import { useRouter } from "next/navigation";

export default function AdminLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = useClientAuth();
  const router = useRouter();
  return (
    <>
      {session && session?.user?.role === "admin" ? (
        children
      ) : (
        <div>
          <NotFound />
        </div>
      )}{" "}
    </>
  );
}
