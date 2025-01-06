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
  // Breakfast Items
  {
    id: 1,
    name: 'Kahvaltı Tabağı',
    description: 'Zengin serpme kahvaltı tabağı, taze pişmiş ekmekler, özel reçeller',
    price: '₺250',
    category: 'Kahvaltı',
    image: '/menu/kahvalti.jpg'
  },
  {
    id: 2,
    name: 'Menemen',
    description: 'Taze domatesler, biberler ve yumurta ile hazırlanan klasik menemen',
    price: '₺120',
    category: 'Kahvaltı',
    image: '/menu/menemen.jpg'
  },

  // Main Courses
  {
    id: 3,
    name: 'Izgara Levrek',
    description: 'Taze levrek, mevsim sebzeleri ile servis edilir',
    price: '₺380',
    category: 'Ana Yemekler',
    image: '/menu/levrek.jpg'
  },
  {
    id: 4,
    name: 'Bonfile',
    description: 'Özel marine edilmiş dana bonfile, mantar sosu ile',
    price: '₺450',
    category: 'Ana Yemekler',
    image: '/menu/bonfile.jpg'
  },
  {
    id: 5,
    name: 'Köfte',
    description: 'El yapımı köfte, özel baharatlar ile',
    price: '₺280',
    category: 'Ana Yemekler',
    image: '/menu/kofte.jpg'
  },

  // Salads
  {
    id: 6,
    name: 'Sezar Salata',
    description: 'Izgara tavuk, marul, parmesan peyniri, kruton ve özel sos',
    price: '₺180',
    category: 'Salatalar',
    image: '/menu/sezar.jpg'
  },
  {
    id: 7,
    name: 'Akdeniz Salata',
    description: 'Taze roka, cherry domates, zeytinyağı ve balzamik sos',
    price: '₺160',
    category: 'Salatalar',
    image: '/menu/akdeniz.jpg'
  },

  // Desserts
  {
    id: 8,
    name: 'Künefe',
    description: 'Ev yapımı künefe, kaymak ile servis edilir',
    price: '₺160',
    category: 'Tatlılar',
    image: '/menu/kunefe.jpg'
  },
  {
    id: 9,
    name: 'Cheesecake',
    description: 'Ev yapımı cheesecake, mevsim meyveleri ile',
    price: '₺140',
    category: 'Tatlılar',
    image: '/menu/cheesecake.jpg'
  },

  // Beverages
  {
    id: 10,
    name: 'Türk Kahvesi',
    description: 'Geleneksel Türk kahvesi',
    price: '₺50',
    category: 'İçecekler',
    image: '/menu/turk-kahvesi.jpg'
  },
  {
    id: 11,
    name: 'Taze Sıkılmış Portakal Suyu',
    description: 'Günlük taze sıkılmış portakal suyu',
    price: '₺60',
    category: 'İçecekler',
    image: '/menu/portakal.jpg'
  }
]

const categories = Array.from(new Set(menuItems.map(item => item.category)))

export default function Menu() {
  return (
    <div className="w-full">
      {categories.map((category, categoryIndex) => (
        <div key={category} className="mb-16 animate-fade-in" style={{ animationDelay: `${categoryIndex * 0.3}s` }}>
          <h3 className="text-3xl font-semibold mb-8 font-display text-center text-primary-800">{category}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems
              .filter(item => item.category === category)
              .map((item, index) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-bounce-in"
                  style={{ animationDelay: `${(categoryIndex * 0.3) + (index * 0.15)}s` }}
                >
                  <div className="relative h-56 overflow-hidden group">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-xl font-display font-semibold text-primary-900 group-hover:text-gold-600 transition-colors duration-300">
                        {item.name}
                      </h4>
                      <span className="text-lg font-medium text-gold-500 font-display">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm md:hidden">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  )
} 