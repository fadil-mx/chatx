'use server'
import { UserSignINValidator, UserSignUPValidator } from '@/types'
import { connectDB } from '../db'
import { UserSignUpValidator } from '../validator'
import User from '../db/models/user'
import bcrypt from 'bcryptjs'
import { formatError } from '../utils'
import { signIn, signOut as authSignOut } from '@/auth'
import { redirect } from 'next/navigation'

export const registerUser = async (userData: UserSignUPValidator) => {
  try {
    await connectDB()
    const Userdata = await UserSignUpValidator.parseAsync(userData)
    await User.create({
      ...Userdata,
      password: await bcrypt.hash(Userdata.password, 10),
    })
    return { success: true, message: 'User registered successfully' }
  } catch (error) {
    return {
      success: false,
      message: formatError(error),
    }
  }
}

export async function signInWithCredentials(user: UserSignINValidator) {
  try {
    return await signIn('credentials', { ...user, redirect: false })
  } catch (error) {
    console.log(error)
    throw new Error('Invalid email or password')
  }
}

export async function SignOut() {
  const redirectTO = await authSignOut({ redirect: false })
  redirect(redirectTO.redirect)
}
