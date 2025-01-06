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
    <div className="flex text-yellow-400">
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={i} />
      ))}
      {hasHalfStar && <FaStarHalf />}
    </div>
  )
}

export default function GoogleReviews() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {reviews.map((review) => (
        <div
          key={review.id}
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">{review.author}</h3>
            <RatingStars rating={review.rating} />
          </div>
          <p className="text-gray-600 mb-4">{review.text}</p>
          <p className="text-sm text-gray-400">
            {new Date(review.date).toLocaleDateString('tr-TR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
        </div>
      ))}
    </div>
  )
} 