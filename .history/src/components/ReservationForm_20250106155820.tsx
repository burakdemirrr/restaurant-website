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
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto animate-fade-in relative">
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-gold-100 rounded-full -z-10 animate-scale-up" 
           style={{ animationDelay: '0.3s' }} />
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary-50 rounded-full -z-10 animate-scale-up"
           style={{ animationDelay: '0.5s' }} />
           
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <label htmlFor="name" className="block text-sm font-medium text-primary-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            required
            className="mt-2 block w-full rounded-lg border-gray-200 shadow-sm focus:border-gold-500 focus:ring-gold-500 transition-colors"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <label htmlFor="email" className="block text-sm font-medium text-primary-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            required
            className="mt-2 block w-full rounded-lg border-gray-200 shadow-sm focus:border-gold-500 focus:ring-gold-500 transition-colors"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>

        <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <label htmlFor="phone" className="block text-sm font-medium text-primary-700">
            Phone
          </label>
          <div className="mt-2 relative rounded-lg shadow-sm">
            <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="tel"
              id="phone"
              required
              className="block w-full pl-10 rounded-lg border-gray-200 focus:border-gold-500 focus:ring-gold-500 transition-colors"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
        </div>

        <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <label htmlFor="guests" className="block text-sm font-medium text-primary-700">
            Number of Guests
          </label>
          <div className="mt-2 relative rounded-lg shadow-sm">
            <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="number"
              id="guests"
              min="1"
              max="20"
              required
              className="block w-full pl-10 rounded-lg border-gray-200 focus:border-gold-500 focus:ring-gold-500 transition-colors"
              value={formData.guests}
              onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value) })}
            />
          </div>
        </div>

        <div className="animate-slide-up" style={{ animationDelay: '0.5s' }}>
          <label htmlFor="date" className="block text-sm font-medium text-primary-700">
            Date
          </label>
          <div className="mt-2 relative rounded-lg shadow-sm">
            <FaCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 z-10" />
            <DatePicker
              selected={formData.date}
              onChange={(date: Date | null) => date && setFormData({ ...formData, date })}
              className="block w-full pl-10 rounded-lg border-gray-200 focus:border-gold-500 focus:ring-gold-500 transition-colors"
              minDate={new Date()}
              dateFormat="MMMM d, yyyy"
              required
            />
          </div>
        </div>

        <div className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <label htmlFor="time" className="block text-sm font-medium text-primary-700">
            Time
          </label>
          <div className="mt-2 relative rounded-lg shadow-sm">
            <FaClock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <select
              id="time"
              required
              className="block w-full pl-10 rounded-lg border-gray-200 focus:border-gold-500 focus:ring-gold-500 transition-colors"
              value={formData.time}
              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
            >
              <option value="">Select a time</option>
              {timeSlots.map((slot) => (
                <option 
                  key={slot.time} 
                  value={slot.time}
                  disabled={!slot.available}
                  className={!slot.available ? 'text-gray-400' : ''}
                >
                  {slot.time} {slot.available ? `(${slot.remainingSlots} tables available)` : '(Fully booked)'}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="mt-8 animate-slide-up" style={{ animationDelay: '0.7s' }}>
        <label htmlFor="message" className="block text-sm font-medium text-primary-700">
          Special Requests
        </label>
        <textarea
          id="message"
          rows={4}
          className="mt-2 block w-full rounded-lg border-gray-200 shadow-sm focus:border-gold-500 focus:ring-gold-500 transition-colors"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>

      <div className="mt-8 animate-slide-up" style={{ animationDelay: '0.8s' }}>
        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-gold-500 text-white py-3 px-6 rounded-lg font-medium shadow-lg
            hover:bg-gold-600 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2 
            transition-all transform hover:scale-105 active:scale-95
            ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {loading ? 'Submitting...' : 'Make Reservation'}
        </button>
      </div>

      {success && (
        <div className="mt-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg animate-bounce-in">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <p className="font-medium">Reservation submitted successfully! Well confirm your booking shortly.</p>
          </div>
        </div>
      )}
    </form>
  )
} 