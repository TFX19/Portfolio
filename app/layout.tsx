import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from 'next/font/google';
import Navbar from "./components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";


const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], 
  display: 'swap', 
});

export const metadata: Metadata = {
  title: "Tiago Borges",
  description: "Frontend developer specialized in creating modern, responsive, and interactive interfaces using technologies like React, Next.js, and Tailwind CSS.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="cupcake">
      <body className={montserrat.className} >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
