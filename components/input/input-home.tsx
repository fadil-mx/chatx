'use client'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Send } from 'lucide-react'
import { useRouter } from 'next/navigation'

const Inputhome = () => {
  const router = useRouter()
  const [text, setText] = useState('')
  const handleSubmit = async () => {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ prompt: text }),
    })
    const data = await res.json()
    alert(`Response: ${data.message} Chat ID: ${data.chatId}`)
    router.push(`/chat/${data.chatId}`)
  }

  return (
    <div>
      <div className='flex  items-center gap-3'>
        <Textarea
          placeholder='Ask anything...'
          className=' flex-1 text-lg resize-none rounded-md border border-gray-700 bg-[#111] p-3 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600'
          rows={2}
          onChange={(e) => setText(e.target.value)}
        />
        <Button
          onClick={handleSubmit}
          size='icon'
          className='h-10 w-10 shrink-0 rounded-md bg-gray-800 text-white hover:bg-gray-700 transition'
        >
          <Send className='h-5 w-5' />
        </Button>
      </div>
    </div>
  )
}

export default Inputhome
