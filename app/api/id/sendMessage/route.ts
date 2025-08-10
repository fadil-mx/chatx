import { connectDB } from '@/lib/db'
import Message from '@/lib/db/models/Message-model.ts'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const data = await req.json()
  await connectDB()
  await Message.create({
    chatId: data.id,
    role: 'user',
    content: data.prompt,
  })

  const response = await fetch('http://localhost:11434/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'gemma3:4b',
      messages: [
        {
          role: 'user',
          content: data.prompt,
        },
      ],
      stream: false,
    }),
  })

  const result = await response.json()
  await Message.create({
    chatId: data.id,
    role: 'assistant',
    content: result.message.content,
  })

  return NextResponse.json({ response: result.message.content })
}
