'use client'

import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Page = () => {
  const params = useParams()
  const { id } = params

  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(false)
  const [input, setInput] = useState('')

  useEffect(() => {
    const fetchMessages = async () => {
      const res = await fetch('/api/id/GetAllTexts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      })
      const data = await res.json()
      setMessages(data.message)
    }
    fetchMessages()
  }, [id])

  // useEffect(() => {
  //   console.log('messages changed:', messages)
  // }, [messages])

  return (
    <div>
      <p className='text-white'>{id}</p>
    </div>
  )
}

export default Page
