import type { Metadata } from "next";
import { Cormorant_Garamond, Raleway } from "next/font/google";
import "./globals.css";
import MobileNav from "@/components/MobileNav";

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  variable: '--font-display',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

const raleway = Raleway({ 
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
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
    <html lang="en" className={`scroll-smooth ${cormorant.variable} ${raleway.variable}`}>
      <body className={`${raleway.className} antialiased`}>
        <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm transition-all duration-500 hover:bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <a href="/" className="text-2xl font-bold font-display hover:text-gold-500 transition-all duration-300 hover:scale-105">
                  Reborn Suadiye
                </a>
              </div>
              <div className="hidden sm:flex sm:items-center sm:space-x-8">
                <a href="#about" className="hover:text-gold-500 transition-all duration-300 hover:-translate-y-1">About</a>
                <a href="#menu" className="hover:text-gold-500 transition-all duration-300 hover:-translate-y-1">Menu</a>
                <a href="#reservations" className="hover:text-gold-500 transition-all duration-300 hover:-translate-y-1">Reservations</a>
                <a href="#contact" className="hover:text-gold-500 transition-all duration-300 hover:-translate-y-1">Contact</a>
                <a href="#reviews" className="hover:text-gold-500 transition-all duration-300 hover:-translate-y-1">Reviews</a>
              </div>
              <MobileNav />
            </div>
          </div>
        </nav>
        <main className="pt-16">
          {children}
        </main>
        <footer className="bg-primary-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-8 md:mb-0 text-center md:text-left">
                <h3 className="text-3xl font-bold font-display mb-2">Reborn Suadiye</h3>
                <p className="text-primary-200 font-light">Experience the finest dining</p>
              </div>
              <div className="flex space-x-8">
                <a 
                  href="https://instagram.com/reborn.suadiye" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-primary-200 hover:text-gold-300 transition-all duration-300 hover:-translate-y-1"
                >
                  Instagram
                </a>
                <a 
                  href="#contact" 
                  className="text-primary-200 hover:text-gold-300 transition-all duration-300 hover:-translate-y-1"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
