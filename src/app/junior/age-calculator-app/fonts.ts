import localFont from "next/font/local";

export const Poppins = localFont({
  src: [
    {
      path: "../../../../public/fonts/Poppins/Poppins-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../../../public/fonts/Poppins/Poppins-Bold.ttf",
      weight: "700",
      style: "bold",
    },
    {
      path: "../../../../public/fonts/Poppins/Poppins-ExtraBoldItalic.ttf",
      weight: "800",
      style: "extrabolditalic",
    },
  ],
  variable: "--font-poppins",
  display: "swap",
});