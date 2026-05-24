import type { Metadata } from 'next'
import { Cinzel, Cormorant_Garamond } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cinzel = Cinzel({ 
  subsets: ["latin"],
  variable: '--font-cinzel'
})

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant'
})

export const metadata: Metadata = {
  title: 'Remilia Scarlet - The Scarlet Devil',
  description: 'A fan website dedicated to Remilia Scarlet, the charismatic vampire mistress of the Scarlet Devil Mansion',
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${cinzel.variable} ${cormorant.variable} font-serif antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
