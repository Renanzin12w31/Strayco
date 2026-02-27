import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import WhatsAppFloatingButton from '@/components/ui/WhatsAppFloatingButton'
import { Providers } from './providers'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Supply - Stray Noir',
  description:
    'Plataforma de moda streetwear premium que une minimalismo, luxo contemporâneo e identidade urbana.',
  keywords: ['streetwear', 'moda', 'luxury', 'minimal', 'roupas'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${outfit.variable}`}>
      <body>
        <Providers>
          <Header />
          <main className="min-h-screen">{children}</main>

          {/* Botão flutuante do WhatsApp */}
          <WhatsAppFloatingButton />

          <Footer />
        </Providers>
      </body>
    </html>
  )
}
