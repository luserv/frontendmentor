import type { Metadata } from "next";
import { JosefinSans } from "./fonts";

export const metadata: Metadata = {
  title: "To Do App",
  description: "A simple to do app with dark mode built with Next.js",
  keywords: ["todo app", "task manager", "productivity", "next.js", "react", "typescript", "luserv", "kv", "kaentovidal"],
};

export default function TodoApp({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className={`${JosefinSans.className} antialiased`}>
        {children}
      </div>
    );
  }