'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const imageVariants = {
    hidden: { scale: 1.2, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="relative h-screen">
      <motion.div
        className="absolute inset-0"
        initial="hidden"
        animate="visible"
        variants={imageVariants}
      >
        <Image
          src="/hero-image.jpg"
          alt="Reborn Suadiye Restaurant"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent" />
      </motion.div>

      <motion.div
        className="relative h-full flex items-center justify-center text-white text-center px-4"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="max-w-4xl">
          <motion.h1
            className="text-5xl md:text-7xl font-display font-bold mb-6"
            variants={itemVariants}
          >
            Welcome to Reborn Suadiye
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 text-gray-200"
            variants={itemVariants}
          >
            Experience the finest dining in Istanbul
          </motion.p>
          <motion.div variants={itemVariants}>
            <a
              href="#reservations"
              className="inline-block bg-gold-500 text-white px-8 py-3 rounded-lg text-lg font-medium
                transform transition-all duration-300 hover:scale-105 hover:bg-gold-600 hover:shadow-xl
                active:scale-95"
            >
              Make a Reservation
            </a>
          </motion.div>
          
          <motion.div
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 1.5,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <a href="#about" className="text-white flex flex-col items-center">
              <span className="text-sm mb-2">Scroll to explore</span>
              <svg
                className="w-6 h-6 animate-bounce"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
} 