'use server'

import { auth } from '@/auth'
import { connectDB } from '../db'
import Chat from '../db/models/chat-model'
import { formatError } from '../utils'
import Message from '../db/models/Message-model.ts'

export const getChats = async () => {
  try {
    const session = await auth()
    connectDB()
    const res = await Chat.find({
      userId: session?.user?.id,
    }).sort({ createdAt: -1 })
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
    chat.title = name
    await chat.save()
    return {
      message: 'Name Changed Successfully',
      status: 'success',
    }
  } catch (error) {
    return {
      message: formatError(error),
      success: false,
    }
  }
}

export const deleteChat = async (chatId: string) => {
  try {
    await connectDB()
    await Chat.findByIdAndDelete(chatId)
    await Message.deleteMany({ chatId })

    return {
      message: 'Chat  deleted successfully',
      status: 'success',
    }
  } catch (error) {
    return {
      message: formatError(error),
      success: false,
    }
  }
}
