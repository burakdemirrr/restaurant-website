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
        <div key={category} className="mb-12 animate-fade-in" style={{ animationDelay: `${categoryIndex * 0.2}s` }}>
          <h3 className="text-2xl font-semibold mb-6 font-playfair">{category}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems
              .filter(item => item.category === category)
              .map((item, index) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-slide-up"
                  style={{ animationDelay: `${(categoryIndex * 0.2) + (index * 0.1)}s` }}
                >
                  <div className="relative h-48 overflow-hidden group">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold font-playfair">{item.name}</h4>
                      <span className="text-lg font-medium text-primary-600">
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