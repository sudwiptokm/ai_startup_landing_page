import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Startup Landing Page",
  description:
    "A landing page for an AI startup developed by Sudwipto Kumar Mondal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      style={{
        position: "relative",
      }}
    >
      <body
        className={twMerge(inter.className, "bg-black text-white antialiased")}
      >
        {children}
      </body>
    </html>
  );
}
