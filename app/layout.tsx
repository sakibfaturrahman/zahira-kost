import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar"; // Pastikan path sesuai folder kamu
import Footer from "@/components/footer"; // Pastikan path sesuai folder kamu

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ZahiraKost | Hunian Nyaman & Strategis",
  description:
    "Temukan pilihan kost eksklusif terbaik dengan fasilitas lengkap.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-slate-900`}
      >
        <Navbar />
        <div className="flex min-h-screen flex-col">
          {/* TAMBAHKAN pt-20 atau pt-24 di sini. 
              Ini akan memberikan jarak di atas agar konten tidak tertutup navbar yang fixed.
          */}
          <main className="flex-grow pt-20 md:pt-24">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
