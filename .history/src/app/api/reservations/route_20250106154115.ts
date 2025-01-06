import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, date, time, guests, message } = body

    const reservation = await prisma.reservation.create({
      data: {
        name,
        email,
        phone,
        date: new Date(date),
        time,
        guests,
        message: message || undefined,
      },
    })

    return NextResponse.json(reservation, { status: 201 })
  } catch (error) {
    console.error('Error creating reservation:', error)
    return NextResponse.json(
      { error: 'Error creating reservation' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const reservations = await prisma.reservation.findMany({
      orderBy: {
        date: 'desc',
      },
    })

    return NextResponse.json(reservations)
  } catch (error) {
    console.error('Error fetching reservations:', error)
    return NextResponse.json(
      { error: 'Error fetching reservations' },
      { status: 500 }
    )
  }
} 