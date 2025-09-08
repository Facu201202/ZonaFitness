import type { Metadata } from "next";
import "../globals.css";
import { Montserrat } from 'next/font/google'
import { ToastContainer } from "react-toastify"

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
})


export const metadata: Metadata = {
  title: "ZonaFitness",
  description: "ZonaFitness",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${montserrat.variable} font-sans antialiased min-h-screen flex flex-col`}>
      <main >
        {children}
      </main>
      <ToastContainer />
    </div>

  );
}
