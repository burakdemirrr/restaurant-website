'use client'

import React, { useEffect, useState } from 'react'

interface Reservation {
  id: number
  name: string
  email: string
  phone: string
  date: string
  time: string
  guests: number
  message?: string
  status: string
  createdAt: string
}

export default function AdminPage() {
  const [reservations, setReservations] = useState<Reservation[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await fetch('/api/reservations')
        if (response.ok) {
          const data = await response.json()
          setReservations(data)
        } else {
          console.error('Failed to fetch reservations')
        }
      } catch (error) {
        console.error('Error:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchReservations()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">Reservations</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b">Date</th>
              <th className="py-2 px-4 border-b">Time</th>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Phone</th>
              <th className="py-2 px-4 border-b">Guests</th>
              <th className="py-2 px-4 border-b">Status</th>
              <th className="py-2 px-4 border-b">Message</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((reservation) => (
              <tr key={reservation.id} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b">
                  {new Date(reservation.date).toLocaleDateString()}
                </td>
                <td className="py-2 px-4 border-b">{reservation.time}</td>
                <td className="py-2 px-4 border-b">{reservation.name}</td>
                <td className="py-2 px-4 border-b">{reservation.email}</td>
                <td className="py-2 px-4 border-b">{reservation.phone}</td>
                <td className="py-2 px-4 border-b">{reservation.guests}</td>
                <td className="py-2 px-4 border-b">
                  <span
                    className={`px-2 py-1 rounded-full text-sm ${
                      reservation.status === 'confirmed'
                        ? 'bg-green-100 text-green-800'
                        : reservation.status === 'cancelled'
                        ? 'bg-red-100 text-red-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {reservation.status}
                  </span>
                </td>
                <td className="py-2 px-4 border-b">{reservation.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
} 