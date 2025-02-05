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
  description: "Generated by create next app",
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
    <html lang="en">
       <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={montserrat.className} >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
