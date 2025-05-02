import type { Metadata } from "next";
import { Syne_Mono } from "next/font/google";
import "./globals.scss";

const syne = Syne_Mono({
  variable: "--font-syne-mono",
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dreamer (2025) | Short Cybberpunk Film",
  description:
    "Cyberspace is calling. Are you ready to answer? And to pay the price?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${syne.variable} antialiased`}>{children}</body>
    </html>
  );
}
