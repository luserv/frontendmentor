import localFont from "next/font/local";

export const JosefinSans = localFont({
  src: [
    {
      path: "../../../../public/fonts/Josefin_Sans/JosefinSans-Regular.ttf",
      weight: "400",
      style: "regular",
    },
    {
      path: "../../../../public/fonts/Josefin_Sans/JosefinSans-Bold.ttf",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-josefinsans",
  display: "swap",
});