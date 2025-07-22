import React from 'react'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { auth } from '@/auth'
import { SignOut } from '@/lib/actions/User.action'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { LogOut, Settings } from 'lucide-react'
import { SidebarTrigger } from '@/components/ui/sidebar'

const Navbar = async () => {
  const session = await auth()

  return (
    <div className='p-5 text-white flex justify-between items-center'>
      <div className='flex items-center gap-4'>
        <SidebarTrigger />
        <h2 className=' text-2xl font-bold'>Chat-X</h2>
      </div>
      {session ? (
        <div className=''>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar className='w-12 h-12 border-none outline-none'>
                <AvatarImage src='https://github.com/shadcn.png' />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>

            <DropdownMenuContent className='bg-[#EDEDED] text-black shadow-lg rounded-md w-56 p-2 -translate-x-6'>
              <DropdownMenuLabel className='text-gray-700 flex items-center '>
                {/* <User /> */}
                {session.user?.email}
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className='hover:bg-gray-300 rounded px-2 py-3 flex gap-4'>
                <Settings />
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem className='hover:bg-gray-300 rounded px-2 py-1'>
                <LogOut />
                <div className=''>
                  <form action={SignOut} className='w-full'>
                    <Button
                      className='w-full py-4 px-2 h-4 justify-start text-red-800'
                      variant='ghost'
                    >
                      Sign out
                    </Button>
                  </form>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
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
    </div>
  )
}

export default Navbar
