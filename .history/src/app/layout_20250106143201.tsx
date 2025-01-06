import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MobileNav from "@/components/MobileNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Reborn Suadiye - Restaurant & Cafe",
  description: "Experience the finest dining at Reborn Suadiye. Make your reservations online and enjoy our delicious menu.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <a href="/" className="text-xl font-bold">Reborn Suadiye</a>
              </div>
              <div className="hidden sm:flex sm:items-center sm:space-x-8">
                <a href="#about" className="hover:text-gray-600">About</a>
                <a href="#menu" className="hover:text-gray-600">Menu</a>
                <a href="#reservations" className="hover:text-gray-600">Reservations</a>
                <a href="#contact" className="hover:text-gray-600">Contact</a>
                <a href="#reviews" className="hover:text-gray-600">Reviews</a>
              </div>
              <MobileNav />
            </div>
          </div>
        </nav>
        <main className="pt-16">
          {children}
        </main>
        <footer className="bg-gray-900 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-bold">Reborn Suadiye</h3>
                <p className="mt-2">Experience the finest dining</p>
              </div>
              <div className="flex space-x-6">
                <a href="https://instagram.com/reborn.suadiye" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                  Instagram
                </a>
                <a href="#contact" className="hover:text-gray-300">Contact</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
