import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'Toko Kopi Jaya Lestari — Roastery Lereng Arjuno, Prigen 875 MDPL',
  description:
    'Biji kopi single origin Nusantara, dipanggang kecil per batch di roastery kami di Hutan Cempaka, Prigen, Pasuruan. Dikirim segar langsung ke pintumu.',
  keywords: ['kopi single origin', 'kopi arabika', 'kopi robusta', 'roastery prigen', 'kopi artisan indonesia'],
  openGraph: {
    title: 'Toko Kopi Jaya Lestari — Roastery Lereng Arjuno',
    description: 'Kopi single origin Nusantara, dipanggang segar per pesanan. Dari lereng Arjuno, 875 MDPL.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="id"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  )
}
