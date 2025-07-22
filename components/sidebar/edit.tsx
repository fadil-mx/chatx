'use client'

import { Ellipsis } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const Edit = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Ellipsis size={30} />
      </DropdownMenuTrigger>

      <DropdownMenuContent
        side='bottom'
        align='end'
        className='z-50 w-32 bg-white shadow-md rounded-md text-sm text-gray-800'
      >
        <DropdownMenuItem
          className='cursor-pointer hover:bg-gray-100 px-3 py-1.5 rounded-md transition'
          onSelect={() => console.log('Edit clicked')}
        >
          Rename
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          className='cursor-pointer hover:bg-red-100 text-red-600 px-3 py-1.5 rounded-md transition'
          onSelect={() => console.log('Delete clicked')}
        >
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default Edit
