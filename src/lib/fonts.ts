import { Geist, Geist_Mono } from "next/font/google";

export const fontSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const fontMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const fontVariables = `${fontSans.variable} ${fontMono.variable}`;
