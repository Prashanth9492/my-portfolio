import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Navbar from '@/components/navbar'
import './globals.css'

const _inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: 'Alex | Full Stack Developer & Designer',
  description: 'Premium portfolio showcasing web development projects, skills, and experience. Built with React, Next.js, and modern technologies.',
  keywords: 'developer, designer, full stack, react, next.js, web development',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#0f0f0f',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={_inter.variable}>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
