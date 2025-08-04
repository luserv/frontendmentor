import localFont from "next/font/local";

export const Poppins = localFont({
  src: [
    {
      path: "../../../../public/fonts/Poppins/Poppins-Regular.ttf",
      weight: "500",
      style: "regular",
    },
    {
      path: "../../../../public/fonts/Poppins/Poppins-SemiBold.ttf",
      weight: "600",
      style: "semibold",
    },
  ],
  variable: "--font-poppins",
  display: "swap",
});