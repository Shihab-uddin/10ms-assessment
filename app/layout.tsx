import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Best IELTS Preparation Course",
  description: "Achieve your dream IELTS score with our comprehensive online course",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full bg-white-50">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased h-full`}>
        <div className="min-h-full flex flex-col">
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <p className="text-center text-sm text-gray-500">
                © {new Date().getFullYear()} 10ms Assessment.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
