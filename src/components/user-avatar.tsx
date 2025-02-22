"use client";

import { useClientAuth } from "@/hooks/useClientAuth";
import { signOut } from "next-auth/react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export const UserAvatar = () => {
  const session = useClientAuth();

  console.log(session);

  if (!session) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Image
          src={session.user?.image || ""}
          alt="user"
          width={35}
          height={35}
          className="cursor-pointer rounded-full object-cover"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuItem
          onClick={() => {
            signOut();
          }}
        >
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
