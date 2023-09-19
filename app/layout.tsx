import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './navbar/navbar.tsx'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EcoFriend',
  description: 'EcoFriend Sustainability App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar />
      {children}
      </body>
    </html>
  )
}
