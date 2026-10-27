import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import Cursor from "@/components/Cursor";
import "./globals.css";

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Thato Makhusha | Software Engineering Student",
  description: "Thato Makhusha — Software Engineering student at Eduvos Pretoria",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${jetbrains.variable} scroll-smooth scroll-pt-20 motion-reduce:scroll-auto`}
    >
      <body>
        <Cursor />
        {children}
      </body>
    </html>
  );
}