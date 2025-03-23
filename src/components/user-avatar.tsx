"use client";

import { useClientAuth } from "@/hooks/useClientAuth";
import { useModal } from "@/hooks/useModal";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export const UserAvatar = () => {
  const session = useClientAuth();
  const { onOpen, type } = useModal();

  const handleLogin = () => {
    onOpen("auth", { callBackUrl: `/` });
    return;
  };

  if (!session) {
    return <Button onClick={handleLogin}>Login</Button>;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Image
          src={session.user?.image ?? ""}
          alt="user"
          width={35}
          height={35}
          className="cursor-pointer rounded-full object-cover"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuItem
          onClick={() => {
            void signOut();
          }}
        >
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
