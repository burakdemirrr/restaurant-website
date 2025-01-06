'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 1, 1, 0])

  return (
    <section ref={sectionRef} id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-800 mb-4">
            Our Story
          </h2>
          <div className="w-24 h-1 bg-gold-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            style={{ y, opacity }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/about-image.jpg"
                alt="About Reborn Suadiye"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-8 -right-8 bg-white p-6 rounded-lg shadow-xl max-w-xs"
            >
              <p className="text-primary-800 font-display text-lg">
                "Experience the perfect blend of tradition and innovation"
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-display font-semibold text-primary-800">
              A Culinary Journey
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Welcome to Reborn Suadiye, where culinary excellence meets warm hospitality. 
              Our restaurant offers a unique dining experience with a perfect blend of 
              traditional and modern cuisine.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Every dish is crafted with passion using the finest ingredients, bringing 
              you an unforgettable taste of Istanbul's rich culinary heritage with a 
              modern twist.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <a
                href="#menu"
                className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg
                  transform transition-all duration-300 hover:scale-105 hover:bg-primary-700
                  hover:shadow-xl active:scale-95"
              >
                Explore Our Menu
              </a>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24"
        >
          <div className="text-center">
            <h4 className="text-4xl font-display font-bold text-primary-800 mb-2">15+</h4>
            <p className="text-gray-600">Years of Excellence</p>
          </div>
          <div className="text-center">
            <h4 className="text-4xl font-display font-bold text-primary-800 mb-2">50+</h4>
            <p className="text-gray-600">Unique Dishes</p>
          </div>
          <div className="text-center">
            <h4 className="text-4xl font-display font-bold text-primary-800 mb-2">1000+</h4>
            <p className="text-gray-600">Happy Customers</p>
          </div>
          <div className="text-center">
            <h4 className="text-4xl font-display font-bold text-primary-800 mb-2">4.9</h4>
            <p className="text-gray-600">Customer Rating</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 