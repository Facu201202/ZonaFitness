import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from 'next/font/google'
import ReactQueryProvider from "./providers/ReactQueryProvider";
import { headers } from "next/headers";
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const headersList =  await headers()
  const userId = headersList.get("x-user-id") || null
  const userName = headersList.get("x-user-name")
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        <main className="">
          <ReactQueryProvider userId={userId} userName={userName}>
            {children}
          </ReactQueryProvider>
        </main>
        <ToastContainer />
      </body>
    </html>
  );
}