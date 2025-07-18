import mongoose from 'mongoose'

let isconnected = false
export const connectDB = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error('MONGODB_URL is not defined in environment variables')
      return
    }
    if (isconnected) {
      console.log('Database is already connected')
      return
    }
    mongoose.connect(process.env.MONGODB_URI)
    isconnected = true
    console.log('Database connected successfully')
  } catch (error) {
    console.error('Database connection failed:', error)
    throw error // Re-throw the error to handle it in the calling function
  }
}
