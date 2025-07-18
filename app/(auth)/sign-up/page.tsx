import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import React from 'react'
import Signupform from './Signupform'

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{
    callbackUrl: string
  }>
}) => {
  const searchparams = await searchParams
  const { callbackUrl = '/' } = searchparams
  const session = await auth()
  if (session) {
    redirect(callbackUrl)
  }

  return (
    <div className=' '>
      <Signupform />
    </div>
  )
}

export default page
