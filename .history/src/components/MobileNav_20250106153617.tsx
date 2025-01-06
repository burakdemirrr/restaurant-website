'use client'

import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="sm:hidden">
      <button
        onClick={toggleMenu}
        className="p-2 text-primary-600 hover:text-primary-800 transition-colors focus:outline-none"
        aria-label="Toggle menu"
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center p-4 border-b border-gray-100">
              <span className="text-2xl font-display font-bold text-primary-800">
                Reborn 
              </span>
              <button
                onClick={toggleMenu}
                className="p-2 text-primary-600 hover:text-primary-800 transition-colors focus:outline-none"
                aria-label="Close menu"
              >
                <FaTimes size={24} />
              </button>
            </div>
            
            <nav className="flex-1 px-4 py-8">
              <div className="flex flex-col space-y-6">
                <a
                  href="#about"
                  className="text-lg text-primary-600 hover:text-primary-800 transition-colors animate-slide-up"
                  style={{ animationDelay: '0.1s' }}
                  onClick={toggleMenu}
                >
                  About
                </a>
                <a
                  href="#menu"
                  className="text-lg text-primary-600 hover:text-primary-800 transition-colors animate-slide-up"
                  style={{ animationDelay: '0.2s' }}
                  onClick={toggleMenu}
                >
                  Menu
                </a>
                <a
                  href="#reservations"
                  className="text-lg text-primary-600 hover:text-primary-800 transition-colors animate-slide-up"
                  style={{ animationDelay: '0.3s' }}
                  onClick={toggleMenu}
                >
                  Reservations
                </a>
                <a
                  href="#contact"
                  className="text-lg text-primary-600 hover:text-primary-800 transition-colors animate-slide-up"
                  style={{ animationDelay: '0.4s' }}
                  onClick={toggleMenu}
                >
                  Contact
                </a>
                <a
                  href="#reviews"
                  className="text-lg text-primary-600 hover:text-primary-800 transition-colors animate-slide-up"
                  style={{ animationDelay: '0.5s' }}
                  onClick={toggleMenu}
                >
                  Reviews
                </a>
              </div>
            </nav>

            <div className="p-4 border-t border-gray-100 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <a
                href="https://instagram.com/reborn.suadiye"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 text-primary-600 hover:text-primary-800 transition-colors"
                onClick={toggleMenu}
              >
                <span>Follow us on Instagram</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 