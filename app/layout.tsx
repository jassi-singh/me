import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import Profile from "@/components/profile";
import Navbar from "@/components/navbar";
import ThemeButton from "@/components/theme-button";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Jaswinder Singh",
  description: "Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${inter.variable} ${spaceMono.variable} dark`} lang="en">
      <body className="font-inter text-neutral-900 dark:text-neutral-100 bg-white dark:bg-black">
        <main className="flex min-h-screen max-h-screen flex-col items-center p-8 pb-0">
          <ThemeButton />
          <div className="max-w-2xl w-full flex flex-col flex-grow overflow-y-auto">
            <Profile />

            <div className="my-8 border-b border-neutral-200 dark:border-neutral-900" />

            <Navbar />
            <div className="w-full overflow-y-auto px-4 pb-8">{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
}
