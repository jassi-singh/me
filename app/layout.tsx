import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/navbar";
import SiteFooter from "@/components/site-footer";
import { themeScript } from "@/components/theme-script";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Jaswinder Singh",
  description:
    "Backend engineer at Fountane. Go microservices, distributed systems, and tools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={ibmPlexMono.variable} lang="en" suppressHydrationWarning>
      <body className="font-mono">
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: themeScript() }}
        />
        <div className="shell-stagger mx-auto max-w-shell px-8 pb-[120px] pt-[60px]">
          <Navbar />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
