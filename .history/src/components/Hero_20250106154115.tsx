'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Reborn Suadiye Restaurant"
          fill
          className="object-cover brightness-[0.85]"
          priority
        />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 bg-black/30">
        <div className="container mx-auto h-full flex flex-col justify-center items-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-white max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl font-display font-semibold mb-6">
              Reborn Suadiye
            </h1>
            <p className="text-xl md:text-2xl font-light mb-8 leading-relaxed">
              Experience modern cuisine and unforgettable moments in the heart of Bagdat Avenue
            </p>
            <motion.a
              href="#reservation"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="inline-block bg-gold-400 text-black px-8 py-3 rounded-full text-lg font-medium hover:bg-gold-300 transition-colors duration-300"
            >
              Make a Reservation
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 