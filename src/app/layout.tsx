import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";

const poppins = Poppins({ weight: ["400"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Learn Genius - AI Course Generator",
  description: "AI Course Generator for Learners",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(poppins.className, "antialiased, min-h-screen pt-16")}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
