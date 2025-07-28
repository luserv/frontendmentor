import type { Metadata } from "next";
import localFont from "next/font/local";

export const redHatDisplay = localFont({
    src: [
      {
        path: "../../../public/fonts/Red_Hat_Display/RedHatDisplay-Medium.ttf",
        weight: "500",
        style: "medium",
      },
      {
        path: "../../../public/fonts/Red_Hat_Display/RedHatDisplay-Bold.ttf",
        weight: "700",
        style: "bold",
      },
      {
        path: "../../../public/fonts/Red_Hat_Display/RedHatDisplay-Black.ttf",
        weight: "900",
        style: "black",
      },
    ],
    variable: "--font-red-hat-display",
    display: "swap",
  });

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
      <div className={`${redHatDisplay.variable}`}>
        {children}
      </div>
    );
  }
