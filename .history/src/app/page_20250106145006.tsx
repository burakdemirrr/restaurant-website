'use client'

import Hero from '@/components/Hero'
import About from '@/components/About'
import Menu from '@/components/Menu'
import ReservationForm from '@/components/ReservationForm'
import GoogleReviews from '@/components/GoogleReviews'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />

      {/* Menu Section */}
      <motion.section
        id="menu"
        className="py-24 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-800 mb-4">
              Our Menu
            </h2>
            <div className="w-24 h-1 bg-gold-400 mx-auto rounded-full" />
          </motion.div>
          <Menu />
        </div>
      </motion.section>

      {/* Reservations Section */}
      <motion.section
        id="reservations"
        className="py-24 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-800 mb-4">
              Make a Reservation
            </h2>
            <div className="w-24 h-1 bg-gold-400 mx-auto rounded-full" />
          </motion.div>
          <ReservationForm />
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="py-24 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-800 mb-4">
              Contact Us
            </h2>
            <div className="w-24 h-1 bg-gold-400 mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-2xl font-display font-semibold text-primary-800 mb-6">
                Location & Hours
              </h3>
              <div className="space-y-4 text-gray-600">
                <p>Suadiye, Istanbul</p>
                <p>Monday - Sunday: 9:00 AM - 11:00 PM</p>
                <p>Phone: [Your Phone]</p>
                <p>Email: [Your Email]</p>
                <div className="mt-8">
                  <a
                    href="https://instagram.com/reborn.suadiye"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-800 transition-colors"
                  >
                    <span>Follow us on Instagram</span>
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-[400px] relative rounded-lg overflow-hidden shadow-lg"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.1234567890123!2d29.0876543210987!3d40.9876543210987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDU5JzE1LjYiTiAyOcKwMDUnMTAuMiJF!5e0!3m2!1sen!2str!4v1234567890123!5m2!1sen!2str"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Reviews Section */}
      <motion.section
        id="reviews"
        className="py-24 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-800 mb-4">
              What Our Customers Say
            </h2>
            <div className="w-24 h-1 bg-gold-400 mx-auto rounded-full" />
          </motion.div>
          <GoogleReviews />
        </div>
      </motion.section>
    </div>
  )
}
