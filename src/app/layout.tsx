import "./globals.css"
import { Cormorant_Garamond, Raleway } from "next/font/google"
import MobileNav from "@/components/MobileNav"
import Link from "next/link"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
})

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata = {
  title: "Reborn Suadiye - Restaurant & Cafe",
  description: "Experience the finest dining at Reborn Suadiye. Make your reservations online and enjoy our delicious menu.",
}

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
            <div className="flex justify-between h-20">
              <div className="flex items-center">
                <Link 
                  href="/" 
                  className={`text-3xl font-bold text-primary-800 hover:text-primary-900 transition-all duration-300 transform hover:scale-105 ${cormorant.className}`}
                >
                  Reborn Suadiye
                </Link>
              </div>
              <div className="hidden sm:flex sm:items-center sm:space-x-12">
                <Link 
                  href="#about" 
                  className="text-primary-600 hover:text-primary-800 transition-all duration-300 hover:scale-105 relative group"
                >
                  About Us
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link 
                  href="#menu" 
                  className="text-primary-600 hover:text-primary-800 transition-all duration-300 hover:scale-105 relative group"
                >
                  Our Menu
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link 
                  href="#reservations" 
                  className="text-primary-600 hover:text-primary-800 transition-all duration-300 hover:scale-105 relative group"
                >
                  Reservations
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link 
                  href="#contact" 
                  className="text-primary-600 hover:text-primary-800 transition-all duration-300 hover:scale-105 relative group"
                >
                  Contact
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link 
                  href="#reviews" 
                  className="text-primary-600 hover:text-primary-800 transition-all duration-300 hover:scale-105 relative group"
                >
                  Reviews
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </div>
              <MobileNav />
            </div>
          </div>
        </nav>

        <main className="pt-20">
          {children}
        </main>

        <footer className="bg-primary-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-12">
              <div className="space-y-4">
                <h3 className={`text-3xl font-bold mb-6 ${cormorant.className}`}>Reborn Suadiye</h3>
                <p className="text-primary-200 leading-relaxed">
                  Experience modern cuisine in an elegant atmosphere.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-semibold mb-6">Menu</h4>
                <div className="space-y-3">
                  <p className="text-primary-200 hover:text-white transition-colors cursor-pointer">Breakfast</p>
                  <p className="text-primary-200 hover:text-white transition-colors cursor-pointer">Main Courses</p>
                  <p className="text-primary-200 hover:text-white transition-colors cursor-pointer">Desserts</p>
                  <p className="text-primary-200 hover:text-white transition-colors cursor-pointer">Beverages</p>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-semibold mb-6">Contact</h4>
                <div className="space-y-3">
                  <p className="text-primary-200">Bagdat Avenue, No: 123</p>
                  <p className="text-primary-200">Suadiye, Kadikoy</p>
                  <p className="text-primary-200">Istanbul, Turkey</p>
                  <p className="text-primary-200">Tel: +90 (216) XXX XX XX</p>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-semibold mb-6">Hours</h4>
                <div className="space-y-3">
                  <p className="text-primary-200">Monday - Sunday</p>
                  <p className="text-primary-200">09:00 - 23:00</p>
                  <div className="pt-4">
                    <a 
                      href="https://instagram.com/reborn.suadiye" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-primary-200 hover:text-white transition-all duration-300 transform hover:translate-x-2"
                    >
                      <span>Follow us on Instagram</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-16 pt-8 border-t border-primary-800 text-center">
              <p className="text-primary-300">&copy; {new Date().getFullYear()} Reborn Suadiye. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
