import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Devashish Badaria | Full Stack Developer",
  description: "Computer Science student at MNIT Jaipur. Full Stack Developer passionate about open-source, AI/ML, and building scalable web applications.",
  keywords: "developer, portfolio, full stack, React, Node.js, AI/ML, open source, MNIT",
  authors: [{ name: "Devashish Badaria" }],
  openGraph: {
    title: "Devashish Badaria | Full Stack Developer",
    description: "Computer Science student at MNIT Jaipur. Full Stack Developer passionate about open-source, AI/ML, and building scalable web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 transition-colors duration-300`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
