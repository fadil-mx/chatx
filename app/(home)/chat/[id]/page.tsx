'use client'

import React, { use, useEffect, useRef, useState } from 'react'
import { useParams } from 'next/navigation'
import ChatMessage from '@/components/ChatMessage'
import { Textarea } from '@/components/ui/textarea'
import { Plus, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import Chat from '@/lib/db/models/chat-model'

const Page = () => {
  const { id } = useParams()

  type Message = { role: string; content: string; chatId: string }
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(false)
  const [input, setInput] = useState('')
  const [model, setModel] = useState('gemma3:4b')

  const messagesEndRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await fetch('/api/id/GetAllTexts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id }),
        })

        const data = await res.json()
        setMessages(data.message || [])
      } catch (error) {
        console.error('Error fetching messages:', error)
      }
    }

    fetchMessages()
  }, [id])

  const handleSubmit = async () => {
    if (!input.trim()) return

    const chatId = typeof id === 'string' ? id : String(id ?? '')
    const userMsg = { role: 'user', content: input, chatId }

    setMessages((prev) => [...prev, userMsg])
    setInput('')
    setLoading(true)

    try {
      const res = await fetch('/api/id/sendMessage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, prompt: input, modelName: model }),
      })

      const data = await res.json()
      const assistantMsg = { role: 'assistant', content: data.response, chatId }

      setMessages((prev) => [...prev, assistantMsg])
    } catch (error) {
      console.error('Error sending message:', error)
    } finally {
      setLoading(false)
    }
  }

  //to scroll to down whenever  the messages get updated
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // useEffect(() => {
  //   console.log('Messages updated:', model)
  // }, [model])

  return (
    <div className='h-screen flex flex-col '>
      {/* Messages List */}
      <div className='flex-1 overflow-y-scroll  custom-scrollbar space-y-5 bg-black rounded p-3'>
        {messages.map((msg, idx) => (
          <ChatMessage key={idx} role={msg.role} content={msg.content} />
        ))}

        {loading && (
          <div className='max-w-5xl  mx-auto'>
            <div className='loader'></div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className='sticky bottom-0  '>
        <div className='px-5  border border-gray-700 bg-[#111]  rounded-3xl pb-3 '>
          <Textarea
            value={input}
            placeholder='Ask anything...'
            className='flex-1 text-lg resize-none rounded-md p-3 text-white  placeholder:text-gray-400 focus:outline-none focus:ring-0 focus:border-transparent border-none'
            rows={2}
            onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
            onChange={(e) => setInput(e.target.value)}
          />

          <div className='flex justify-between'>
            <div className='flex gap-4'>
              <Plus className='h-10 w-10  text-white rounded-full' />
              <Select
                value={model.toString()}
                onValueChange={(value) => {
                  setModel(value)
                }}
              >
                <SelectTrigger className=' hover:bg-gray-700 transition bg-gray-800 text-white border-none'>
                  <SelectValue>{model}</SelectValue>
                </SelectTrigger>
                <SelectContent className='bg-gray-700 text-white'>
                  <SelectItem value='gemma3:4b'>gemma3:4b</SelectItem>
                  <SelectItem value='gemma3n:e2b'>gemma3n:e2b </SelectItem>
                  <SelectItem value='deepseek-r1:7b'>deepseek-r1:7b</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button
              onClick={handleSubmit}
              disabled={loading}
              size='icon'
              className=' h-12 w-12 shrink-0 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition'
            >
              <Send className='h-5 w-5' />
            </Button>
          </div>
        </div>
        <p className='text-white text-center py-2'>
          Chat-X can make mistakes. Check important info
        </p>
      </div>
    </div>
  )
}

export default Page
