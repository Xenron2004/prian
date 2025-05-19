import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Manrope } from 'next/font/google';
import SmoothScrollProvider from "@/components/SmoothScroll";
import FloatWhatsApp from "@/components/FloatWhatsApp";

const manrope = Manrope({ 
  subsets: ['latin'],
  variable: '--font-manrope',
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'PrianDigitech - Creative Tech & Growth Solutions',
  description: 'Elevate your brand with cutting-edge digital marketing solutions. We help businesses thrive and scale with innovative marketing strategies.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${geistSans.variable} ${geistMono.variable} antialiased` }
      >
        <SmoothScrollProvider>
        {children}
        </SmoothScrollProvider>
        <FloatWhatsApp/>
      </body>
    </html>
  );
}
