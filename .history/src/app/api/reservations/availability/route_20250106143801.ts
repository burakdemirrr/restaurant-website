import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const MAX_RESERVATIONS_PER_SLOT = 4 // Maximum number of tables available per time slot

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const date = searchParams.get('date')
    
    if (!date) {
      return NextResponse.json(
        { error: 'Date parameter is required' },
        { status: 400 }
      )
    }

    // Get all reservations for the specified date
    const reservations = await prisma.reservation.findMany({
      where: {
        date: {
          gte: new Date(`${date}T00:00:00`),
          lt: new Date(`${date}T23:59:59`),
        },
      },
      select: {
        time: true,
        guests: true,
      },
    })

    // Define available time slots
    const timeSlots = [
      '12:00', '13:00', '14:00', '15:00', '16:00',
      '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
    ]

    // Calculate availability for each time slot
    const availability = timeSlots.map(time => {
      const reservationsAtTime = reservations.filter(r => r.time === time)
      const totalReservations = reservationsAtTime.length
      const isAvailable = totalReservations < MAX_RESERVATIONS_PER_SLOT

      return {
        time,
        available: isAvailable,
        remainingSlots: Math.max(0, MAX_RESERVATIONS_PER_SLOT - totalReservations)
      }
    })

    return NextResponse.json(availability)
  } catch (error) {
    console.error('Error checking availability:', error)
    return NextResponse.json(
      { error: 'Error checking availability' },
      { status: 500 }
    )
  }
} 