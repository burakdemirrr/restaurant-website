import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import MobileNav from "@/components/MobileNav";

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
});

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: '--font-montserrat',
});

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
    <html lang="en" className={`scroll-smooth ${playfair.variable} ${montserrat.variable}`}>
      <body className={montserrat.className}>
        <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm transition-all duration-300 hover:bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <a href="/" className="text-xl font-bold font-playfair hover:text-primary-600 transition-colors">Reborn Suadiye</a>
              </div>
              <div className="hidden sm:flex sm:items-center sm:space-x-8">
                <a href="#about" className="hover:text-primary-600 transition-colors">About</a>
                <a href="#menu" className="hover:text-primary-600 transition-colors">Menu</a>
                <a href="#reservations" className="hover:text-primary-600 transition-colors">Reservations</a>
                <a href="#contact" className="hover:text-primary-600 transition-colors">Contact</a>
                <a href="#reviews" className="hover:text-primary-600 transition-colors">Reviews</a>
              </div>
              <MobileNav />
            </div>
          </div>
        </nav>
        <main className="pt-16">
          {children}
        </main>
        <footer className="bg-primary-900 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-bold font-playfair">Reborn Suadiye</h3>
                <p className="mt-2">Experience the finest dining</p>
              </div>
              <div className="flex space-x-6">
                <a href="https://instagram.com/reborn.suadiye" target="_blank" rel="noopener noreferrer" className="hover:text-primary-300 transition-colors">
                  Instagram
                </a>
                <a href="#contact" className="hover:text-primary-300 transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
