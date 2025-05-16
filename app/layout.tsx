import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tool Website',
  description: 'A collection of useful web-based tools. Secure and Open Source.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/vnd.microsoft.icon" href="/logo.ico" />
      </head>
      <body className="bg-zinc-900">
        <Navbar />
        {children}
      </body>
    </html>
  )
} 