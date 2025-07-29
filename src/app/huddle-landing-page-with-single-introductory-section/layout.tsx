import type { Metadata } from "next";
import { Poppins } from "./fonts";

export const metadata: Metadata = {
  title: "huddle-landing-page",
  description: "huddle landing page with single introductory section",
};

export default function OrderSummaryComponentLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className={Poppins.className}>
        {children}
      </div>
    );
  }
