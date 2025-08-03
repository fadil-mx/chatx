import { connectDB } from '@/lib/db'
import Message from '@/lib/db/models/Message-model.ts'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { id } = await req.json()
    await connectDB()
    const response = await Message.find({ chatId: id }).sort({ createdAt: 1 })
    return NextResponse.json({
      message: response,
    })
  } catch (error) {
    console.error('Error fetching messages:', error)
    return NextResponse.json(
      { error: 'Failed to fetch messages' },
      { status: 500 }
    )
  }
}
