import type { Metadata } from "next";
import { Poppins } from "./fonts";

export const metadata: Metadata = {
  title: "Age Calculator App",
  description: "A simple age calculator app built with Next.js",
};

export default function fyloLandingPage({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className={`${Poppins.className} antialiased bg-gray-100`}>
        {children}
      </div>
    );
  }