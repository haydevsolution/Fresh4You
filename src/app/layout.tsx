import type { ReactNode } from "react";
import { Inter, Playfair_Display } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fresh4You – Frische, die begeistert",
  description:
    "Ihr zuverlässiger Partner für erstklassiges Obst, Gemüse und Feinkost. Qualität, Frische und Service aus einer Hand.",
  keywords:
    "Gemüse, Obst, Frische, Lieferant, Regional, Nachhaltigkeit, Fresh4You",
};

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
