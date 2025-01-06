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
    author: 'Ahmet Y.',
    rating: 5,
    text: 'Harika bir mekan! Kahvaltısı özellikle muhteşem. Servis ve ambiyans da çok iyi.',
    date: '2024-01-01'
  },
  {
    id: 2,
    author: 'Ayşe K.',
    rating: 4.5,
    text: 'Bağdat Caddesinin en iyi restoranlarından biri. Levrek çok lezzetliydi.',
    date: '2023-12-25'
  },
  {
    id: 3,
    author: 'Mehmet S.',
    rating: 5,
    text: 'Künefesi için bile gidilir. Servis hızlı ve personel çok ilgili.',
    date: '2023-12-20'
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
          className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-scale-up"
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold font-display text-primary-900">{review.author}</h3>
            <RatingStars rating={review.rating} />
          </div>
          <div className="relative">
            <p className="text-gray-600 mb-6 line-clamp-3 hover:line-clamp-none transition-all duration-500 text-lg">
              "{review.text}"
            </p>
            <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white pointer-events-none" />
          </div>
          <p className="text-sm text-gold-600 font-medium">
            {new Date(review.date).toLocaleDateString('tr-TR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
          <div className="absolute top-0 right-0 w-16 h-16 bg-gold-100 rounded-bl-full -z-10 transform rotate-in" 
               style={{ animationDelay: `${index * 0.2 + 0.3}s` }} />
        </div>
      ))}
    </div>
  )
} 