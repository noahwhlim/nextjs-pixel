import './globals.css'
import { Inter } from 'next/font/google'
import Link from "next/link"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Google Pixel 7',
  description: 'Generated by create next app',
}

export const header = (
  <header className='border-b border-gray-500 px-8 pb-2 flow-root font-sans'>
    <div className='float-left mt-5 mb-2 text-black text-xl font-bold tracking-wide'>Pixel 7</div>

    <div className='float-right mt-6'>
      <ul className='flex flex-row text-black text-xs items-center'>
        <li className='mx-2'>Overview</li>
        <li className='mx-2'>Tech Specs</li>
        <Link href="/" className="bg-blue-500 text-white mx-2 px-2 py-1 rounded-full focus:shadow-outline hover:bg-blue-600">Buy</Link>
      </ul>
    </div>
  </header>
)

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {header}
        {children}
      </body>
    </html>
  )
}
