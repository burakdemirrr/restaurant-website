import type { Metadata } from "next";
import { Cormorant_Garamond, Raleway } from "next/font/google";
import "./globals.css";
import MobileNav from "@/components/MobileNav";

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  variable: '--font-display',
  display: 'swap',
});

const raleway = Raleway({ 
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
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
        <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm transition-all duration-300 hover:bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <a href="/" className={`text-2xl font-bold text-primary-800 ${cormorant.className}`}>
                  Reborn Suadiye
                </a>
              </div>
              <div className="hidden sm:flex sm:items-center sm:space-x-8">
                <a href="#about" className="text-primary-600 hover:text-primary-800 transition-colors">About</a>
                <a href="#menu" className="text-primary-600 hover:text-primary-800 transition-colors">Menu</a>
                <a href="#reservations" className="text-primary-600 hover:text-primary-800 transition-colors">Reservations</a>
                <a href="#contact" className="text-primary-600 hover:text-primary-800 transition-colors">Contact</a>
                <a href="#reviews" className="text-primary-600 hover:text-primary-800 transition-colors">Reviews</a>
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
            <div className="grid md:grid-cols-3 gap-12">
              <div>
                <h3 className={`text-2xl font-bold mb-4 ${cormorant.className}`}>Reborn Suadiye</h3>
                <p className="text-primary-200">Experience the finest dining</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Contact</h4>
                <p className="text-primary-200">Phone: [Your Phone]</p>
                <p className="text-primary-200">Email: [Your Email]</p>
                <p className="text-primary-200">Address: Suadiye, Istanbul</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                <a 
                  href="https://instagram.com/reborn.suadiye" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-primary-200 hover:text-white transition-colors"
                >
                  Instagram
                </a>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-primary-800 text-center text-primary-300">
              <p>&copy; {new Date().getFullYear()} Reborn Suadiye. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
