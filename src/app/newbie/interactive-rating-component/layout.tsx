import type { Metadata } from "next";
import { Overpass } from "./fonts";

export const metadata: Metadata = {
  title: "interactive rate component",
  description: "interactive rate component",
};

export default function interactiveRatingComponent({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className={`${Overpass.className} antialiased bg-gray-100`}>
        {children}
      </div>
    );
  }