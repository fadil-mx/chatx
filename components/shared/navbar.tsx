import React from 'react'

import { Button, buttonVariants } from '@/components/ui/button'
import Link from 'next/link'
import { auth } from '@/auth'
import { SignOut } from '@/lib/actions/User.action'
import { cn } from '@/lib/utils'

const Navbar = async () => {
  const session = await auth()

  return (
    <div className='p-5 text-white flex justify-between items-center'>
      <h2 className=' text-2xl font-bold'>Chat-X</h2>
      {session ? (
        <div className=''></div>
      ) : (
        <div className='flex gap-5'>
          <Link
            className='border border-white rounded-full py-1 px-4  '
            href='/sign-in'
          >
            Sign-In
          </Link>
          <Button className='bg-white  rounded-full'>
            <Link className='bg-white text-black' href='/sign-up'>
              Sign-Up
            </Link>
          </Button>
        </div>
      )}
      {/* {session && (
        <div className=''>
          <form action={SignOut} className='w-full'>
            <Button
              className='w-full py-4 px-2 h-4 justify-start'
              variant='ghost'
            >
              Sign out
            </Button>
          </form>
        </div>
      )} */}
    </div>
  )
}

export default Navbar
