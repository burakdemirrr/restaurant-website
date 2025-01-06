import React from 'react'
import { FaStar, FaStarHalf } from 'react-icons/fa'

interface Review {
  id: number
  author: string
  rating: number
  text: string
  date: string
}

const reviews: Review[] = [
  {
    id: 1,
    author: 'Mehmet Y.',
    rating: 5,
    text: 'Bağdat Caddesinin en güzel mekanlarından biri. Kahvaltısı özellikle muhteşem, her şey çok taze ve lezzetli. Serpme kahvaltıda sunulan reçeller ev yapımı. Personel çok ilgili ve güler yüzlü.',
    date: '2024-01-15'
  },
  {
    id: 2,
    author: 'Ayşe K.',
    rating: 5,
    text: 'San Sebastian cheesecake için bile gidilir! Brunch menüsü çok zengin, özellikle avokado toast favorim. Manzara ve ambiyans harika, rezervasyon yaptırmayı unutmayın.',
    date: '2024-01-10'
  },
  {
    id: 3,
    author: 'Can S.',
    rating: 5,
    text: 'Akşam yemeği için tercih ettik ve çok memnun kaldık. Izgara levrek ve risotto muhteşemdi. Tatlılar da bir o kadar başarılı. Kesinlikle tekrar geleceğiz.',
    date: '2024-01-05'
  }
]

function RatingStars({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 !== 0

  return (
    <div className="flex text-gold-400">
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={i} className="transform hover:scale-125 transition-transform duration-300" />
      ))}
      {hasHalfStar && <FaStarHalf className="transform hover:scale-125 transition-transform duration-300" />}
    </div>
  )
}

export default function GoogleReviews() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {reviews.map((review, index) => (
        <div
          key={review.id}
          className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-scale-up relative overflow-hidden"
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-semibold font-display text-primary-900">{review.author}</h3>
            <RatingStars rating={review.rating} />
          </div>
          <div className="relative min-h-[120px]">
            <p className="text-gray-600 italic leading-relaxed text-lg font-light">
              "{review.text}"
            </p>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm text-gold-600 font-medium">
              {new Date(review.date).toLocaleDateString('tr-TR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
            <div className="flex items-center text-primary-600">
              <span className="text-sm">Google Review</span>
              <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
              </svg>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50 rounded-bl-full -z-10 transform rotate-in opacity-50" 
               style={{ animationDelay: `${index * 0.2 + 0.3}s` }} />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gold-50 rounded-tr-full -z-10 transform rotate-in opacity-50" 
               style={{ animationDelay: `${index * 0.2 + 0.4}s` }} />
        </div>
      ))}
    </div>
  )
} 