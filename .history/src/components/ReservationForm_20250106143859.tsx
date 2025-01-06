'use client'

import React, { useState, useEffect } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import { FaCalendar, FaClock, FaUser } from 'react-icons/fa'

interface TimeSlot {
  time: string
  available: boolean
  remainingSlots: number
}

export default function ReservationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: new Date(),
    time: '',
    guests: 2,
    message: ''
  })

  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([])
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    fetchAvailability(formData.date)
  }, [formData.date])

  const fetchAvailability = async (date: Date) => {
    try {
      const response = await fetch(
        `/api/reservations/availability?date=${date.toISOString().split('T')[0]}`
      )
      if (response.ok) {
        const data = await response.json()
        setTimeSlots(data)
      }
    } catch (error) {
      console.error('Error fetching availability:', error)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('/api/reservations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSuccess(true)
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: new Date(),
          time: '',
          guests: 2,
          message: ''
        })
        setTimeout(() => setSuccess(false), 5000)
      } else {
        alert('Error submitting reservation. Please try again.')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Error submitting reservation. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 transition-colors"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 transition-colors"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>

        <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 transition-colors"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>

        <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <label htmlFor="guests" className="block text-sm font-medium text-gray-700">
            Number of Guests
          </label>
          <div className="mt-1 relative">
            <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="number"
              id="guests"
              min="1"
              max="20"
              required
              className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 transition-colors"
              value={formData.guests}
              onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value) })}
            />
          </div>
        </div>

        <div className="animate-slide-up" style={{ animationDelay: '0.5s' }}>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">
            Date
          </label>
          <div className="mt-1 relative">
            <FaCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 z-10" />
            <DatePicker
              selected={formData.date}
              onChange={(date: Date) => setFormData({ ...formData, date })}
              className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 transition-colors"
              minDate={new Date()}
              dateFormat="MMMM d, yyyy"
              required
            />
          </div>
        </div>

        <div className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <label htmlFor="time" className="block text-sm font-medium text-gray-700">
            Time
          </label>
          <div className="mt-1 relative">
            <FaClock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <select
              id="time"
              required
              className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 transition-colors"
              value={formData.time}
              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
            >
              <option value="">Select a time</option>
              {timeSlots.map((slot) => (
                <option 
                  key={slot.time} 
                  value={slot.time}
                  disabled={!slot.available}
                >
                  {slot.time} {slot.available ? `(${slot.remainingSlots} tables available)` : '(Fully booked)'}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="mt-6 animate-slide-up" style={{ animationDelay: '0.7s' }}>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Special Requests
        </label>
        <textarea
          id="message"
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 transition-colors"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>

      <div className="mt-6 animate-slide-up" style={{ animationDelay: '0.8s' }}>
        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all transform hover:scale-105 ${
            loading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {loading ? 'Submitting...' : 'Make Reservation'}
        </button>
      </div>

      {success && (
        <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-md animate-slide-down">
          Reservation submitted successfully! We'll confirm your booking shortly.
        </div>
      )}
    </form>
  )
} 