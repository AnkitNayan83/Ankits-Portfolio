"use client";

import NotFound from "@/app/_components/not-found";
import { useClientAuth } from "@/hooks/useClientAuth";
import { Role } from "@/server/db/schema";

export default function AdminLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = useClientAuth();
  return (
    <>
      {session && session?.user?.role === Role.ADMIN ? (
        children
      ) : (
        <div>
          <NotFound />
        </div>
      )}{" "}
    </>
  );
}
