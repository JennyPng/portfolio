import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/nav-bar";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "jennypng",
  description: "jenny peng's portfolio",
  icons: {
    icon: "/images/icon.png",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-background antialiased overflow-x-hidden`}
      >
        <NavBar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
