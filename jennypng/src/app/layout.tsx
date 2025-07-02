import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/nav-bar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "jennypng",
  description: "jenny peng's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-background antialiased overflow-x-hidden`}
      >
        <NavBar />
        {children}
        <footer className="p-4 flex flex-row justify-between">
          <p>Jenny Peng © 2025</p>
          <p>built with next.js, tailwind css, figma, and daily $2 heytea in china</p>
        </footer>
      </body>
    </html>
  );
}
