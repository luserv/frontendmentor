import localFont from "next/font/local";

export const Overpass = localFont({
  src: [
    {
      path: "../../../../public/fonts/Overpass/Overpass-Regular.ttf",
      weight: "400",
      style: "regular",
    },
    {
      path: "../../../../public/fonts/Overpass/Overpass-Bold.ttf",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-overpass",
  display: "swap",
});