import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { ModalProvider } from "@/providers/modal-provider";
import { TRPCReactProvider } from "@/trpc/react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Ankit Nayan | Portfolio",
  description:
    "Ankit Nayan Portfolio: Dynamic and driven Full Stack Developer with a passion for leveraging cutting-edge technologies to craft innovative solutions. Proactive in learning and adapting to emerging technologies, I thrive in fast-paced environments where I can contribute to impactful projects and drive positive change",
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
            <ModalProvider />
            <Toaster />
            {children}
            <SpeedInsights />
            <Analytics />
          </TRPCReactProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
