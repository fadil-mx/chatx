import { auth } from '@/auth'
import { connectDB } from '@/lib/db'
import Chat from '@/lib/db/models/chat-model'
import Message from '@/lib/db/models/Message-model.ts'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { prompt } = await req.json()
  const session = await auth()
  if (!session?.user?.id) {
    throw new Error('Unauthorized')
  }
  await connectDB()
  const chat = await Chat.create({
    userId: session.user.id,
    model: 'gemma3:4b',
    title: prompt.slice(0, 10),
  })

  await Message.create({
    chatId: chat._id,
    role: 'user',
    content: prompt,
  })

  const resposnse = await fetch('http://ollama:11434/api/chat', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gemma3:4b',
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
      stream: false,
    }),
  })

  const result = await resposnse.json()
  await Message.create({
    chatId: chat._id,
    role: 'assistant',
    content: result.message.content,
  })

  return NextResponse.json({
    message: 'Chat created successfully',
    chatId: chat._id.toString(),
  })
}
