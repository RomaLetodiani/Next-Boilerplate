import { ObserverProvider } from "@/providers/observer.provider";
import { ThemeProvider } from "@/providers/theme.provider";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { PropsWithChildren } from "react";
import { Toaster } from "sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NextJS Boilerplate",
  description: "NextJS Boilerplate",
};

const RootLayout = ({ children }: PropsWithChildren) => (
  <html lang="en" suppressHydrationWarning>
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <ObserverProvider>{children}</ObserverProvider>
        <Toaster position="top-right" theme="system" richColors />
      </ThemeProvider>
    </body>
  </html>
);

export default RootLayout;
