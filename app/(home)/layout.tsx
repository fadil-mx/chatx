import Navbar from '@/components/shared/navbar'
import { AppSidebar } from '@/components/Sidebar'
import type { Metadata } from 'next'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body
        className='\
      // bg-[#303030] 
      bg-black
      '
      >
        <SidebarProvider>
          <AppSidebar />
          <main className='w-full'>
            <Navbar />
            <div className='px-4 '> {children}</div>
          </main>
        </SidebarProvider>
      </body>
    </html>
  )
}
