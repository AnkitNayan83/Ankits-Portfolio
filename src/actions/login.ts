"use server";

import { signIn } from "@/server/auth";

enum ProviderEnum {
  GOOGLE = "google",
  GITHUB = "github",
}

export const login = async (provider: ProviderEnum) => {
  try {
    await signIn(provider, {
      callbackUrl: `/blogs`,
    });
  } catch (error) {
    console.log(error);
  }
};
