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

const items = [
  {
    title: 'hei there',
    url: '#',
  },
  {
    title: 'react basics',
    url: '#',
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className='text-white text-2xl font-bold mb-4 mt-4'>
            Chats
          </SidebarGroupLabel>

          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Button className='bg-white'>
                  <Plus /> New Chat
                </Button>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>

          <SidebarSeparator className='bg-gray-400 w-full m-0 mt-4' />
          <SidebarGroupContent>
            <SidebarMenu className='space-y-4 mt-4'>
              {items.map((item) => (
                <SidebarMenuItem key={item.title} className=''>
                  <SidebarMenuButton className='text-white text-lg' asChild>
                    <div className='w-full  flex items-center justify-between '>
                      <Link href={item.url} className='flex items-center gap-2'>
                        <MessageSquare size={28} />
                        <span>{item.title}</span>
                      </Link>
                      <Edit />
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
