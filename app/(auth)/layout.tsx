import type { Metadata } from 'next'
import { Toaster } from '@/components/ui/sonner'

export const metadata: Metadata = {
  title: 'Sign Up',
  description: 'Sign Up Page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className='min-h-screen flex items-center justify-center bg-gray-50'>
        <main className=' w-full max-w-md min-w-80 p-6 '>{children}</main>
        <Toaster />
      </body>
    </html>
  )
}
