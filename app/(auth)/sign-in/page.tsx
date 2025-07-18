import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import React from 'react'
import Signin from './Signinform'

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
      <Signin />
    </div>
  )
}

export default page
