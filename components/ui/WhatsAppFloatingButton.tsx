'use client'

import { MessageCircle } from 'lucide-react'

function buildWaLink(number: string, text: string) {
  const cleaned = number.replace(/\D/g, '')
  const msg = encodeURIComponent(text)
  return `https://wa.me/${cleaned}?text=${msg}`
}

/**
 * Configure o número no .env:
 * NEXT_PUBLIC_WHATSAPP_NUMBER=5511999999999
 */
export default function WhatsAppFloatingButton() {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER

  // Se não tiver número configurado, não renderiza (evita link errado em produção).
  if (!number) return null

  const href = buildWaLink(
    number,
    'Olá! Vim pelo site Strayco e quero tirar uma dúvida / finalizar um pedido.'
  )

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Atendimento via WhatsApp"
      className="fixed bottom-5 right-5 z-[60]"
    >
      <div className="group flex items-center gap-3 rounded-full border border-white/10 bg-black/60 backdrop-blur px-4 py-3 shadow-lg hover:bg-black/75 transition">
        <div className="h-10 w-10 rounded-full bg-orange-primary flex items-center justify-center">
          <MessageCircle className="h-5 w-5 text-black" />
        </div>
        <div className="hidden sm:block">
          <p className="text-white text-sm font-semibold leading-tight">Falar no WhatsApp</p>
          <p className="text-gray-300 text-xs leading-tight">Atendimento rápido</p>
        </div>
      </div>
    </a>
  )
}