import { MessageSquare, MessagesSquare, Plus } from 'lucide-react'

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from '@/components/ui/sidebar'
import Link from 'next/link'
import { Button } from './ui/button'
import Edit from './sidebar/edit'
import { getChats } from '@/lib/actions/chat.action'

export async function AppSidebar() {
  const items = await getChats()

  return (
    <Sidebar>
      <SidebarContent className='custom-scrollbar'>
        <SidebarGroup>
          <SidebarGroupLabel className='text-white text-2xl font-bold mb-4 mt-4'>
            Chats
          </SidebarGroupLabel>

          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href='/'>
                  <Button className='bg-white w-full rounded-lg'>
                    <Plus /> New Chat
                  </Button>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>

          <SidebarSeparator className='bg-gray-400 w-full m-0 mt-4 ' />
          <SidebarGroupContent>
            <SidebarMenu className='space-y-4 mt-4 '>
              {items.data.map((item: any) => (
                <SidebarMenuItem key={item._id} className=''>
                  <SidebarMenuButton className='text-white text-lg' asChild>
                    <div className='w-full  flex items-center justify-between '>
                      <Link
                        href={`/chat/${item._id}`}
                        className='flex items-center gap-2'
                      >
                        <MessageSquare size={28} />
                        <span className='truncate max-w-[150px] block'>
                          {item.title}
                        </span>
                      </Link>
                      <Edit chatId={item._id} />
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
