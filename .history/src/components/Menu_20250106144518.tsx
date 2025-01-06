import React from 'react'
import Image from 'next/image'
import { FaLeaf, FaFire, FaStar } from 'react-icons/fa'

interface MenuItem {
  id: number
  name: string
  description: string
  price: string
  category: string
  image: string
  isSpicy?: boolean
  isVegetarian?: boolean
  isPopular?: boolean
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Classic Breakfast',
    description: 'Eggs, bacon, toast, and potatoes',
    price: '₺150',
    category: 'Breakfast',
    image: '/menu/breakfast.jpg',
    isPopular: true
  },
  {
    id: 2,
    name: 'Grilled Salmon',
    description: 'Fresh salmon with seasonal vegetables',
    price: '₺450',
    category: 'Main Course',
    image: '/menu/salmon.jpg',
    isPopular: true
  },
  {
    id: 3,
    name: 'Caesar Salad',
    description: 'Romaine lettuce, croutons, parmesan cheese',
    price: '₺180',
    category: 'Salads',
    image: '/menu/salad.jpg',
    isVegetarian: true
  },
  // Add more menu items as needed
]

const categories = Array.from(new Set(menuItems.map(item => item.category)))

export default function Menu() {
  return (
    <div className="w-full">
      {categories.map((category, categoryIndex) => (
        <div 
          key={category} 
          className="mb-16 animate-fade-in" 
          style={{ animationDelay: `${categoryIndex * 0.3}s` }}
        >
          <h3 className="text-3xl font-display text-center text-primary-800 mb-12 relative">
            <span className="relative">
              {category}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gold-400 rounded-full" />
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems
              .filter(item => item.category === category)
              .map((item, index) => (
                <div
                  key={item.id}
                  className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-scale-up"
                  style={{ animationDelay: `${(categoryIndex * 0.3) + (index * 0.15)}s` }}
                >
                  <div className="relative h-64">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h4 className="text-xl font-display text-white mb-1">{item.name}</h4>
                      <div className="flex items-center space-x-2">
                        {item.isVegetarian && (
                          <span className="bg-green-500/80 text-white text-xs px-2 py-1 rounded-full flex items-center">
                            <FaLeaf className="mr-1" /> Vegetarian
                          </span>
                        )}
                        {item.isSpicy && (
                          <span className="bg-red-500/80 text-white text-xs px-2 py-1 rounded-full flex items-center">
                            <FaFire className="mr-1" /> Spicy
                          </span>
                        )}
                        {item.isPopular && (
                          <span className="bg-gold-500/80 text-white text-xs px-2 py-1 rounded-full flex items-center">
                            <FaStar className="mr-1" /> Popular
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-display text-primary-800">{item.price}</span>
                      <button className="bg-gold-500 text-white px-4 py-2 rounded-lg transform transition-transform hover:scale-105 active:scale-95">
                        Order Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  )
} 