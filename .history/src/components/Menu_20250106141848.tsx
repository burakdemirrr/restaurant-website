import React from 'react'
import Image from 'next/image'

interface MenuItem {
  id: number
  name: string
  description: string
  price: string
  category: string
  image: string
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Classic Breakfast',
    description: 'Eggs, bacon, toast, and potatoes',
    price: '₺150',
    category: 'Breakfast',
    image: '/menu/breakfast.jpg'
  },
  {
    id: 2,
    name: 'Grilled Salmon',
    description: 'Fresh salmon with seasonal vegetables',
    price: '₺450',
    category: 'Main Course',
    image: '/menu/salmon.jpg'
  },
  {
    id: 3,
    name: 'Caesar Salad',
    description: 'Romaine lettuce, croutons, parmesan cheese',
    price: '₺180',
    category: 'Salads',
    image: '/menu/salad.jpg'
  },
  // Add more menu items as needed
]

const categories = Array.from(new Set(menuItems.map(item => item.category)))

export default function Menu() {
  return (
    <div className="w-full">
      {categories.map(category => (
        <div key={category} className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">{category}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems
              .filter(item => item.category === category)
              .map(item => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-48">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold">{item.name}</h4>
                      <span className="text-lg font-medium text-green-600">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  )
} 