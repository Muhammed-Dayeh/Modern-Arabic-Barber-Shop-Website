import type { Metadata } from 'next'
import { Cairo } from 'next/font/google'
import './globals.css'

const cairo = Cairo({ 
  subsets: ['arabic', 'latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'صالون الملك - King\'s Barber Shop',
  description: 'أفضل صالون حلاقة رجالية في الرياض. خدمات احترافية بأعلى معايير الجودة.',
  keywords: 'صالون حلاقة, حلاق, الرياض, قصات شعر, تهذيب لحية, King\'s Barber Shop',
  authors: [{ name: 'King\'s Barber Shop' }],
  openGraph: {
    title: 'صالون الملك - King\'s Barber Shop',
    description: 'أفضل صالون حلاقة رجالية في الرياض. خدمات احترافية بأعلى معايير الجودة.',
    type: 'website',
    locale: 'ar_SA',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={cairo.className}>
        {children}
      </body>
    </html>
  )
}