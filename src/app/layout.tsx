"use client";
import Navbar from "@/src/components/navbar";
import Providers from "@/src/components/providers";
import { Inter } from "next/font/google";
import "@/src/app/globals.css";
import Footer from "@/src/components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            {children}
            <div className="grow" />
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
