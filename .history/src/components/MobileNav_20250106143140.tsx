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
        className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-lg py-2">
          <a
            href="#about"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
            onClick={toggleMenu}
          >
            About
          </a>
          <a
            href="#menu"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
            onClick={toggleMenu}
          >
            Menu
          </a>
          <a
            href="#reservations"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
            onClick={toggleMenu}
          >
            Reservations
          </a>
          <a
            href="#contact"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
            onClick={toggleMenu}
          >
            Contact
          </a>
          <a
            href="#reviews"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
            onClick={toggleMenu}
          >
            Reviews
          </a>
        </div>
      )}
    </div>
  )
} 