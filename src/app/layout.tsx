import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin", "cyrillic"], variable: "--font-manrope", display: "swap" });

export const metadata: Metadata = {
  title: { default: "Зварювальні Гази — промислові та медичні гази, Харків", template: "%s — Зварювальні Гази" },
  description:
    "Зварювальні Гази — постачальник промислових і медичних газів, зварювального обладнання та витратних матеріалів у Харкові. Доставка балонів.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk" className={manrope.variable}>
      <body className="font-sans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
