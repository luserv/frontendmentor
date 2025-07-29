import localFont from "next/font/local";

export const Poppins = localFont({
  src: [
    {
      path: "../../../public/fonts/Poppins/Poppins-Regular.ttf",
      weight: "500",
      style: "regular",
    },
    {
      path: "../../../public/fonts/Poppins/Poppins-SemiBold.ttf",
      weight: "600",
      style: "semibold",
    },
  ],
  variable: "--font-poppins",
  display: "swap",
});

export const OpenSans = localFont({
  src: [
    {
      path: "../../../public/fonts/Open_Sans/OpenSans-Regular.ttf",
      weight: "400",
      style: "regular",
    },
  ],
  variable: "--font-OpenSans",
  display: "swap",
});