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
    name: 'Serpme Kahvaltı',
    description: 'Zengin içerikli serpme kahvaltı, özel reçeller, bal-kaymak, sınırsız çay',
    price: '₺350',
    category: 'Kahvaltı',
    image: '/menu/kahvalti.jpg',
    isPopular: true
  },
  {
    id: 2,
    name: 'Eggs Benedict',
    description: 'Poşe yumurta, özel sos, avokado ve taze otlar ile',
    price: '₺180',
    category: 'Kahvaltı',
    image: '/menu/eggs-benedict.jpg',
    isPopular: true
  },
  {
    id: 3,
    name: 'Izgara Levrek',
    description: 'Taze ıspanak yatağında ızgara levrek, limon sos ile',
    price: '₺450',
    category: 'Ana Yemekler',
    image: '/menu/levrek.jpg',
    isPopular: true
  },
  {
    id: 4,
    name: 'Antrikot',
    description: 'Özel marine edilmiş antrikot, trüf mantarlı patates püresi ile',
    price: '₺580',
    category: 'Ana Yemekler',
    image: '/menu/antrikot.jpg',
    isPopular: true
  },
  {
    id: 5,
    name: 'Risotto',
    description: 'Deniz mahsüllü risotto, parmesan peyniri ile',
    price: '₺380',
    category: 'Ana Yemekler',
    image: '/menu/risotto.jpg'
  },
  {
    id: 6,
    name: 'Reborn Salata',
    description: 'Kinoa, avokado, ızgara tavuk, taze yeşillikler ve özel sos',
    price: '₺240',
    category: 'Salatalar',
    image: '/menu/reborn-salata.jpg',
    isPopular: true
  },
  {
    id: 7,
    name: 'Burrata Salata',
    description: 'Taze burrata peyniri, cherry domates, roka ve balsamik sos',
    price: '₺260',
    category: 'Salatalar',
    image: '/menu/burrata.jpg',
    isVegetarian: true
  },
  {
    id: 8,
    name: 'San Sebastian Cheesecake',
    description: 'Ev yapımı San Sebastian cheesecake, mevsim meyveleri ile',
    price: '₺180',
    category: 'Tatlılar',
    image: '/menu/san-sebastian.jpg',
    isPopular: true
  },
  {
    id: 9,
    name: 'Sufle',
    description: 'Sıcak çikolatalı sufle, vanilyalı dondurma ile',
    price: '₺160',
    category: 'Tatlılar',
    image: '/menu/sufle.jpg',
    isPopular: true
  },
  {
    id: 10,
    name: 'Türk Kahvesi',
    description: 'Özel harman Türk kahvesi, lokum ile servis edilir',
    price: '₺60',
    category: 'İçecekler',
    image: '/menu/turk-kahvesi.jpg'
  },
  {
    id: 11,
    name: 'Smoothie Bowl',
    description: 'Taze meyveler, granola ve bal ile',
    price: '₺140',
    category: 'Kahvaltı',
    image: '/menu/smoothie-bowl.jpg',
    isVegetarian: true
  },
  {
    id: 12,
    name: 'Avokado Toast',
    description: 'Ekşi maya ekmek üzerinde avokado, poşe yumurta ve taze otlar',
    price: '₺160',
    category: 'Kahvaltı',
    image: '/menu/avokado-toast.jpg',
    isVegetarian: true
  }
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
                  className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] animate-scale-up"
                  style={{ animationDelay: `${(categoryIndex * 0.3) + (index * 0.15)}s` }}
                >
                  <div className="relative h-64">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />
                    <div className="absolute bottom-4 left-4 right-4 transform transition-all duration-500 group-hover:translate-y-[-8px]">
                      <h4 className="text-xl font-display text-white mb-1">{item.name}</h4>
                      <div className="flex items-center space-x-2">
                        {item.isVegetarian && (
                          <span className="bg-green-500/90 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full flex items-center transition-transform duration-500 hover:scale-105">
                            <FaLeaf className="mr-1" /> Vejeteryan
                          </span>
                        )}
                        {item.isSpicy && (
                          <span className="bg-red-500/90 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full flex items-center transition-transform duration-500 hover:scale-105">
                            <FaFire className="mr-1" /> Acı
                          </span>
                        )}
                        {item.isPopular && (
                          <span className="bg-gold-500/90 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full flex items-center transition-transform duration-500 hover:scale-105">
                            <FaStar className="mr-1" /> Popüler
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="p-6 transform transition-all duration-500 group-hover:bg-gray-50">
                    <p className="text-gray-600 mb-4 transition-all duration-500 group-hover:text-gray-800">{item.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-display text-primary-800 transition-all duration-500 group-hover:text-primary-900 group-hover:scale-105">{item.price}</span>
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