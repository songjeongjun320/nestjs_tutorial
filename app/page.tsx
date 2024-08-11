import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Next.js Tutorial",
  description: "Learning Next.js Tutorial",
};

export default function Home() {
  return (
    <main>
      Home
      <Link href="/dashboard">Go To Dashboard</Link>
    </main>
  );
}
