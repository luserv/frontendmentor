import type { Metadata } from "next";
import localFont from "next/font/local";

// Configurar fuentes personalizadas para este componente específico
const fraunces = localFont({
  src: [
    {
      path: "../../../public/fonts/fraunces/Fraunces_72pt-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/fraunces/Fraunces_72pt-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-fraunces",
  display: "swap",
});

const montserrat = localFont({
  src: [
    {
      path: "../../../public/fonts/montserrat/Montserrat-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/montserrat/Montserrat-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Product Preview Card Component",
  description: "Componente de vista previa de producto con fuentes personalizadas",
};

export default function ProductPreviewCardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${fraunces.variable} ${montserrat.variable}`}>
      {children}
    </div>
  );
}
