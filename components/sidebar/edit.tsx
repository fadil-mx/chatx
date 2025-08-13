'use client'

import { useState } from 'react'
import { Ellipsis } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { deleteChat, renameChat } from '@/lib/actions/chat.action'
import { useRouter } from 'next/navigation'
import { Input } from '../ui/input'

const Edit = ({ chatId }: { chatId: string }) => {
  const router = useRouter()
  const [deleteOpen, setDeleteOpen] = useState(false)
  const [renameOpen, setRenameOpen] = useState(false)
  const [newTitle, setNewTitle] = useState('')

  const deletechat = async () => {
    await deleteChat(chatId)
    setDeleteOpen(false)
    router.refresh()
  }
  const renamechat = async () => {
    await renameChat(chatId, newTitle)
    setRenameOpen(false)
    router.refresh()
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className='p-1 hover:bg-gray-100 rounded-full'>
            <Ellipsis size={20} />
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          side='bottom'
          align='end'
          className='z-50 w-32 bg-white shadow-md rounded-md text-sm text-gray-800'
        >
          <DropdownMenuItem
            className='cursor-pointer hover:bg-gray-100 px-3 py-1.5 rounded-md transition'
            onSelect={() => setRenameOpen(true)}
          >
            Edit
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem
            className='cursor-pointer hover:bg-red-100 text-red-600 px-3 py-1.5 rounded-md transition'
            onSelect={() => setDeleteOpen(true)}
          >
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Dialog open={deleteOpen} onOpenChange={setDeleteOpen}>
        <DialogContent className='sm:max-w-md bg-white rounded-lg shadow-lg p-6'>
          <DialogHeader>
            <DialogTitle className='text-lg font-bold'>
              Are you absolutely sure?
            </DialogTitle>
            <DialogDescription className='text-gray-600'>
              This action cannot be undone. This will permanently delete this
              chat.
            </DialogDescription>
          </DialogHeader>
          <div className='flex justify-end  gap-3 mt-4 '>
            <Button
              variant='outline'
              className='font-bold'
              onClick={() => setDeleteOpen(false)}
            >
              Cancel
            </Button>
            <Button
              variant='outline'
              className='text-red-600 font-bold'
              onClick={deletechat}
            >
              Delete
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={renameOpen} onOpenChange={setRenameOpen}>
        <DialogContent className='sm:max-w-md bg-white rounded-lg shadow-lg p-6'>
          <DialogHeader>
            <DialogTitle className='text-lg font-bold'>
              Rename To :-
            </DialogTitle>
            <DialogDescription className='text-gray-600'>
              <Input
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    renamechat()
                  }
                }}
                value={newTitle}
                placeholder='Enter new chat name'
                className='mt-2 focus:outline-none focus:border-transparent'
                onChange={(e) => setNewTitle(e.target.value)}
              />
            </DialogDescription>
          </DialogHeader>
          <div className='flex justify-end  gap-3 mt-4 '>
            <Button
              variant='outline'
              className=' font-bold'
              onClick={renamechat}
            >
              Rename
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default Edit
