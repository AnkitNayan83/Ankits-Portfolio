import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "@/trpc/react";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Ankit Nayan | Portfolio",
  description:
    "Dynamic and driven Full Stack Developer with a passion for leveraging cutting-edge technologies to craft innovative solutions. Proactive in learning and adapting to emerging technologies, I thrive in fast-paced environments where I can contribute to impactful projects and drive positive change",
  icons: [{ rel: "icon", url: "/logo.png" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <SessionProvider>
          <TRPCReactProvider>
            <Toaster />
            {children}
          </TRPCReactProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
