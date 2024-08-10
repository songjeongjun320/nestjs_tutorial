import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

/* layout.txt cover the page.txt file */

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="navbar">
        {/* Link tag is same with a tag But it
        will pass the page more smooth
        If you just put <Link and enter, import will be
        added automatically */}
        <Link href="/">Home</Link>
        <Link href="/list">List</Link>
      </div>
      
      {/* page.js always be in {children} */}
      {children}</body>
    </html>
  );
}
