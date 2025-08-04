import type { Metadata } from "next";
import { Poppins } from "./fonts";

export const metadata: Metadata = {
  title: "fylo landing page",
  description: "fylo landing page with two column layout",
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