import { auth } from '@/auth'
import Inputhome from '@/components/input/input-home'
import { redirect } from 'next/navigation'
import React from 'react'

const Page = async () => {
  const session = await auth()
  if (!session?.user?.id) {
    redirect('/sign-up?callbackUrl=/') // Redirect to sign-up if not authenticated
  }
  return (
    <div className='flex flex-col min-h-screen bg-black text-white'>
      <div className='flex-1 overflow-y-auto p-4'>
        <div className=' flex  items-center justify-center  '>
          <h1 className='text-3xl font-bold mt-24'>
            How can I help you today?
          </h1>
        </div>
      </div>

      <div className='sticky bottom-0 w-full bg-black p-4 border-t border-gray-800'>
        <Inputhome />
      </div>
    </div>
  )
}

export default Page
