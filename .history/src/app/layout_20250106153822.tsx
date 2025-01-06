import './globals.css'
import { Cormorant_Garamond } from 'next/font/google'
import MobileNav from '@/components/MobileNav'

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-cormorant',
})

export const metadata = {
  title: 'Reborn Suadiye - Modern Restaurant & Cafe',
  description: 'Experience modern cuisine and unforgettable moments in the heart of Bagdat Avenue',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cormorantGaramond.variable}>
      <body className="bg-white">
        <header className="fixed w-full z-50 bg-white/90 backdrop-blur-sm shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <a href="/" className="text-2xl font-display font-bold text-primary-800">
                Reborn Suadiye
              </a>
              
              <MobileNav />
              
              <nav className="hidden sm:flex items-center space-x-8">
                <a href="#about" className="text-primary-600 hover:text-primary-800 transition-colors">
                  About Us
                </a>
                <a href="#menu" className="text-primary-600 hover:text-primary-800 transition-colors">
                  Our Menu
                </a>
                <a href="#reservations" className="text-primary-600 hover:text-primary-800 transition-colors">
                  Reservations
                </a>
                <a href="#contact" className="text-primary-600 hover:text-primary-800 transition-colors">
                  Contact
                </a>
                <a href="#reviews" className="text-primary-600 hover:text-primary-800 transition-colors">
                  Reviews
                </a>
              </nav>
            </div>
          </div>
        </header>

        <main>{children}</main>

        <footer className="bg-primary-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-display font-semibold mb-4">Visit Us</h3>
                <p className="text-gray-300">Bagdat Avenue, Suadiye</p>
                <p className="text-gray-300">Istanbul, Turkey</p>
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold mb-4">Hours</h3>
                <p className="text-gray-300">Monday - Sunday</p>
                <p className="text-gray-300">9:00 AM - 11:00 PM</p>
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold mb-4">Contact</h3>
                <p className="text-gray-300">Phone: +90 216 XXX XX XX</p>
                <a 
                  href="https://instagram.com/reborn.suadiye" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-gold-400 transition-colors"
                >
                  Follow us on Instagram
                </a>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-primary-800 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} Reborn Suadiye. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
