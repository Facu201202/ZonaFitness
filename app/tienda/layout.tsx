import type { Metadata } from "next";
import { headers } from "next/headers"
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { Montserrat } from 'next/font/google'
import ReactQueryProvider from "../providers/ReactQueryProvider";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
})


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ZonaFitness",
  description: "ZonaFitness",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerList = await headers()     
  const userId = headerList.get("x-user-id")
  const isLogin = !!userId
  return (
    <div
      className={`${montserrat.variable} font-sans antialiased min-h-screen flex flex-col`}
    >
      <Navbar isLogin={isLogin}/>
      <main className="">
        <ReactQueryProvider>
          {children}
        </ReactQueryProvider>
      </main>

      <Footer />
    </div>
  );
}
