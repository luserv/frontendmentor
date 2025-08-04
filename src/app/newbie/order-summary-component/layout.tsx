import type { Metadata } from "next";
import { redHatDisplay } from "./fonts";

export const metadata: Metadata = {
  title: "Order Summary Component",
  description: "Order Summary Component",
};

export default function OrderSummaryComponentLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className={redHatDisplay.className}>
        {children}
      </div>
    );
  }
