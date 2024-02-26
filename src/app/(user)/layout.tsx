import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import NavBar from "@/components/Navbar";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Orebi Shopping Store || Best place to shop",
  description: "Your trusted online shopping store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
