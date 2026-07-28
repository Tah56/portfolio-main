import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tanzim Ahmed | Junior Frontend Developer",
  description:
    "Portfolio of Tanzim Ahmed – Junior Frontend Developer passionate about building modern, responsive web experiences with React, Next.js, and Tailwind CSS.",
  keywords: [
    "Junior Frontend Developer",
    "React",
    "Next.js",
    "Portfolio",
    "Web Developer",
    "Tanzim Ahmed",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen">{children}</body>
    </html>
  );
}
