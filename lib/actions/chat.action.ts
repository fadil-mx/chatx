'use server'

import { connectDB } from '../db'
import Chat from '../db/models/chat-model'
import { formatError } from '../utils'

export const getChats = async () => {
  try {
    connectDB()
    const res = await Chat.find().sort({ createdAt: -1 })
    return {
      message: 'Chats fetched successfully',
      data: JSON.parse(JSON.stringify(res)),
      status: 'success',
    }
  } catch (error) {
    return {
      message: formatError(error),
      success: false,
    }
  }
}

export const renameChat = async (chatId: string, name: string) => {
  try {
    connectDB()
    const chat = await Chat.findById(chatId)
    if (!chat) {
      throw new Error('Chat not found')
    }
    return {
      message: 'Chat fetched successfully',
      data: JSON.parse(JSON.stringify(chat)),
      status: 'success',
    }
  } catch (error) {}
}
